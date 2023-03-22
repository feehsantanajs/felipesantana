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
      fontFamily: {
        'dancing':  ['Dancing Script',  'cursive']
      },
      colors:{
        'dark-blue-900':'#000409',
        'dark-blue-800':'#001123',
        'dark-blue-700':'#001e3c',
        'dark-blue-600':'#002a56',
        'dark-blue-500':'#00376f',
        'dark-black-1': 'rgba(0,0,0, 0.6)'
      },
      gridTemplateRows: {
        'layout': '5rem 1fr 5rem',
      },
    
    },
  },
  plugins: [],
}