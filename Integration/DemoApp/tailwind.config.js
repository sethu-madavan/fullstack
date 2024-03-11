/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors:{
        Hcol:'#0E273C',
      }
    },
  },
  plugins: [
    // require('daisyui'),
    require('@tailwindcss/forms')
  ],
}

