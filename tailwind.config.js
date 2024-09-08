/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "red-c": "#c73a0f",
        "green-c": "#1ea475",
        "rose-c": {
          50: "#fcf9f7",
          100: "#f4edeb",
          300: "#c9aea6",
          400: "#ad8985",
          500: "#87635a",
          900: "#260f08",
        },        
      },
    },
  },
  plugins: [],
};
