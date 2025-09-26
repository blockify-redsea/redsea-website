import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{ts,tsx,mdx}',
    './src/components/**/*.{ts,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#D72638', foreground: '#FFFFFF' },
        ocean: { DEFAULT: '#0A2540', light: '#163A5F', foreground: '#E6F0FA' }
      },
      borderRadius: { xl: '1rem', '2xl': '1.25rem' },
      boxShadow: { soft: '0 8px 28px rgba(0,0,0,0.08)' }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        redsea: {
          primary: '#D72638',
          'primary-content': '#FFFFFF',
          secondary: '#0A2540',
          'secondary-content': '#E6F0FA',
          accent: '#3B82F6',
          neutral: '#1F2937',
          'base-100': '#FFFFFF',
          'base-200': '#F3F4F6',
          'base-300': '#E5E7EB',
          'base-content': '#1F2937'
        }
      },
      'dark',
      'light'
    ],
    darkTheme: 'dark',
    base: true,
    styled: true,
    utils: true,
    prefix: '',
    logs: true,
    themeRoot: ':root'
  }
} satisfies Config
