// Spacing system constants for consistent layout
export const SPACING = {
  // Base spacing unit (4px)
  xs: '0.25rem',    // 4px
  sm: '0.5rem',     // 8px
  md: '1rem',       // 16px
  lg: '1.5rem',     // 24px
  xl: '2rem',       // 32px
  '2xl': '3rem',    // 48px
  '3xl': '4rem',    // 64px
  '4xl': '6rem',    // 96px
  '5xl': '8rem',    // 128px
} as const;

// Section spacing
export const SECTION_SPACING = {
  padding: {
    mobile: 'py-16 px-4',
    desktop: 'md:py-24 sm:px-6 lg:px-8'
  },
  margin: {
    small: 'mb-8',
    medium: 'mb-12',
    large: 'mb-16'
  }
} as const;

// Component spacing
export const COMPONENT_SPACING = {
  card: {
    padding: 'p-6 md:p-8',
    gap: 'gap-4 md:gap-6'
  },
  button: {
    padding: {
      small: 'px-4 py-2',
      medium: 'px-6 py-3',
      large: 'px-8 py-4'
    }
  }
} as const;

export type SpacingKey = keyof typeof SPACING;
export type SectionSpacingType = keyof typeof SECTION_SPACING;
