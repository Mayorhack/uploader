/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layout/**/*.{js,ts,jsx,tsx}',
    './src/data/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        plus: ['var(--font-plus)', 'sans-serif'],
        questrial: ['var(--font-questrial)', 'sans-serif'],
      },
      colors: {
        highlight: '#2579A9',
        textColor: '#1d1d1d',
      },
      gridTemplateColumns: {
        200: 'repeat(auto-fit, minmax(200px, 1fr))',
        240: 'repeat(auto-fit, minmax(240px, 1fr))',
        280: 'repeat(auto-fit, minmax(280px, 1fr))',
        300: 'repeat(auto-fit, minmax(300px, 1fr))',
      },
    },
  },
  plugins: [],
}
