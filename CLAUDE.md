# Lu Cativa Yoga — Guía para Claude Code

Sitio web de yoga, hecho en Astro (estático), bilingüe: español (por defecto) e inglés.
Producción: **luciacativayoga.com** (se publica desde la rama `main`).

## Flujo de trabajo OBLIGATORIO (regla de oro)

- **NUNCA** commitees ni hagas merge directo a `main`. `main` es producción.
- Para cualquier cambio: **creá una rama nueva**, commiteá ahí, y **abrí un Pull Request hacia `main`**.
- **NO mergees el PR.** Lo revisa y lo aprueba una persona. Tu trabajo termina al abrir el PR.
- Después de pushear, **decile a quien te habla la URL de preview de ESA rama**. Cloudflare
  genera una URL única por cada cambio (del tipo `https://<código>.lucia-cativa-yoga.pages.dev`).
  **No des la URL de `staging`** (`staging.lucia-cativa-yoga.pages.dev`): los cambios de tu rama
  no están ahí, y la persona no vería nada. Buscá y pasá la URL del deployment de tu rama/PR.

## Dónde vive el contenido

- **Textos en español:** `src/i18n/es.json`
- **Textos en inglés:** `src/i18n/en.json`
- **Testimonios (bilingüe):** `src/i18n/testimonials.json` — con la forma `{ "es": [...], "en": [...] }`
- **Imágenes:** `public/img/`

El sitio es bilingüe: si cambiás un texto en español, ofrecé actualizar también su equivalente
en inglés en `en.json`, para que las dos versiones queden coherentes.

## Cómo hablar

- Respondé en **español claro y simple**. Quien te habla puede no ser una persona técnica.
- Antes de hacer un cambio, confirmá en pocas palabras qué vas a modificar.
- Al terminar, resumí qué cambiaste y pasá la URL de preview para revisarlo.

## Qué evitar

- No toques archivos de configuración (`astro.config`, `package.json`, `functions/`, `_headers`,
  `_redirects`, `wrangler`, `tsconfig`) salvo que te lo pidan explícitamente y entendiendo el riesgo.
- No borres archivos ni secciones enteras salvo pedido claro y explícito.
- No incluyas nunca contraseñas ni datos privados en los cambios.
- Si un pedido es ambiguo o puede romper algo, **preguntá antes de actuar**.
