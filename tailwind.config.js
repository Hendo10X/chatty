/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        apple: ['"Apple"', 'sans-serif'], 
        inter: ['Inter', 'sans-serif'],
      },
  
    },
  },
  plugins: [],
}

