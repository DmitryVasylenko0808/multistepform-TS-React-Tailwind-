/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sidebar': "url(../public/images/bg-sidebar-desktop.svg)"
      }
    },
  },
  plugins: [],
}

