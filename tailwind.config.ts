/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'ubuntu': ['Ubuntu', 'sans-serif'],
    },
    container: {
      padding: '1rem',
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
      }
    },
    green: {
      DEFAULT: '#009639',
      50: '#edfff3',
      100: '#e5f4eb', // override
      200: '#afffcc',
      300: '#71ffa7',
      400: '#2dfb79',
      500: '#02e557',
      600: '#00bf44',
      700: '#009639',
      800: '#067531',
      900: '#085f2b',
      950: '#003615'
    }
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-clip-path'),
      plugin(function({ addUtilities }) {
        addUtilities({
          '.clip-cut-lg': {
            'clip-path': 'polygon(95% 0, 100% 50%, 100% 100%, 0 99%, 0 0)',
          },
          '.clip-cut-md': {
            'clip-path': 'polygon(calc(100% - 50px)0,100%  calc(100% - 176px), 100% 100%, 0 100%, 0 0)',
          },
          '.clip-cut-sm': {
            'clip-path': 'polygon(calc(100% - 30px)0,100%  6%, 100% 100%, 0 100%, 0 0)',
          },

          
          '.clip-cut': {
            'clip-path': 'polygon(0 0, 80% 0, 100% 10%, 100% 100%, 0% 100%, 0 0)',
          },
          // '.clip-cut': {
          //   'clip-path': 'polygon(calc(100% - 20px)0,100%  7%, 100% 100%, 0 100%, 0 0)',
          // },


          '.clip-cut-tri':{
            'clip-path': 'polygon(0 calc(100% - 22px), 100% 1%, 100% 100%)',
          },
          '.clip-cut-tri-sm':{
            'clip-path': 'polygon(0 calc(100% - 17px), 100% 1%, 100% 100%)',
          }
        })
      })
  ],
};