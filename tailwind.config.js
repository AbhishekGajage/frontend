/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "var(--font-primary)",
        brand: "var(--font-brand)",
      },
    },
  },
  plugins: [],
};
