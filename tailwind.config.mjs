import typographyPlugin from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Gaming palette - dark + neon accent
        brand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        gaming: {
          bg: '#0a0a0f',
          card: '#131320',
          border: '#1e1e32',
          accent: '#00ff88',
          accent2: '#7c3aed',
          text: '#e4e4e7',
          muted: '#71717a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      typography: (theme) => ({
        gaming: {
          css: {
            '--tw-prose-body': theme('colors.gaming.text'),
            '--tw-prose-headings': theme('colors.white'),
            '--tw-prose-links': theme('colors.gaming.accent'),
            '--tw-prose-bold': theme('colors.white'),
            '--tw-prose-code': theme('colors.gaming.accent'),
            '--tw-prose-pre-bg': theme('colors.gaming.card'),
            '--tw-prose-pre-border': theme('colors.gaming.border'),
            maxWidth: '75ch',
            fontSize: '1.05rem',
            lineHeight: '1.8',
          },
        },
      }),
    },
  },
  plugins: [typographyPlugin],
};
