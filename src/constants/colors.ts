// Color palette constants for Lu Cativa Yoga website
// Using flat structure to match Tailwind config (lucia-cream, lucia-mauve, etc.)
export const COLORS = {
  'lucia-cream': '#f9f0dc',
  'lucia-brown': '#9a8576', 
  'lucia-mauve': '#a3738b',
  'lucia-rose': '#e0a6a8',
  'lucia-teal': '#577874'
} as const;

// Color validation utility
export function isValidColor(color: string): boolean {
  return /^#[0-9A-F]{6}$/i.test(color);
}

// Get color by name utility
export function getColor(colorName: keyof typeof COLORS): string {
  return COLORS[colorName];
}

// Color palette for easy access
export const COLOR_PALETTE = {
  primary: COLORS['lucia-mauve'],
  secondary: COLORS['lucia-teal'],
  accent: COLORS['lucia-rose'],
  neutral: COLORS['lucia-brown'],
  background: COLORS['lucia-cream']
} as const;

// Export individual colors for convenience
export const LUCIA_CREAM = COLORS['lucia-cream'];
export const LUCIA_BROWN = COLORS['lucia-brown'];
export const LUCIA_MAUVE = COLORS['lucia-mauve'];
export const LUCIA_ROSE = COLORS['lucia-rose'];
export const LUCIA_TEAL = COLORS['lucia-teal'];
