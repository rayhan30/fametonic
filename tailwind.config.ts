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
        "brand-primary": "#000",
        "brand-accent": "#8A5CF4",
        "brand-text-primary": "#F9F9F9",
        "brand-text-secondary": "#A3A3A3",
      },
    },
  },
  plugins: [],
};
export default config;
