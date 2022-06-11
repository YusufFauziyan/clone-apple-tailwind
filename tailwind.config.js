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
        p: '#69696E'
      },
      height: {
        100: '94.7vh'
      },
      fontSize: {
        'xxs': '.72rem'
      }
    },
  },
  plugins: [],
}
