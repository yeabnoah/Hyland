/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './src/**/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        secondary: '#161618',
        text1: '#191825',
        test: '#1b1b1f',
        background: '#444b4b'
      },
      backgroundImage: {
        music: "url('resources/icon.png')"
        // test: 'test'
      }
    },
    plugins: []
  }
}
