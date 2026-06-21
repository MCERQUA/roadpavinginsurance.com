import type { Config } from "tailwindcss";

/* ============================================================
   DAIRY INSURANCE — "Fresh Pasture" palette
   Token NAMES are inherited from the shared component architecture;
   VALUES are remapped to pasture green (primary) / stream blue
   (secondary) / honey gold (accent).
   clay = pasture green · sage = stream blue · gold = honey
   cream = milk paper · sand = soft sage
   ============================================================ */

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F6F5F0",
        sand: "#ECEAE2",
        white: "#FFFFFF",
        clay: {
          DEFAULT: "#2d2d2d",
          dark: "#1a1a1a",
          light: "#4a4a4a",
          50: "#F2F2F2",
          100: "#E0E0E0",
          200: "#C0C0C0",
          300: "#9A9A9A",
          400: "#6A6A6A",
          500: "#4a4a4a",
          600: "#2d2d2d",
          700: "#1a1a1a",
          800: "#111111",
          900: "#080808",
        },
        sage: {
          DEFAULT: "#ffd700",
          dark: "#e6c200",
          light: "#ffe44d",
          50: "#FFFDE6",
          100: "#FFF9BF",
          200: "#FFF080",
          300: "#FFE44D",
          400: "#FFD700",
          500: "#E6C200",
          600: "#CCA800",
          700: "#998000",
        },
        gold: {
          DEFAULT: "#f59e0b",
          dark: "#d97706",
          light: "#fbbf24",
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
        },
        espresso: "#111111",
        cocoa: "#3a3a3a",
        mocha: "#6a6a6a",
        adobe: "#CCCCC2",
        adobeDark: "#AAAAAA",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        arch: "2rem 2rem 2rem 2rem",
        arch2: "2.5rem 2.5rem 1.5rem 1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        "sunrise-bands":
          "linear-gradient(180deg, #F6F5F0 0%, #ECEAE2 40%, #E8E6DE 70%, #F6F5F0 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(255,215,0,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(45,45,45,0.05) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #2d2d2d 0%, #4a4a4a 100%)",
        "sage-gradient": "linear-gradient(135deg, #ffd700 0%, #ffe44d 100%)",
        "gold-gradient": "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(45, 45, 45, 0.20), 0 4px 12px -6px rgba(17, 17, 17, 0.08)",
        "warm-lg": "0 30px 70px -20px rgba(45, 45, 45, 0.26), 0 10px 30px -10px rgba(17, 17, 17, 0.10)",
        card: "0 2px 8px -2px rgba(17, 17, 17, 0.06), 0 1px 3px -1px rgba(17, 17, 17, 0.04)",
        "card-hover": "0 20px 50px -15px rgba(45, 45, 45, 0.22), 0 8px 20px -8px rgba(17, 17, 17, 0.10)",
        arch: "inset 0 -8px 30px -10px rgba(45, 45, 45, 0.10)",
      },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "slow-zoom": { "0%, 100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.05)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "arch-rise": { "0%": { transform: "scaleY(0.6)", opacity: "0", transformOrigin: "bottom" }, "100%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "bottom" } },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "arch-rise": "arch-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
