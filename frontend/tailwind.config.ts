import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      display: ["Volte Rounded", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
