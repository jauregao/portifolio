import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dark-purple": "#240D49",
        "shiny-purple": "#812FF1",
        "so-light-purple": "#F1E5FF",
        "not-white": "#F6EFFF",
        "not-black": "#07010F",
        "gray": "#D9D9D9"
      },
      fontFamily: {
        'realce': ['var(--realce)']
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ]
};
export default config;
