import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1612px",
        "3xl": "",
      },
      fontWeight: {
        extraBlack: "1000",
      },
      fontSize: {
        textTitleMobile: "3rem",
      },
      colors: {
        beigeDefault: "#FDECDC",
        redDefault: "#A51D21",
        zincCard: "#27272A",
        shadowCard: "#E6D6C8",
        shadowRed: "#8A191C",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
