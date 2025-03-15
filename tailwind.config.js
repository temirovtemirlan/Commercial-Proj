/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        mac: "1920.98px",
        ss: "526px",
        xs: "426px", // extra size
        ms: "320px",
        lg: "1025px",
        "2xl": "1537px",
        lxl: "1440px",
      },
      colors: {
        "blue-1000": "#0171E3",
      },
      borderRadius: {
        "1xl": "15px",
        "2.5xl": "20px",
        0.5: "10px",
      },
      spacing: {
        2.5: "10px",
        50: "50px",
      },
      keyframes: {},
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
