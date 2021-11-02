//const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    enabled: true,
    content: [
        './*.html'
    ],
    safelist: [
      
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        'half-50': '25%',
      },
      fontFamily: {
        iceland: [
          'Iceland',
        ],
        nunitoSans: [
          'Nunito Sans',
        ],
      },
      // ringOpacity: ['checked'],
      // ringOffset: ['checked'],
      // ringColor: ['checked'],
      // ring: ['checked'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}