const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F95738',
        dark: '#1E293B',
        mid: '#B8BFC6',
        light: '#FFFFFF',
      },
      fontFamily: {
        inter: 'Inter, system-ui, sans-serif',
      },
      fontSize: {
        body: '18px',
        'body-sm': '16px',
        caption: '0.75rem',
        subtitle: '1.5rem',
        title: '3.5rem',    
      },
      height: {
        main: 'calc(var(--window-height) - 5rem)',
      }
    },
    fontSize: {
      ...defaultTheme.fontSize,
      base: ['1rem', '2rem'],
    }
  },
  plugins: [],
}
