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
      },
    },
  },
  plugins: [
    require('flowbite-typography'),
  ],
}
