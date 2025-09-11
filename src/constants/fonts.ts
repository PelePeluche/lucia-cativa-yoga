// Enumeración de fuentes disponibles para la aplicación
export enum FontFamily {
  HEADING = 'font-heading',
  BODY = 'font-body',
}

// Configuración real de las fuentes (para referencia interna)
export const FONT_CONFIG = {
  heading: {
    name: 'Pacifico',
    fallback: 'cursive',
    weights: [400],
  },
  body: {
    name: 'Roboto Mono',
    fallback: 'monospace',
    weights: [400, 500, 700],
  },
};

// Función para generar la URL de Google Fonts
export function getFontURL(): string {
  const families = [
    `${FONT_CONFIG.heading.name.replace(' ', '+')}:wght@${FONT_CONFIG.heading.weights.join(';')}`,
    `${FONT_CONFIG.body.name.replace(' ', '+')}:wght@${FONT_CONFIG.body.weights.join(';')}`,
  ];
  
  return `https://fonts.googleapis.com/css2?family=${families.join('&family=')}&display=swap`;
}

// CSS Variables para fuentes (para referencia)
export const FONT_CSS_VARS = {
  heading: `${FONT_CONFIG.heading.name}, ${FONT_CONFIG.heading.fallback}`,
  body: `${FONT_CONFIG.body.name}, ${FONT_CONFIG.body.fallback}`,
};
