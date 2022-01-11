/**
 * @type {import("@types/tailwindcss/tailwind-config").TailwindConfig }
 */
const config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = config;
