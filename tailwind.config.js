/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      warmMidGray: '#20A4F3',
      bgLightColor: '#FFFAF0',
      bgDarkColor: '#1e293b',
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}
