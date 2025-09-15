// Shadow system for consistent elevation
export const SHADOWS = {
  none: 'shadow-none',
  sm: 'shadow-sm',           // 0 1px 2px 0 rgb(0 0 0 / 0.05)
  md: 'shadow-md',           // 0 4px 6px -1px rgb(0 0 0 / 0.1)
  lg: 'shadow-lg',           // 0 10px 15px -3px rgb(0 0 0 / 0.1)
  xl: 'shadow-xl',           // 0 20px 25px -5px rgb(0 0 0 / 0.1)
  '2xl': 'shadow-2xl',       // 0 25px 50px -12px rgb(0 0 0 / 0.25)
  inner: 'shadow-inner'      // inset 0 2px 4px 0 rgb(0 0 0 / 0.05)
} as const;

// Component-specific shadows
export const COMPONENT_SHADOWS = {
  card: SHADOWS.md,
  button: SHADOWS.sm,
  modal: SHADOWS.xl,
  dropdown: SHADOWS.lg,
  image: SHADOWS.md
} as const;

// Hover shadows for interactive elements
export const HOVER_SHADOWS = {
  card: 'hover:shadow-lg',
  button: 'hover:shadow-md',
  image: 'hover:shadow-xl'
} as const;

export type ShadowKey = keyof typeof SHADOWS;
