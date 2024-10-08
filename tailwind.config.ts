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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderColor: {
        DEFAULT: "var(--foreground)",
      },
      fontFamily: {
        grotesk: ["Overused Grotesk", "sans-serif"], // Definisci il nome della famiglia
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        "scale-up-ver-top": {
          "0%": {
            transform: "scaleY(.4)",
            "transform-origin": "100% 0%",
          },
          to: {
            transform: "scaleY(1)",
            "transform-origin": "100% 0%",
          },
        },
      },
      animation: {
        typing: "typing 1.5s steps(20) alternate",
        "scale-up-ver-top":
          "scale-up-ver-top 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
      },
    },
  },
  plugins: [],
};
export default config;
