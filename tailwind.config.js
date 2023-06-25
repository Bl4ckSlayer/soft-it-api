/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mtheme: {
          primary: "#0FCFEC",
          secondary: "#1d4ed8",
          accent: "#3A4256",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          error: "#dc2626",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
