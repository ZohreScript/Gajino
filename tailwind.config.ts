import type { Config } from "tailwindcss";
import { KeyValuePair, ResolvableTo } from "tailwindcss/types/config";
type CustomFontType = ResolvableTo<
  KeyValuePair<
    string,
    | string
    | [fontSize: string, lineHeight: string]
    | [
        fontSize: string,
        configuration: Partial<{
          lineHeight: string;
          letterSpacing: string;
          fontWeight: string | number;
        }>,
      ]
  >
>;
const fontTailwind: CustomFontType = {
  // Heading Fonts
  "heading-boldNumber": [ //120px
    "120px",
    {
      letterSpacing: "0",
      
      fontWeight: 700,
    },
  ],
  "heading-1": [ //32px
    "32px",
    {
      letterSpacing: "0",
      
      fontWeight: 700,
    },
  ],
  "heading-2": [ //28px
    "28px",
    {
      letterSpacing: "0",
      fontWeight: 700,
    },
  ],
  "heading-2-thin": [//28px400w
    "28px",
    {
      letterSpacing: "0",
      fontWeight: 400,
    },
  ],
  "heading-3": [//20px
    "20px",
    {
      letterSpacing: "0",
      fontWeight: 700,
    },
  ],
  "button-large": [
    "24px",
    {
      letterSpacing: "0",
      lineHeight: "48px",
      fontWeight: 600,
    },
  ],
  "button-large-2": [
    "20px",
    {
      letterSpacing: "0",
      lineHeight: "48px",
      fontWeight: 600,
    },
  ], 
  "body-1-menu": [ //18px
    "18px",
    {
      letterSpacing: "0",
      fontWeight: 700,
    },
  ],
  "body-2-desktop": [
    "20px",
    {
      letterSpacing: "0",
      lineHeight: "48px",
      fontWeight: 400,
    },
  ],  
  "body-3-desktop": [
    "16px",
    {
      letterSpacing: "0",
      lineHeight: "48px",
      fontWeight: 400,
    },
  ],
  "title-1-mobile": [
    "20px",
    {
      letterSpacing: "0",
      lineHeight: "48px",
      fontWeight: 700,
    },
  ],
  "title-2-mobile": [
    "16px",
    {
      letterSpacing: "0",
      lineHeight: "48px",
      fontWeight: 700,
    },
  ],
  "title-3-mobile": [
    "14px",
    {
      letterSpacing: "0",
      lineHeight: "48px",
      fontWeight: 700,
    },
  ],
  "body-4-mobile": [
    "16px",
    {
      letterSpacing: "0",
      lineHeight: "48px",
      fontWeight: 400,
    },
  ],
  "body-5-mobile": [
    "10px",
    {
      letterSpacing: "0",
      lineHeight: "48px",
      fontWeight: 400,
    },
  ],
  "body-footer": [
    "14px",
    {
      letterSpacing: "0",
      lineHeight: "48px",
      fontWeight: 400,
    },
  ],

};



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
        width: {
          '2/3-important': '66.6667% !important',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    // fontSize: fontTailwind,
  },
  plugins: [],
};
export default config;
