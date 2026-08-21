// Navigation configuration with TypeScript types
import type { NavigationConfig, NavItem } from '../types/config';

export const MAIN_NAVIGATION: NavItem[] = [
  {
    label: 'nav.aboutMe',
    href: '#sobre-mi',
    isAnchor: true
  },
  {
    label: 'nav.onlineYoga',
    href: '/yoga-online',
    isExternal: false
  },
  {
    label: 'nav.inPersonYoga', 
    href: '/yoga-presencial',
    isExternal: false
  },
  {
    label: 'nav.retreats',
    href: '/retiros',
    isExternal: false
  },
  {
    label: 'nav.contact',
    href: '#contacto',
    isAnchor: true
  }
] as const;

export const FOOTER_NAVIGATION: NavItem[] = [
  {
    label: 'footer.privacyPolicy',
    href: '/politica-privacidad',
    isExternal: false
  },
  {
    label: 'footer.termsOfService',
    href: '/terminos-servicio', 
    isExternal: false
  },
  {
    label: 'footer.cookiePolicy',
    href: '/politica-cookies',
    isExternal: false
  }
] as const;

export const NAVIGATION_CONFIG: NavigationConfig = {
  main: MAIN_NAVIGATION,
  footer: FOOTER_NAVIGATION
} as const;
