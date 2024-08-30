/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tablet' : '1024px',
        'lg' : '1280px',
        'desktop' : '1440px'
      }
    },
  },
  plugins: [],
}

