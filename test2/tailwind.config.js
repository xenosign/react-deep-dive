/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "red-color": "var(--red-color)",
        "blue-color": "var(--blue-color)",
        "green-color": "var(--green-color)",
      },
    },
  },
  plugins: [],
};
