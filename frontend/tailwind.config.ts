import type { Config } from "tailwindcss";
import fluid, { extract, screens, fontSize } from 'fluid-tailwind'

export default {
  content: {files:["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"], extract},
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      display: ["Volte Rounded", "sans-serif"],
    },
    fontSize,
    screens,
    extend: {},
  },
  plugins: [fluid],
} satisfies Config;
