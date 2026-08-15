/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ganpati: {
          burgundy: '#5B111A', 
          red: '#9B1B30', 
          gold: '#D4AF37', 
          goldlight: '#F3E5AB',
          ivory: '#FFFFF0', 
          charcoal: '#1A1A1D', 
          dark: '#0D0D0E',
          glass: 'rgba(26, 26, 29, 0.5)',
          glasslight: 'rgba(255, 255, 255, 0.1)',
        }
      },
      fontFamily: {
        english: ['Inter', 'sans-serif'],
        devanagari: ['"Noto Serif Devanagari"', 'serif'],
      },
      boxShadow: {
        'gold-glow': '0 4px 30px rgba(212, 175, 55, 0.2)',
        'gold-glow-hover': '0 8px 40px rgba(212, 175, 55, 0.4)',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        marquee: {
          '0%': { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      },
      animation: {
        shimmer: 'shimmer 3s infinite',
        marquee: 'marquee 15s linear infinite'
      }
    },
  },
  plugins: [],
}
