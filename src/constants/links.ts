/**
 * External Links Configuration
 * Centralized management of all external URLs used throughout the application
 */

export const EXTERNAL_LINKS = {
  // Yoga Services
  YOGA_ONLINE: 'https://wa.link/70o3o6',
  YOGA_PRESENCIAL: 'https://sites.google.com/view/lucativayoga/inicio',
  
  // Social Media
  INSTAGRAM: 'https://www.instagram.com/lucativa.yoga?igsh=MXRkYWt0dWFnNHZ2bA==',
  FACEBOOK: 'https://facebook.com/lucativayoga',
  TIKTOK: 'https://tiktok.com/@lucativayoga',
  
  // Internal Navigation
  PRACTICE_SECTION: '#practica-conmigo',
  GALLERY_SECTION: '#galeria',
  ABOUT_SECTION: '#sobre-mi',
  TESTIMONIALS_SECTION: '#testimonios'
} as const;

export type ExternalLinkKey = keyof typeof EXTERNAL_LINKS;
