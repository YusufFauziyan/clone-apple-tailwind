/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter'],
        lobster: ['Lobster'],
        pacifico: ['Pacifico']
      },
      colors: {
        biru: '#086BCE',
        p: '#69696E',
        link: '#1372D0'
      },
      height: {
        100: '94.7vh',
        30: '7.3rem'
      },
      fontSize: {
        'xxs': '.72rem',
        '4.5xl': '2.5rem'
      },
      lineHeight: {
        '4.5xl': '2.5rem'
      }
      
    },
  },
  plugins: [],
}
