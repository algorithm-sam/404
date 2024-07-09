/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'mono': ['Space Mono', 'monospace', 'Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        'incon': ['Inconsolata', 'monospace', 'Inter', 'system-ui'],
      },
      fontSize:{
        'mid': '24px',
      },
      colors:{
        'primary': '#333333',
        'secondary': '#ffffffe6'
      }
    },
  },
  plugins: [],
}

