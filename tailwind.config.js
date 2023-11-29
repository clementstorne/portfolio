/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
      heading: "Russo One",
      body: "Kodchasan",
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
    extend: {
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
    },
  },
  plugins: [],
};
