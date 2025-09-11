/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Yeseva One', 'serif'],
        body: ['Montserrat', 'sans-serif'],
        logo: ['Segoe UI', 'sans-serif'],
      },
      colors: {
        purple: {
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
        },
      }
    },
  },
  plugins: [],
}
