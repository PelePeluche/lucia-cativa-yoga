/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Nueva paleta de colores Lu Cativa - configuración correcta
        'lucia-mauve': '#a3738b',      // Rosa/malva - acentos principales, CTAs
        'lucia-rose': '#e0a6a8',       // Rosa claro - fondos suaves, hover states
        'lucia-teal': '#577874',       // Verde azulado - texto secundario, contraste
        'lucia-cream': '#f9f0dc',      // Crema - fondos principales
        'lucia-brown': '#9a8576',      // Marrón - texto principal, elementos neutros
      },
      fontFamily: {
        'heading': ['Yeseva One', 'serif'],
        'body': ['Montserrat', 'sans-serif'],
        'logo': ['Sego', 'sans-serif'], // Exclusivo para "Lu Cativa"
      }
    },
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.nav-bg': {
          'border-bottom': '1px solid #e0a6a8',
          'background-color': 'rgba(249, 240, 220, 0.95)',
          'backdrop-filter': 'blur(10px)'
        },
        '.footer-bg': {
          'background-color': '#9a8576',
          'color': '#f9f0dc'
        },
        '.footer-text': {
          'color': '#f9f0dc'
        },
        '.footer-text-muted': {
          'color': 'rgba(249, 240, 220, 0.8)'
        },
        '.footer-border': {
          'border-color': 'rgba(249, 240, 220, 0.3)'
        },
        '.social-link': {
          'color': 'rgba(249, 240, 220, 0.8)',
          'transition': 'color 0.3s',
          '&:hover': {
            'color': '#a3738b'
          }
        },
        '.legal-link': {
          'color': 'rgba(249, 240, 220, 0.8)',
          'transition': 'color 0.2s',
          '&:hover': {
            'color': '#f9f0dc'
          }
        },
        '.newsletter-input': {
          'background-color': 'rgba(87, 120, 116, 0.2)',
          'border': '1px solid rgba(249, 240, 220, 0.3)',
          'color': '#f9f0dc',
          '&:focus': {
            'border-color': '#a3738b'
          }
        },
        '.newsletter-button': {
          'background-color': '#a3738b',
          'transition': 'background-color 0.3s',
          '&:hover': {
            'background-color': '#577874'
          }
        },
        '.section-title': {
          'color': '#9a8576'
        },
        '.section-line': {
          'background-color': '#a3738b'
        },
        '.test-class': {
          'background-color': 'red !important',
          'color': 'white !important',
          'padding': '20px !important',
          'border': '5px solid blue !important'
        }
      })
    }
  ],
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
    // Clases de componentes reutilizables
    'nav-bg',
    'footer-bg',
    'footer-text',
    'footer-text-muted',
    'footer-border',
    'social-link',
    'legal-link',
    'newsletter-input',
    'newsletter-button',
    'section-title',
    'section-line',
    'test-class',
  ]
};
