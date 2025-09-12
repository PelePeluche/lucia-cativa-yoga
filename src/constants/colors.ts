// Color palette constants with TypeScript types
import type { ColorPalette, LuciaColor } from '../types/config';

export const COLORS: ColorPalette = {
  lucia: {
    cream: '#f9f0dc',
    brown: '#9a8576', 
    mauve: '#a3738b',
    rose: '#e0a6a8',
    teal: '#7ba098'
  }
} as const;

// Tailwind-compatible color classes
export const LUCIA_COLORS: Record<LuciaColor, string> = {
  'lucia-cream': COLORS.lucia.cream,
  'lucia-brown': COLORS.lucia.brown,
  'lucia-mauve': COLORS.lucia.mauve,
  'lucia-rose': COLORS.lucia.rose,
  'lucia-teal': COLORS.lucia.teal
} as const;

// Color utilities
export const getColorValue = (colorName: LuciaColor): string => {
  return LUCIA_COLORS[colorName];
};

export const isValidLuciaColor = (color: string): color is LuciaColor => {
  return Object.keys(LUCIA_COLORS).includes(color);
};
