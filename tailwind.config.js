/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src//*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
          
        },
      },
      colors: {
        mainColor:"#ff2c1f",
        textColor:'#020307',
        bgColor:"#fff",

    },
  },
  plugins: [],
}

}
