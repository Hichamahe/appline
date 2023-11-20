/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        secondDark: 'rgb(24, 28, 49)',
        dark:'rgba(42, 46, 68)',
        light: '#fff',
        transparent:"rgba(255, 255, 255, 0.9)!important",
        primary: '#6e79d3'
      },

      textColor: {
        dark: 'rgb(24, 28, 49)',
        light: '#fff',
        primary: '#6e79d3',
      },
      
      backgroundImage: {
        'gradient-1': 'linear-gradient(55.15deg, #8EA5FE -7.09%, #BEB3FD 51.72%, #90D1FF 101.48%)',
        'gradient-2' : 'linear-gradient(90deg, rgba(235,146,218,1) 0%, rgba(250,155,105,1) 100%)',
        'gradient-3': 'linear-gradient(90deg, rgba(235,146,218,0.35915616246498594) 0%, rgba(105,122,250,0.17988445378151263) 100%)'
      },

        screens: {  
      'xxs': {'max' :'484px','min' :'0px' }, 
      // => @media (max-width: 280px)     
      'xs': {'max' :'640px', 'min' :'484px'},  
      // => @media (max-width: 484px)  
      'sm': {'min': '640px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px)
      'md': {'min': '768px', 'max': '1024px'},
      // => @media (min-width: 768px and max-width: 1023px)
      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px)
      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px)
      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px)
    },
    gridTemplateColumns: {
      'auto-fill-minmax': 'repeat(auto-fill, minmax(300px, 1fr))',
    },
    boxwithshadow : {
  'box-shadow': '5px 0 10px rgba(0, 0, 255, 0.5)',
  'background': 'linear-gradient(90deg, #800080 50%, #0000FF 50%)' /* Purple on the left, Blue on the right */
  },
  clipPath: {
    'clip-path': 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
  },
  transitionDuration: {
    '500': '5000ms',
  },
  transitionTimingFunction: {
    'in-out': 'ease-in-out',
      },
  },
  },
  plugins: [],
}
