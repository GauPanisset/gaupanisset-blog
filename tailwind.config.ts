const svgToDataUri = require('mini-svg-data-uri');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/business/**/*.{ts,tsx}',
    './src/technical/ui/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      screens: {
        xs: '375px',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'article-in': {
          from: {
            color: 'hsl(var(--primary))',
            'background-color': 'transparent',
          },
          to: {
            color: 'hsl(var(--foreground))',
            'background-color': 'hsl(var(--background))',
          },
        },
        'article-title-in': {
          from: {
            transform: 'translateY(var(--title-start-y)) scale(0.66666)',
          },
          to: {
            transform: 'translateY(0px) scale(1)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'article-in':
          'article-in 0.75s cubic-bezier(0.75, 0, 0.5, 0.99) forwards',
        'article-title-in':
          'article-title-in 0.75s cubic-bezier(0.75, 0, 0.5, 0.99) forwards',
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': 'hsl(var(--foreground))',
            '--tw-prose-bullets': 'hsl(var(--border))',
            '--tw-prose-headings': 'hsl(var(--foreground))',
            '--tw-prose-links': 'hsl(var(--foreground))',
            '--tw-prose-bold': 'hsl(var(--foreground))',
            '--tw-prose-captions': 'hsl(var(--muted-foreground))',
            '--tw-prose-th-borders': 'hsl(var(--border))',
            '--tw-prose-td-borders': 'hsl(var(--border))',
            '--tw-prose-invert-body': 'hsl(var(--foreground))',
            '--tw-prose-invert-bullets': 'hsl(var(--border))',
            '--tw-prose-invert-headings': 'hsl(var(--foreground))',
            '--tw-prose-invert-links': 'hsl(var(--foreground))',
            '--tw-prose-invert-bold': 'hsl(var(--foreground))',
            '--tw-prose-invert-captions': 'hsl(var(--muted-foreground))',
            '--tw-prose-invert-th-borders': 'hsl(var(--border))',
            '--tw-prose-invert-td-borders': 'hsl(var(--border))',
          },
        },
      },
      height: {
        /**
         * TODO This should be removed when upgrading tailwindcss.
         * @see https://github.com/tailwindlabs/tailwindcss/discussions/8216
         */
        screen: ['100vh', '100dvh'],
        main: ['calc(100vh - 4rem)', 'calc(100dvh - 4rem)'],
      },
      backgroundImage: {
        'dot-pattern': `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16px" height="16px" fill="none" stroke="hsla(0,17%,8%,0.15)"><path d="M0 .5H31.5V32"/></svg>`
        )}")`,
        'dot-pattern-dark': `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16px" height="16px" fill="none" stroke="hsla(33,52%,91%,0.15)"><path d="M0 .5H31.5V32"/></svg>`
        )}")`,
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')],
};
