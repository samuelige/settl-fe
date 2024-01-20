import type { Config } from 'tailwindcss'
const theme = require("./theme");
const {fontFamily, colors, backgroundColor, backgroundImage, borderColor} = theme;

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/container/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily,
      colors,
      borderColor,
      backgroundColor,
      backgroundImage,
      screens: {
        'xl-1': '1281px',
      }
    },
  },
  plugins: [],
}
export default config
