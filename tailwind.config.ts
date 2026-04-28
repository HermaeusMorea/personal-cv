import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05070d",
          900: "#090d16",
          800: "#101724",
        },
        signal: {
          cyan: "#7dd3fc",
          mint: "#86efac",
          amber: "#fcd34d",
        },
      },
      boxShadow: {
        glow: "0 0 48px rgba(125, 211, 252, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
