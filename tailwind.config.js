/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#F0F5F2',
          100: '#D9E6E0',
          200: '#B5D0C4',
          300: '#8BB5A2',
          400: '#5F997E',
          500: '#3D7D60',
          600: '#286248',
          700: '#1D4E37',
          800: '#153C2A',
          900: '#0F2A1D',
          950: '#07160F',
          DEFAULT: '#0F2A1D'
        },
        gold: {
          50: '#FAF5EA',
          100: '#F3E8CE',
          200: '#E7D1A1',
          300: '#DAB874',
          400: '#CBA253',
          500: '#B8893B',
          600: '#9E712B',
          700: '#7D5720',
          800: '#5C3E16',
          900: '#3F280D',
          DEFAULT: '#B8893B'
        },
        ivory: {
          50: '#FCFAF6',
          100: '#FAF7F0',
          200: '#F4EFE2',
          300: '#ECE3CE',
          400: '#DDD1B5',
          DEFAULT: '#FAF7F0'
        },
        spice: {
          50: '#FCF3EA',
          100: '#F9E4D0',
          200: '#F2C59D',
          300: '#EBA56A',
          400: '#E38A3E',
          500: '#D9731F',
          600: '#B55A13',
          700: '#8A420A',
          DEFAULT: '#D9731F'
        },
        charcoal: {
          DEFAULT: '#1C1C1C',
          light: '#2E2E2E',
          dark: '#121212'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(184, 137, 59, 0.35)',
        'gold-subtle': '0 4px 20px -2px rgba(184, 137, 59, 0.15)',
        'luxury': '0 20px 40px -15px rgba(15, 42, 29, 0.12)',
        'luxury-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
