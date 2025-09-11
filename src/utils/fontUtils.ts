import { FontFamily } from '../constants/fonts';

/**
 * Genera las clases para títulos usando la fuente Yeseva One
 * @param additionalClasses Clases adicionales para combinar con la fuente
 * @returns String con las clases CSS completas
 */
export function heading(additionalClasses: string = ''): string {
  return `${FontFamily.HEADING} ${additionalClasses}`.trim();
}

/**
 * Genera las clases para texto normal usando la fuente Muli
 * @param additionalClasses Clases adicionales para combinar con la fuente
 * @returns String con las clases CSS completas
 */
export function body(additionalClasses: string = ''): string {
  return `${FontFamily.BODY} ${additionalClasses}`.trim();
}

/**
 * Genera clases para elementos específicos con estilos tipográficos predefinidos
 */
export const typography = {
  // Títulos principales
  h1: heading('text-4xl md:text-5xl lg:text-6xl font-normal'),
  h2: heading('text-3xl md:text-4xl font-normal'),
  h3: heading('text-2xl md:text-3xl font-normal'),
  h4: heading('text-xl md:text-2xl font-normal'),
  
  // Textos
  paragraph: body('text-base leading-relaxed'),
  lead: body('text-lg md:text-xl leading-relaxed'),
  small: body('text-sm leading-normal'),
  
  // Elementos UI
  button: body('font-medium tracking-wide'),
  nav: body('font-medium'),
  
  // Acentos
  quote: heading('text-xl italic'),
};
