/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        '45': '.45',
      },
      maxHeight: {
        '500': '500px',
      },
      colors: {
        'cs-black': '#09101c',
      },
    },
    minHeight: {
      '480' : '480px',
    }
  },
  plugins: [],
}


