import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        indivisible: ['Indivisible', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
