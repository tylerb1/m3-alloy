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
          100: "#C5D8F8", // Keep It Cool
          900: "#09063B", // Indigo
        },
        secondary: "#F6460B", // Fire
        'spacegray': "#252421" // Added from Figma
      },
    },
  },
  plugins: [],
};
export default config;
