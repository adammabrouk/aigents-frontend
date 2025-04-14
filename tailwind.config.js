/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00C6C2',
        accent: '#AE47FF',
        dark: '#0B0F14',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      dropShadow: {
        glow: '0 0 10px #00C6C2',
      },
    },
  },
  plugins: [],
}
