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
        // Deep Royal Midnight Navy (matching the official logo background)
        navy: {
          50: '#F0F4FA',
          100: '#DBE5F3',
          200: '#B8CEE8',
          300: '#8EB0DA',
          400: '#5F8EC6',
          500: '#396EB0',
          600: '#255294',
          700: '#1B3E74',
          800: '#122240',
          900: '#0A1325',
          950: '#060C18',
          DEFAULT: '#0A1325'
        },
        // Forest mapped to the Midnight Navy palette for seamless global theme transformation
        forest: {
          50: '#F0F4FA',
          100: '#DBE5F3',
          200: '#B8CEE8',
          300: '#8EB0DA',
          400: '#5F8EC6',
          500: '#396EB0',
          600: '#255294',
          700: '#1B3E74',
          800: '#122240',
          900: '#0A1325',
          950: '#060C18',
          DEFAULT: '#0A1325'
        },
        gold: {
          50: '#FAF6EE',
          100: '#F4EBD8',
          200: '#E8D5B0',
          300: '#DBBE85',
          400: '#D0A95F',
          500: '#C59B4E',
          600: '#AB8239',
          700: '#886427',
          800: '#644719',
          900: '#432E0E',
          DEFAULT: '#C59B4E'
        },
        platinum: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          DEFAULT: '#CBD5E1'
        },
        ivory: {
          50: '#FFFFFF',
          100: '#F8FAFC',
          200: '#F1F5F9',
          300: '#E2E8F0',
          400: '#CBD5E1',
          DEFAULT: '#F8FAFC'
        },
        spice: {
          50: '#FCF3EA',
          100: '#F9E4D0',
          200: '#F2C59D',
          300: '#EBA56A',
          400: '#E38A3E',
          500: '#D9731F',
          600: '#B55A13',
          DEFAULT: '#D9731F'
        },
        charcoal: {
          DEFAULT: '#0F172A',
          light: '#1E293B',
          dark: '#020617'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(197, 155, 78, 0.4)',
        'gold-subtle': '0 4px 20px -2px rgba(197, 155, 78, 0.18)',
        'luxury': '0 20px 40px -15px rgba(10, 19, 37, 0.15)',
        'luxury-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
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
