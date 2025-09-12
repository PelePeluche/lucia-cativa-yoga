// TypeScript definitions for configuration and constants
export type LuciaColor = 
  | 'lucia-cream' 
  | 'lucia-brown' 
  | 'lucia-mauve' 
  | 'lucia-rose' 
  | 'lucia-teal';

export interface SiteConfig {
  title: string;
  description: string;
  url: string;
  author: string;
  email: string;
  phone: string;
  address: string;
  social: SocialLinks;
}

export interface SocialLinks {
  instagram: string;
  youtube: string;
  facebook?: string;
  twitter?: string;
}

export interface ColorPalette {
  lucia: {
    cream: string;
    brown: string;
    mauve: string;
    rose: string;
    teal: string;
  };
}

export interface TypographyConfig {
  fontFamily: {
    heading: string;
    body: string;
  };
  fontSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
  };
}

export interface SpacingConfig {
  section: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  container: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
  isAnchor?: boolean;
}

export interface NavigationConfig {
  main: NavItem[];
  footer: NavItem[];
}

// SEO types
export interface SEOConfig {
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  siteUrl: string;
  defaultImage: string;
  twitterHandle?: string;
}

// Analytics types
export interface AnalyticsConfig {
  googleAnalyticsId?: string;
  facebookPixelId?: string;
  hotjarId?: string;
}

// Environment types
export type Environment = 'development' | 'staging' | 'production';

export interface EnvironmentConfig {
  env: Environment;
  isDev: boolean;
  isProd: boolean;
  apiUrl: string;
  cdnUrl?: string;
}
