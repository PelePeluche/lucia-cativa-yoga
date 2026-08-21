/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Lu Cativa.
        //
        // IMPORTANTE - separación de roles:
        // Los colores de marca (mauve/rose/teal/cream/brown) son colores de
        // SUPERFICIE y ACENTO. Ninguno alcanza 4.5:1 sobre los fondos claros
        // del sitio, así que NO se usan para texto de lectura. Sirven como
        // fondo, borde, ornamento y título grande (donde el mínimo es 3:1).
        //
        // El texto de lectura usa lucia-ink / lucia-ink-soft.
        'lucia-mauve': '#a3738b',      // Rosa/malva - acentos, CTAs, títulos grandes
        'lucia-rose': '#e0a6a8',       // Rosa claro - fondos suaves, hover states
        'lucia-teal': '#577874',       // Verde azulado - fondos, acentos, títulos
        'lucia-cream': '#f9f0dc',      // Crema - fondos principales
        'lucia-brown': '#9a8576',      // Marrón - superficie neutra (NO texto)

        // Tinta: los únicos colores válidos para texto de lectura.
        // Es el mismo marrón de marca, oscurecido hasta que contrasta.
        // Contraste medido contra los tres fondos claros del sitio:
        //   ink      -> blanco 9.77 | crema 8.62 | rose 4.74  (AA en los tres)
        //   ink-soft -> blanco 5.66 | crema 4.99              (AA, texto secundario)
        'lucia-ink': '#4c423b',        // Texto principal
        'lucia-ink-soft': '#746459',   // Texto secundario / de apoyo

        // Malva oscurecido: el acento de marca, pero legible en texto chico
        // (links, estados hover/activo). Crema 4.99 | blanco 5.66.
        // lucia-mauve solo alcanza 3.44 sobre crema: sirve de fondo, borde y
        // título grande, no de link.
        'lucia-mauve-dark': '#825c6f',
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
        // Los íconos sociales usan fill="currentColor", así que heredan este
        // color. El color anterior era crema (rgba(249,240,220,.8)) porque
        // este componente se diseñó para el footer oscuro de '.footer-bg',
        // pero Footer.astro usa fondo crema: crema sobre crema = invisible.
        // Provisional hasta definir si el footer va claro u oscuro.
        '.social-link': {
          'color': '#746459',
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
          'color': '#4c423b'
        },
        '.section-line': {
          'background-color': '#a3738b'
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
    'text-lucia-ink',
    'text-lucia-ink-soft',
    'text-lucia-mauve-dark',
    'hover:text-lucia-mauve-dark',
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
    'hover:text-lucia-ink',
    'bg-lucia-ink',
    'border-lucia-ink',
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
  ]
};
