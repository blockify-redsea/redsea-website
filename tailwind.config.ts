import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/app/**/*.{ts,tsx,mdx}", "./src/components/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#D72638", foreground: "#FFFFFF" },
        ocean: { DEFAULT: "#0A2540", light: "#163A5F", foreground: "#E6F0FA" }
      },
      borderRadius: { xl: "1rem", "2xl": "1.25rem" },
      boxShadow: { soft: "0 8px 28px rgba(0,0,0,0.08)" }
    }
  },
  plugins: []
} satisfies Config;
