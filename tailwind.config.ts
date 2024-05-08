import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "neutral": {
          "100": "#fff",
          "200": "#F9F9F9",
          "300": "#E1E1E1",
          "400": "#EDEDED",
          "500": "#CBCBCB",
          "600": "#ADADAD",
          "700": "#757575",
          "800": "#717171",
          "900": "#353535",
          "950": "#0C0C0C"
        },
        "primary": "#417F56",
        "tint": {
          "100": "#E5F2E9",
          "200": "#CAE4D3",
          "300": "#B0D7BD",
          "400": "#96C9A7",
          "500": "#7CBC91",
          "600": "#61AE7B",
          "700": "#4E9968"
        },
        "shade": {
          "100": "#396F4B",
          "200": "#315F41",
          "300": "#294F36",
          "400": "#21402B",
          "500": "#183020",
          "600": "#102016",
          "700": "#08100B",
        },
        "error": "#C30000",
        "error-light": "#ED2E2E",
        "error-extralight": "#FFF2F2",
        "success": "#00966D",
        "success-light": "#00BA88",
        "success-extralight": "#F3FDFA",
        "warning": "#A9791C",
        "warning-light": "#F4B740",
        "warning-extralight": "#FFF8E1",
        "gray": {
          "100": "#F9F9F9",
          "200": "#E1E1E1",
          "300": "#EDEDED", 
          "400": "#CBCBCB",
          "500": "#ADADAD",
          "600": "#757575",
          "700": "#717171",
          "800": "#353535",
          "900": "#0C0C0C"
        }
      },
      borderRadius: {
        'xs': '0.250rem', // 4px
        'sm': '0.500rem', // 8px
        'md': '1rem', // 16px 
        'lg': '1.5rem', // 24px 
        "xl": "2rem", // 32px
        "2xl": "4rem", // 64px
      },
      boxShadow: {
        '2': '0 2px 2px 0 rgba(0,0,0,0.250)',
        '4': '0 4px 4px 0 rgba(0,0,0,0.250)',
        '6': '0 6px 6px 0 rgba(0,0,0,0.250)',
        '8': '0 8px 8px 0 rgba(0,0,0,0.250)',
        '12': '0 12px 12px 0 rgba(0,0,0,0.250)',
        '16': '0 16px 16px 0 rgba(0,0,0,0.250)'
      },
      spacing: {
        'sm': '0.5rem', // 8px,
        'md': '1rem', // 16px
        'lg': '1.5rem', // 24px
        'xl': '2rem' // 32px
      },
      container: {
        center: true,
        padding: '1rem'
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px'
      },
      fontFamily: {
        sans: ['var(--font-iran-sans)']
      }
    }
  },
  plugins: [],
};
export default config;
