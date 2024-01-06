/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html" ,"./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", 
    theme: {
      extend: {
        colors: {
          "mainBackgroundColor": '#0D1117',
          "columnBackgroundColor": '#161C22',
          "headingColor": '#ccd6f6',
          "secondaryHeadingColor": '#8892b0',
          "customGreen": '#64ffda',
       },
       fontFamily: {
        'mosk': ['Mosk', 'sans-serif'],
        'gentona': ['Gentona', 'sans-serif'],
        'roboto': ['Roboto' , 'sans-serif' ],
        'fira': ['Fira Sans', 'sans-serif'],
    },
  },
    plugins: [],
  }
}