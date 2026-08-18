// Site configuration constants with TypeScript types
import type { SiteConfig, SocialLinks, SEOConfig } from '../types/config';

export const SOCIAL_LINKS: SocialLinks = {
  instagram: 'https://www.instagram.com/lucativa.yoga?igsh=MXRkYWt0dWFnNHZ2bA==',
  facebook: 'https://facebook.com/lucativayoga',
  youtube: 'https://www.youtube.com/@lucativa-yoga' // TODO: Actualizar con el canal correcto
  // tiktok: 'https://tiktok.com/@lucativayoga' // Desactivado temporalmente
} as const;

export const SITE_CONFIG: SiteConfig = {
  title: 'Lu Cativa - Vinyasa Yoga Online',
  description: 'Clases de Vinyasa Yoga Online con Lucía Cativa. Movete con fuerza, conciencia y sensibilidad desde donde estés.',
  url: 'https://luciacativa.com',
  author: 'Lucía Cativa',
  email: 'lucativayoga@gmail.com',
  phone: '+54 9 351 679-9440',
  address: 'Córdoba, Argentina',
  social: SOCIAL_LINKS
} as const;

export const SEO_CONFIG: SEOConfig = {
  defaultTitle: 'Lu Cativa - Vinyasa Yoga Online',
  titleTemplate: '%s | Lu Cativa',
  defaultDescription: 'Clases de Vinyasa Yoga Online con Lucía Cativa. Una práctica intensa, creativa y sensible para volver al cuerpo, al presente y a la fuerza que ya está en vos.',
  siteUrl: 'https://luciacativa.com',
  defaultImage: '/img/hero-yoga.jpeg',
  twitterHandle: '@lucativayoga'
} as const;
