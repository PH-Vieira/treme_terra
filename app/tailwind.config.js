/** @type {import('tailwindcss').Config} */
export default {
  // purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [
    './src/**/*.{html,js,vue}',
  ],
  theme: {
    fontFamily: {
      "exo2": ["'Exo 2'", "sans-serif"],
      "alegraya": ["Alegreya Sans", "sans-serif"],
    },
    extend: {
      colors: {
        'emerald-green': {
          '50': '#e0f2f1',
          '100': '#b2dfdb',
          '200': '#80cbc4',
          '300': '#4db6ac',
          '400': '#26a69a',
          '500': '#009688',
          '600': '#00897b',
          '700': '#00796b',
          '800': '#00695c',
          '900': '#004d40',
          '950': '#003d33',
        },  
        'dark-gray': {
          '50': '#fafafa',
          '100': '#f5f5f5',
          '200': '#eeeeee',
          '300': '#e0e0e0',
          '400': '#bdbdbd',
          '500': '#9e9e9e',
          '600': '#757575',
          '700': '#616161',
          '800': '#424242',
          '900': '#212121',
          '950': '#0d0d0d',
        },      
        'medium-gray': {
          '50': '#f9f9f9',
          '100': '#f0f0f0',
          '200': '#e0e0e0',
          '300': '#cfcfcf',
          '400': '#bfbfbf',
          '500': '#afafaf',
          '600': '#9f9f9f',
          '700': '#8f8f8f',
          '800': '#808080',
          '900': '#707070',
          '950': '#606060',
        },
        'mustard-yellow': {
          '50': '#fff8e1',
          '100': '#ffecb3',
          '200': '#ffe082',
          '300': '#ffd54f',
          '400': '#ffca28',
          '500': '#ffc107',
          '600': '#ffb300',
          '700': '#ffa000',
          '800': '#ff8f00',
          '900': '#ff6f00',
          '950': '#ff5f00',
        },        
        'midnight-blue': {
          '50': '#eef7ff',
          '100': '#dceeff',
          '200': '#b2dfff',
          '300': '#6dc6ff',
          '400': '#20a8ff',
          '500': '#008dff',
          '600': '#006edf',
          '700': '#0057b4',
          '800': '#004a94',
          '900': '#003366',
          '950': '#002651',
        },
        'seagull': {
          '50': '#f2f9fd',
          '100': '#e4f2fa',
          '200': '#c2e5f5',
          '300': '#87ceeb',
          '400': '#50b9e0',
          '500': '#2aa0cd',
          '600': '#1b81ae',
          '700': '#17678d',
          '800': '#175775',
          '900': '#184962',
          '950': '#102f41',
        },
        'turquoise': {
          '50': '#f0fdfb',
          '100': '#ccfbf3',
          '200': '#99f6e8',
          '300': '#5eeadb',
          '400': '#30d5c8',
          '500': '#14b8ae',
          '600': '#0d948e',
          '700': '#0f7673',
          '800': '#115e5d',
          '900': '#134e4d',
          '950': '#042e2f',
        },  
        'wild-sand': {
          '50': '#f4f4f4',
          '100': '#efefef',
          '200': '#dcdcdc',
          '300': '#bdbdbd',
          '400': '#989898',
          '500': '#7c7c7c',
          '600': '#656565',
          '700': '#525252',
          '800': '#464646',
          '900': '#3d3d3d',
          '950': '#292929',
        },
        'masala': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#424242',
          '900': '#3d3d3d',
          '950': '#262626',
        },
        'coral': {
          '50': '#fff4ed',
          '100': '#ffe5d4',
          '200': '#ffc7a8',
          '300': '#ffa071',
          '400': '#ff7f50',
          '500': '#fe4711',
          '600': '#ef2d07',
          '700': '#c61c08',
          '800': '#9d190f',
          '900': '#7e1810',
          '950': '#440806',
        },  
        'red-berry': {
          '50': '#ffeeee',
          '100': '#ffdada',
          '200': '#ffbbbb',
          '300': '#ff8b8b',
          '400': '#ff4949',
          '500': '#ff1111',
          '600': '#ff0000',
          '700': '#e70000',
          '800': '#be0000',
          '900': '#8b0000',
          '950': '#560000',
        },
        'amber': {
          '50': '#ffffea',
          '100': '#fffbc5',
          '200': '#fff885',
          '300': '#ffee46',
          '400': '#ffdf1b',
          '500': '#ffc107',
          '600': '#e29400',
          '700': '#bb6902',
          '800': '#985108',
          '900': '#7c420b',
          '950': '#482200',
        },  
        'beige': {
          '50': '#f9f9ed',
          '100': '#f5f5dc',
          '200': '#e5e3a3',
          '300': '#d6cf6e',
          '400': '#c9ba46',
          '500': '#baa538',
          '600': '#a0852e',
          '700': '#806328',
          '800': '#6c5227',
          '900': '#5d4526',
          '950': '#352513',
        },  
        'lochinvar': {
          '50': '#effefb',
          '100': '#c7fff4',
          '200': '#90ffe9',
          '300': '#51f7dc',
          '400': '#1de4ca',
          '500': '#04c8b1',
          '600': '#009688',
          '700': '#058075',
          '800': '#0a655f',
          '900': '#0d544f',
          '950': '#003332',
        },  
      }
    },
  },
}

