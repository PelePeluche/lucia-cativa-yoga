/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Nueva paleta de colores Lu Cativa
        'lucia': {
          'mauve': '#a3738b',      // Rosa/malva - acentos principales, CTAs
          'rose': '#e0a6a8',       // Rosa claro - fondos suaves, hover states
          'teal': '#577874',       // Verde azulado - texto secundario, contraste
          'cream': '#f9f0dc',      // Crema - fondos principales
          'brown': '#9a8576',      // Marrón - texto principal, elementos neutros
        }
      },
      fontFamily: {
        'heading': ['Yeseva One', 'serif'],
        'body': ['Montserrat', 'sans-serif'],
        'logo': ['Sego', 'sans-serif'], // Exclusivo para "Lu Cativa"
      },
    },
  },
  plugins: [],
  safelist: [
    // Asegurar que las clases personalizadas se generen
    'text-lucia-mauve',
    'text-lucia-rose', 
    'text-lucia-teal',
    'text-lucia-cream',
    'text-lucia-brown',
    'bg-lucia-mauve',
    'bg-lucia-rose',
    'bg-lucia-teal', 
    'bg-lucia-cream',
    'bg-lucia-brown',
    'border-lucia-mauve',
    'border-lucia-rose',
    'border-lucia-teal',
    'border-lucia-cream',
    'border-lucia-brown',
    'hover:bg-lucia-mauve',
    'hover:bg-lucia-rose',
    'hover:bg-lucia-teal',
    'hover:text-lucia-mauve',
    'hover:text-lucia-rose',
    'hover:text-lucia-teal',
    'hover:text-lucia-brown',
  ]
};
