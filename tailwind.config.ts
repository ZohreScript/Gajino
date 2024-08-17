import { Secular_One } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#29AFBD',   
          text: '#534667',  
          textLight:'#9689A8',

        },
        secondary:{
          main:'#42246E',
          light :'#9689A8'
        },
        screens: {
          'xl': '1440px',
        },
        maxWidth: {
          '1440': '1440px',
        },
        
        
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
