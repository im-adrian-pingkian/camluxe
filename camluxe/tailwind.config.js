/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        main: 'var(--main-font)',
        sub: 'var(--sub-font)',
        paragraph: 'var(--text-font)'
      },
      colors: {
        'main-color': {
          DEFAULT: '#A39B91',
          dark: '#5c5650'
        },
        'accent-color': {
          DEFAULT: '#7E2323',
          dark: '#9e3a3a'
        },
        'text-color': {
          DEFAULT: '#0A090B',
          dark: '#f5f5f7'
        }
      }
    }
  },
  plugins: []
}