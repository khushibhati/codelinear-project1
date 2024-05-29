/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '90': '90rem', // 1440px
        '4.123125': '4.123125rem', // 65.97px
        '0.05': '0.05rem', // -0.8px
        '0.04': '0.04rem', // 0.64px
        '56.28': '56.28px',
        '20.26': '20.26px',
        '55': '55px',
      },
    },
  },
  variants: {},
  plugins: [],

}

