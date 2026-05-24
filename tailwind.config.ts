import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-purple": "rgb(var(--page-dark-purple) / <alpha-value>)",
        "shiny-purple": "rgb(var(--page-shiny-purple) / <alpha-value>)",
        "so-light-purple": "rgb(var(--page-so-light-purple) / <alpha-value>)",
        "not-white": "rgb(var(--page-not-white) / <alpha-value>)",
        "not-black": "rgb(var(--page-not-black) / <alpha-value>)",
        "gray": "rgb(var(--page-gray) / <alpha-value>)"
      },
      fontFamily: {
        'realce': ['var(--font-realce)', 'sans-serif']
      },
      keyframes: {
        'rotate-y-180': {
          '0%': { transform: 'rotateY(180deg)' },
          '100%': { transform: 'rotateY(0)' },
        },
      },
      animation: {
        'rotate-y-180': 'rotate-y-180 0.5s both',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ]
};
export default config;
