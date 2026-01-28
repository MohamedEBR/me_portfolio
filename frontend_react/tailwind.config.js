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
        primary: '#1e1e2e', // Catppuccin Mocha Base
        secondary: '#a6e3a1', // Catppuccin Mocha Green
        black: '#11111b', // Catppuccin Mocha Crust
        lightGray: '#313244', // Catppuccin Mocha Surface0
        gray: '#a6adc8', // Catppuccin Mocha Subtext0
        brown: '#46364a',
        white: '#cdd6f4', // Catppuccin Mocha Text
        // New Security Theme Colors
        'terminal-green': '#a6e3a1',
        'cyber-pink': '#f38ba8', // Catppuccin Mocha Red
        'dark-card': '#181825', // Catppuccin Mocha Mantle
        // Catppuccin Specifics
        'cat-base': '#1e1e2e',
        'cat-mantle': '#181825',
        'cat-crust': '#11111b',
        'cat-text': '#cdd6f4',
        'cat-green': '#a6e3a1',
        'cat-blue': '#89b4fa',
        'cat-red': '#f38ba8',
        'cat-peach': '#fab387',
      },
      fontFamily: {
        mono: ['Fira Code', 'monospace'],
        display: ['VT323', 'monospace'],
        sans: ['Fira Code', 'monospace'], // Default to mono for this theme
      },
      backgroundImage: {
        'terminal-scanline': 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
      },
      fontSize: {
        'display-1': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-2': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-3': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'fade-in-up': 'fadeInUp 0.3s ease-out',
        'fade-in-down': 'fadeInDown 0.3s ease-out',
        'slide-in-left': 'slideInLeft 0.3s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(172, 49, 49, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(172, 49, 49, 0.8), 0 0 30px rgba(172, 49, 49, 0.6)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(172, 49, 49, 0.3)',
        'glow-lg': '0 0 30px rgba(172, 49, 49, 0.4)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      transitionDuration: {
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-smooth': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}