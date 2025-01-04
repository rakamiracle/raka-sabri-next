// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        DEFAULT: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      textColor: {
        DEFAULT: 'var(--foreground)',
        foreground: 'var(--foreground)',
      },
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          '2xl': '1440px',
        },
      },
    },
  },
  plugins: [],
}
export default config