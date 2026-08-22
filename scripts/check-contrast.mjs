#!/usr/bin/env node
/**
 * Guardrail de color para el sitio de Lu Cativa.
 *
 * Contexto: en agosto de 2026 el sitio quedó ilegible en producción. La causa
 * fue que coexistían `tailwind.config.js` y `tailwind.config.mjs`; Tailwind
 * resuelve `.js` primero, así que el config real nunca se aplicó y las clases
 * `text-lucia-*` no generaban NINGUNA regla CSS. El navegador caía a negro por
 * defecto y el sitio parecía correcto. Al borrar el duplicado se aplicó la
 * paleta real por primera vez y se descubrió que ningún color de marca alcanza
 * el contraste mínimo para texto.
 *
 * Este script chequea las cuatro cosas que causaron o agravaron ese incidente.
 * Salida distinta de 0 = falla.
 */

import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;

// --- Utilidades de contraste (WCAG 2.1 relative luminance) -----------------

const channel = (c) => {
  const s = c / 255;
  return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
};

const luminance = (hex) => {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
};

const contrast = (a, b) => {
  const [x, y] = [luminance(a), luminance(b)];
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
};

// --- Contrato de la paleta --------------------------------------------------

/** Fondos claros que realmente existen en el sitio. */
const LIGHT_BACKGROUNDS = {
  white: '#ffffff',
  cream: '#f9f0dc',
  rose: '#e0a6a8',
};

/**
 * Colores válidos para texto de lectura, y el contraste mínimo que deben
 * mantener. `ink` tiene que servir sobre CUALQUIER fondo claro del sitio;
 * `ink-soft` es solo para texto secundario sobre blanco y crema.
 */
const TEXT_COLORS = [
  { name: 'lucia-ink', hex: '#4c423b', over: ['white', 'cream', 'rose'], min: 4.5 },
  { name: 'lucia-ink-soft', hex: '#746459', over: ['white', 'cream'], min: 4.5 },
  { name: 'lucia-mauve-dark', hex: '#825c6f', over: ['white', 'cream'], min: 4.5 },
];

/**
 * Colores de marca que son SUPERFICIE, no tinta. Ninguno llega a 4.5:1 sobre
 * los fondos claros, así que no pueden usarse como color de texto de lectura.
 */
const SURFACE_ONLY = ['lucia-brown'];

/**
 * Los mismos colores, pero escritos como hex a mano. Este es el agujero por el
 * que se escapó el menú de navegación: usaba `color: #9a8576` en un bloque
 * <style>, así que no había ninguna clase `text-lucia-*` que delatara el
 * problema. Si el color se escribe a mano, el chequeo por clase no lo ve.
 */
const SURFACE_HEX = {
  '#9a8576': 'lucia-brown',
  '#a3738b': 'lucia-mauve',
  '#e0a6a8': 'lucia-rose',
};

const failures = [];
const fail = (check, message) => failures.push({ check, message });

// --- Check A: no puede haber dos configs de Tailwind -----------------------
// Esta es la causa raíz del incidente original.

const configs = ['tailwind.config.js', 'tailwind.config.cjs', 'tailwind.config.ts', 'tailwind.config.mjs']
  .filter((f) => existsSync(join(ROOT, f)));

if (configs.length > 1) {
  fail(
    'config duplicado',
    `Hay ${configs.length} configs de Tailwind: ${configs.join(', ')}.\n` +
      `      Tailwind resuelve uno solo y silencia al resto: las clases del config\n` +
      `      ignorado no generan CSS y el sitio se ve "bien" por accidente.\n` +
      `      Dejá UNO solo.`
  );
}

// --- Check B: la tinta tiene que contrastar de verdad ----------------------
// Si alguien "suaviza" estos colores para que queden más lindos, esto avisa.

for (const { name, hex, over, min } of TEXT_COLORS) {
  for (const bg of over) {
    const ratio = contrast(hex, LIGHT_BACKGROUNDS[bg]);
    if (ratio < min) {
      fail(
        'contraste de tinta',
        `${name} (${hex}) sobre ${bg} (${LIGHT_BACKGROUNDS[bg]}) da ${ratio.toFixed(2)}:1, ` +
          `necesita ${min}:1.`
      );
    }
  }
}

// --- Check C / D: reglas de uso en el markup -------------------------------

const sourceFiles = (function walk(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    return statSync(full).isDirectory()
      ? walk(full)
      : ['.astro', '.ts', '.tsx', '.html'].includes(extname(full))
        ? [full]
        : [];
  });
})(join(ROOT, 'src'));

for (const file of sourceFiles) {
  const rel = file.slice(ROOT.length);
  const lines = readFileSync(file, 'utf8').split('\n');

  lines.forEach((line, i) => {
    const at = `${rel}:${i + 1}`;

    // Check C: un color de superficie usado como color de texto.
    for (const surface of SURFACE_ONLY) {
      if (new RegExp(`(^|[\\s"'\`:])text-${surface}\\b`).test(line)) {
        fail(
          'superficie usada como texto',
          `${at} usa text-${surface}, que es un color de superficie y no llega a ` +
            `4.5:1 sobre ningún fondo claro. Usá text-lucia-ink o text-lucia-ink-soft.`
        );
      }
    }

    // Check C-bis: el mismo color de superficie, pero escrito como hex a mano
    // en una declaración `color:`. Solo miramos `color:` — como fondo, borde o
    // relleno estos colores son perfectamente válidos.
    const colorDecl = line.match(/(?<!-)\bcolor:\s*(#[0-9a-fA-F]{6})/);
    if (colorDecl) {
      const hex = colorDecl[1].toLowerCase();
      if (SURFACE_HEX[hex]) {
        fail(
          'superficie usada como texto',
          `${at} define color: ${hex} (${SURFACE_HEX[hex]}) a mano. Es un color de ` +
            `superficie y no llega a 4.5:1 sobre fondo claro.\n` +
            `      Para texto usá #4c423b (ink) o #746459 (ink-soft); para un link o ` +
            `estado hover, #825c6f (mauve-dark).`
        );
      }
    }

    // Check D: opacity apilada sobre un color de texto. Fue lo que hundió el
    // contraste del footer a 1.66:1 — el color pasa, la mezcla no.
    if (/text-lucia-[a-z-]+/.test(line) && /\bopacity-\d+/.test(line)) {
      fail(
        'opacity sobre texto',
        `${at} apila opacity-* sobre un text-lucia-*. La opacidad mezcla el texto ` +
          `con el fondo, así que el contraste real es peor que el del color solo.\n` +
          `      Elegí un color que ya tenga el tono que buscás: sobre fondo claro,\n` +
          `      text-lucia-ink-soft; sobre fondo oscuro, text-white.`
      );
    }
  });
}

// --- Reporte ---------------------------------------------------------------

if (failures.length === 0) {
  console.log('check-contrast: OK');
  console.log(`  ${configs.length} config de Tailwind, ${TEXT_COLORS.length} colores de tinta validados, ${sourceFiles.length} archivos revisados.`);
  for (const { name, hex, over } of TEXT_COLORS) {
    const detail = over.map((bg) => `${bg} ${contrast(hex, LIGHT_BACKGROUNDS[bg]).toFixed(2)}`).join(' | ');
    console.log(`  ${name.padEnd(15)} ${hex}  ${detail}`);
  }
  process.exit(0);
}

console.error(`check-contrast: ${failures.length} problema(s)\n`);
for (const { check, message } of failures) {
  console.error(`  [${check}] ${message}`);
}
console.error('');
process.exit(1);
