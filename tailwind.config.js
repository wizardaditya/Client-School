/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C8531A',
          light: '#E8703A',
          dark: '#A03D10',
        },
        secondary: {
          DEFAULT: '#1A3A6B',
          light: '#2A5A9B',
          dark: '#0E2040',
        },
        accent: {
          DEFAULT: '#D4A017',
          light: '#F0C040',
          dark: '#A07010',
        },
        bvm: {
          ivory: '#FFFDF7',
          surface: '#FFFFFF',
          dark: '#1C1C1C',
          muted: '#6B6B6B',
          success: '#2D7A4F',
          saffron: '#FF9933',
          green: '#138808',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Noto Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'rangoli-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A017' fill-opacity='0.08'%3E%3Cpath d='M30 0l8.66 15H21.34L30 0zm0 60l-8.66-15h17.32L30 60zM0 30l15-8.66v17.32L0 30zm60 0l-15 8.66V21.34L60 30zM30 20l8.66 5v10L30 40l-8.66-5V25L30 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        'lotus-pattern': "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='40' cy='40' r='2' fill='%23D4A017' fill-opacity='0.1'/%3E%3Ccircle cx='40' cy='40' r='15' fill='none' stroke='%23D4A017' stroke-opacity='0.06' stroke-width='1'/%3E%3Ccircle cx='40' cy='40' r='30' fill='none' stroke='%23D4A017' stroke-opacity='0.04' stroke-width='1'/%3E%3C/svg%3E\")",
      },
      animation: {
        'ken-burns': 'kenBurns 20s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'ticker': 'ticker 30s linear infinite',
        'count-up': 'countUp 2s ease-out forwards',
      },
      keyframes: {
        kenBurns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.1) translate(-2%, -2%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        ticker: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        countUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0,0,0,0.08)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.15)',
        'gold': '0 4px 20px rgba(212,160,23,0.3)',
      },
    },
  },
  plugins: [],
};
