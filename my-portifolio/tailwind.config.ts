import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
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
