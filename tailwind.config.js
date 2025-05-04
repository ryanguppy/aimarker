/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'space': ['"Space Grotesk"', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#e6f0ff',
          100: '#cce0ff',
          200: '#99c2ff',
          300: '#66a3ff',
          400: '#3385ff',
          500: '#0066ff',
          600: '#0052cc',
          700: '#003d99',
          800: '#002966',
          900: '#001433',
        },
        dark: {
          100: '#1a1a2e',
          200: '#16213e',
          300: '#0f3460',
          900: '#080808',
        }
      },
      animation: {
        'spotlight': 'spotlight 5s ease-in-out infinite',
      },
      keyframes: {
        spotlight: {
          '0%, 100%': {
            opacity: 0.8,
            transform: 'translate(5%, 5%) scale(1)',
          },
          '50%': {
            opacity: 0.6,
            transform: 'translate(-5%, -5%) scale(1.2)',
          },
        },
      },
    },
  },
  plugins: [],
};