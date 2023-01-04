/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'glory': ['Glory'],
      },
      
      scale: {
        // <SBCS> scaling
        '45': '.45',
        // computer logo scaling
        '130': '1.4',
        // team photo slider scaling
        '85': '.85'

      },
      // for cards
      maxHeight: {
        '500': '500px',
      },
      
      colors: {
        // take out cs-black at the end
        'cs-black': '#09101c',

        'main-blue': '#3461FF',
        'hover-blue': '#204be8',
        'hover-gray': '#a5a198',
        'main-yellow': '#FACA4E',
        'lighter-blue': '#C3E2FF',
        'main-gray': '#C9C6BF',
        'lighter-gray': '#E5E4E0',
      },


      // for all borders
      borderWidth: {
        '1': '1px',
        '3': '3px',
        '5': '5px',
        '6': '6px',
        '7': '7px',
        '9': '9px',
      }

    },

    // for cards
    minHeight: {
      '480' : '480px',
    }
  },
  plugins: [],
}


