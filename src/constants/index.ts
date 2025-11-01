// Design System - Central export file
// This file provides a unified interface to all design system constants

// Core design tokens
export * from './colors';
export * from './fonts';
export * from './spacing';
export * from './breakpoints';
export * from './animations';
export * from './shadows';
export * from './links';

// Site configuration
export * from './site';
export * from './contact';
export * from './navigation';

// Design system utilities
export const DESIGN_SYSTEM = {
  version: '1.0.0',
  name: 'Lu Cativa Yoga Design System',
  description: 'Comprehensive design system for consistent UI/UX'
} as const;

// Enhanced responsive typography classes with better proportions
export const RESPONSIVE_CLASSES = {
  text: {
    // Hero title - very large, impactful
    hero: 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl',
    // Main headings - large but readable
    heading: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
    // Section titles - medium large (increased +2pts)
    subheading: 'text-3xl sm:text-4xl md:text-5xl',
    // Large text for emphasis (increased +2pts)
    large: 'text-xl sm:text-2xl md:text-3xl',
    // Regular body text (original size)
    body: 'text-base sm:text-lg',
    // Small text for captions, etc.
    small: 'text-sm sm:text-base'
  }
} as const;

// Quick access to most used design tokens
export const DS = {
  // Colors
  colors: {
    primary: '#a3738b',      // lucia-mauve
    secondary: '#577874',    // lucia-teal
    accent: '#e0a6a8',       // lucia-rose
    neutral: '#9a8576',      // lucia-brown
    background: '#f9f0dc'    // lucia-cream
  },
  
  // Typography
  fonts: {
    heading: 'font-heading',  // Yeseva One
    body: 'font-body'        // Montserrat
  },
  
  // Spacing (most used)
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem', 
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem'
  },
  
  // Shadows (most used)
  shadows: {
    card: 'shadow-md',
    button: 'shadow-sm',
    hover: 'hover:shadow-lg'
  }
} as const;
