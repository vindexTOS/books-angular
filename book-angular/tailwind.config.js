/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
    screens: {
      xm: '500px',
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }
      mdxl: '901px',
      lg: '1050px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      '1xl': '1361px',
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      max_XL3: { max: '1590px' },
      max_Xll: { max: '1360px' },
      max_xl: { max: '1286px' },
      max_xml: { max: '1270px' },
      // => @media (max-width: 1279px) { ... }
      max_x: { max: '1150px' },
      max_lg: { max: '1050px' },
      // => @media (max-width: 1050px) { ... }
      max_md2: { max: '900px' },
      max_md: { max: '767px' },
      // => @media (max-width: 767px) { ... }
      max_sm: { max: '680px' },
      max_sm8: { max: '825px' },
      // => @media (max-width: 639px) { ... }
      max_smm1: { max: '565px' },
      max_smm: { max: '500px' },
      // => @media (max-width:500px) { ... }
    },
  },
  plugins: [],
}
