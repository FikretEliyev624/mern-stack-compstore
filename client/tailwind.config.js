module.exports = {
  darkMode: 'class',
  mode:"jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx,vue}','./public/index.html'],
  content: [

    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend:{
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'cyan-rahid':"#27AE60",
        "sky":"#2471A3",
        "darkmode":"#18334f",
        "ice":"#3071e7",
        "primary":'',
        "warning":"#F1C40F",
        "light":"#FFFFF7"
      },
      spacing: {
        '97': '450px',
      },
      fontFamily: {
        'satisfy': ['Satisfy', 'cursive'] 
      },
      
    }
  }
}