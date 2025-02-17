import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";


const config: Config = {
  content: [
    "./lib/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/mindshare/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/section/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '0.25rem',
          sm: '0.5rem',
          lg: '0.5rem',
          xl: '0.5rem',
          '2xl': '0.5rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [heroui()],
};

export default config;
