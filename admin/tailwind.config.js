/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jackgreen: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          800: '#166534',
          900: '#0d5c3a',
          950: '#063822',
        },
      },
    },
  },
  plugins: [],
}

