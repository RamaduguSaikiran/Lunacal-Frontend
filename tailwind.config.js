/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#252830',
        'brand-widget': '#2E323C',
        'brand-text-primary': '#D1D3D8',
        'brand-text-secondary': '#8A8C93',
        'brand-shadow-light': '#393e4a',
        'brand-shadow-dark': '#1e2027',
      },
      boxShadow: {
        'neumorphic-outset': '5px 5px 8px #1e2027, -5px -5px 8px #393e4a',
        'neumorphic-inset': 'inset 5px 5px 8px #1e2027, inset -5px -5px 8px #393e4a',
        'neumorphic-inset-sm': 'inset 3px 3px 6px #1e2027, inset -3px -3px 6px #393e4a',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
