/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        coolBlack: '#363638',
        textColor: '#5C5C5C',
        borderColor: '#363638',
        lightGray: '#F8FAFC',
        lightBlue: '#31B5F7',
        coolOrange: '#E84414',
        coolDarkGreen: '#337357',
        coolDarkerGreen: '#337357',
      },
      fontFamily: {
        sans: ['Inter'],
        cool: ['Bodoni Moda'],
      },
    },
  },
  plugins: [],
};
