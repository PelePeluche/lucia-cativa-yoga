/**
 * External Links Configuration
 * Centralized management of all external URLs used throughout the application
 */

export const EXTERNAL_LINKS = {
  // Yoga Services - External Links
  YOGA_ONLINE_WHATSAPP: 'https://wa.me/5493516225399',
  YOGA_PRESENCIAL_SITE: 'https://sites.google.com/view/lucativayoga/inicio',
  
  // Yoga Services - Internal Pages
  YOGA_ONLINE_PAGE: '/yoga-online',
  YOGA_PRESENCIAL_PAGE: '/yoga-presencial',
  
  // Forms / Contact
  CONTACT_FORM: 'https://wa.me/5493516225399',
  
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
