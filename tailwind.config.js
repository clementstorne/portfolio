/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    spacing: {
      0: "0px",
      5: "5px",
      10: "10px",
      20: "20px",
      30: "30px",
      150: "150px",
      200: "200px",
      280: "280px",
      350: "350px",
    },
    colors: {
      "cyan-light": {
        1: "#FAFDFE",
        2: "#F2FAFB",
        3: "#DEF7F9",
        4: "#CAF1F6",
        5: "#B5E9F0",
        6: "#9DDDE7",
        7: "#7DCEDC",
        8: "#3DB9CF",
        9: "#00A2C7",
        10: "#0797B9",
        11: "#107D98",
        12: "#0D3C48",
      },
      "cyan-dark": {
        1: "#0B161A",
        2: "#111B1F",
        3: "#082C36",
        4: "#003848",
        5: "#004557",
        6: "#065468",
        7: "#13677E",
        8: "#11809C",
        9: "#00A2C7",
        10: "#23AFD0",
        11: "#4CCCE6",
        12: "#B6ECF7",
      },
    },
    fontSize: {
      sm: "0.750rem",
      base: "1rem",
      xl: "1.333rem",
      "2xl": "1.777rem",
      "3xl": "2.369rem",
      "4xl": "3.158rem",
      "5xl": "4.210rem",
    },
    fontFamily: {
      title: "Kaushan Script",
      heading: "Russo One",
      body: "Kodchasan",
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
    dropShadow: {
      base: "4px 4px 4px rgba(13, 60, 72, 0.5)",
      xl: "4px 4px 4px rgba(13, 60, 72, 0.8)",
    },
    extend: {},
  },
  plugins: [],
};
