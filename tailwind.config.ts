import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-kanit)", "Arial", "sans-serif"], // Gunakan Kanit sebagai font utama
      },
    },
  },
  plugins: [],
};

export default config;
