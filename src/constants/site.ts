// Site configuration constants with TypeScript types
import type { SiteConfig, SocialLinks, SEOConfig } from '../types/config';

export const SOCIAL_LINKS: SocialLinks = {
  instagram: 'https://www.instagram.com/lucativa.yoga?igsh=MXRkYWt0dWFnNHZ2bA==',
  youtube: 'https://www.youtube.com/@lucativayoga',
  facebook: 'https://www.facebook.com/lucativayoga',
  twitter: 'https://twitter.com/lucativayoga'
} as const;

export const SITE_CONFIG: SiteConfig = {
  title: 'Lu Cativa - Vinyasa Yoga Online',
  description: 'Clases de Vinyasa Yoga Online con Lucía Cativa. Movete con fuerza, conciencia y sensibilidad desde donde estés.',
  url: 'https://luciacativa.com',
  author: 'Lucía Cativa',
  email: 'hola@luciacativa.com',
  phone: '+54 11 1234 5678',
  address: 'Córdoba, Argentina',
  social: SOCIAL_LINKS
} as const;

export const SEO_CONFIG: SEOConfig = {
  defaultTitle: 'Lu Cativa - Vinyasa Yoga Online',
  titleTemplate: '%s | Lu Cativa',
  defaultDescription: 'Clases de Vinyasa Yoga Online con Lucía Cativa. Una práctica intensa, creativa y sensible para volver al cuerpo, al presente y a la fuerza que ya está en vos.',
  siteUrl: 'https://luciacativa.com',
  defaultImage: '/img/hero-yoga.png',
  twitterHandle: '@lucativayoga'
} as const;
