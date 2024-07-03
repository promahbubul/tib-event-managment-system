/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#153170",
        LightBlue: "#285ED6",
        darkBlue: "#153170",
        darkRed: "#873014",
        lightRed: "#FF3D00",
        blue1: "#14306F",
        navyBlue: "#02042F",
        blue3: "#153170",
        blue4: "#061E54",
        lightBlue2: "#E4E9F5",
        green: "#058E4C",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
