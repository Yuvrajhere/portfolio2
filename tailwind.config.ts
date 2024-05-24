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
        'brand-blue': "#5da1ea",
        'brand-black': "#151d28",
        'brand-gray': "#f7f7f9",
        'brand-green': "#01bd8d",
        'brand-white': "#FFFFFF"
      }
    },
  },
  plugins: [],
};
export default config;
