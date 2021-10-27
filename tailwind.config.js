//const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    // enabled: true,
    content: [
        './*.html'
    ],
    safelist: [
      
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        iceland: [
          'Iceland',
        ],
        nunitoSans: [
          'Nunito Sans',
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
