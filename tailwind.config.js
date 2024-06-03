/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './src/**/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        text1: '#191825'
      },
      backgroundImage: {
        music: "url('resources/icon.png')"
        // test: 'test'
      }
    },
    plugins: []
  }
}
