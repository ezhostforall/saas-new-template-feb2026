import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
    "../../apps/app/src/**/*.{ts,tsx}",
    "../../apps/marketing/src/**/*.{ts,tsx,astro}"
  ],
  theme: {
    extend: {}
  },
  plugins: []
};

export default config;
