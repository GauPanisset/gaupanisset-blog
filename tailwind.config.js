const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      /**
       * TODO Remove those colors, since I use @tailwindcss/typography
       */
      colors: {
        primary: '#F95738',
        dark: '#1E293B',
        mid: '#B8BFC6',
        light: '#FFFFFF',
      },
      fontFamily: {
        inter: 'Inter, system-ui, sans-serif',
      },
      /**
       * TODO Remove this, since I use @tailwindcss/typography
       */
      fontSize: {
        body: '18px',
        'body-sm': '16px',
        caption: '0.75rem',
        "subtitle-3": '1.25rem',
        "subtitle-2": '1.5rem',
        title: '3.5rem',    
      },
      /**
       * Full screen height minus the navbar height.
       */
      height: {
        main: 'calc(var(--window-height) - 5rem)',
      },
      /**
       * Override @tailwindcss/typography
       */
      typography: {
        DEFAULT: {
          css: {
            /**
             * I don't know why but `prose` add the ` characters between code...
             */
            "code::before": { content: '' },
            "code::after": { content: '' },
            /**
             * Use the background color of the a11y-dark theme.
             */
            "--tw-prose-pre-bg": '#2b2b2b',
            "--tw-prose-invert-pre-bg": '#2b2b2b',
          }
        }
    }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
