/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': {
          300: '#302b63',
          800: '#24243e',
          900: '#0f0c29',
        },
        'app-black': '#161d20',
        'app-blue': '#36498f',
        'app-cyan': '#2d7c9d',
        'app-gray': '#a4a29e',
        'app-white': '#cccccc',
      },
      fontFamily: {
        sans: ['Spotify'],
      },
    },
  },
  plugins: [
    require('flowbite-typography'),
    require('tailwind-scrollbar'),
  ],
}
