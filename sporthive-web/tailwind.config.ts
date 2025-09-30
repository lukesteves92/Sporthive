import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EEF9FF',
          100: '#D7F1FF',
          200: '#AFE3FF',
          300: '#7AD0FF',
          400: '#44B8FF',
          500: '#1D9EFF',
          600: '#0E7FE0',
          700: '#0C64B3',
          800: '#0C528F',
          900: '#0B4576'
        }
      },
      fontFamily: { sans: ['ui-sans-serif', 'system-ui', 'Inter', 'Arial'] }
    }
  },
  plugins: []
}
export default config