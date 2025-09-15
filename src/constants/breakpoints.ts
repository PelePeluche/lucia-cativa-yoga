// Responsive breakpoints system
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px', 
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
} as const;

// Media queries for JavaScript
export const MEDIA_QUERIES = {
  mobile: `(max-width: ${BREAKPOINTS.md})`,
  tablet: `(min-width: ${BREAKPOINTS.md}) and (max-width: ${BREAKPOINTS.lg})`,
  desktop: `(min-width: ${BREAKPOINTS.lg})`,
  largeDesktop: `(min-width: ${BREAKPOINTS.xl})`
} as const;

// Responsive utilities
export const RESPONSIVE_CLASSES = {
  container: 'max-w-6xl mx-auto',
  grid: {
    mobile: 'grid-cols-1',
    tablet: 'md:grid-cols-2', 
    desktop: 'lg:grid-cols-3'
  },
  text: {
    heading: 'text-3xl sm:text-4xl lg:text-5xl',
    subheading: 'text-xl sm:text-2xl lg:text-3xl',
    body: 'text-base md:text-lg'
  }
} as const;

export type BreakpointKey = keyof typeof BREAKPOINTS;
