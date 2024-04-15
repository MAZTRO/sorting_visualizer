import type { Config } from 'tailwindcss'

export default {
  content: {
    relative: true,
    files: ['./src/**/*.{js,jsx,ts,tsx,html}']
  },
  theme: {
    extend: {
      colors: {
        'sa-darkPurple': 'var(--color-darkPurple)',
        'sa-lightPurple': 'var(--color-lightPurple)',
        'sa-lightPurple30': 'var(--color-lightPurple30)',
        'sa-midBlue': 'var(--color-midBlue)',
        'sa-lightBlue': 'var(--color-lightBlue)'
      }
    }
  },
  plugins: []
} satisfies Config
