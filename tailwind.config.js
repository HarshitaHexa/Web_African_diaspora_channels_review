/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "theme-green": "#4E915E",
        "theme-green-dark": "#407a4c",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
