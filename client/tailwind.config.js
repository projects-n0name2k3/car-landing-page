/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        header: "Aldrich",
        roboto: "Roboto",
        vinfast: "Allerta Stencil",
        alata: "Alata",
        akshar: "Akshar",
      },
    },
  },
  plugins: [require("daisyui")],
};
