/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        'dark-blue-900':'#000409',
        'dark-blue-800':'#001123',
        'dark-blue-700':'#001e3c',
        'dark-blue-600':'#002a56',
        'dark-blue-500':'#00376f',
      },
      gridTemplateRows: {
        'layout': '4rem 1fr 4rem',
      },
      gridTemplateColumns: {
        'layout': '4rem 1fr 4rem',
      },
    },
  },
  plugins: [],
}