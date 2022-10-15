/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F95738',
        dark: '#1E293B',
      },
      fontFamily: {
        inter: 'Inter, system-ui, sans-serif',
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
