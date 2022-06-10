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
        biru: '#086BCE'
      },
    },
  },
  plugins: [],
}
