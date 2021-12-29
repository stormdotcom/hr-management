module.exports = {  content: [    "./src/**/*.{js,jsx,ts,tsx}",  ],  theme: { 
  screens: {
    'sm': '640px',
    // => @media (min-width: 640px) { ... }

    'md': '768px',
    // => @media (min-width: 768px) { ... }

    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  } ,  
  colors: {
    transparent: 'transparent',
    current: 'currentColor',
    'white': '#ffffff',
    'feild': "F5F5F5",
    'primary': '#278acb',
    'secondary': '#FDBA22',
    'third': '#469bd4',
    'fourth': '#2072bb',
    'midnight': '#121063',
    'metal': '#565584',
    'tahiti': '#3ab7bf',
    'silver': '#evebff',
    'gold': '#F59E0B',
    'bermuda': '#78dcca',
  },
  extend: {

  },  
},  
  plugins: [

    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],}