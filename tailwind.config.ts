const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#252525",
      white: "#F9F9F9",
      red: {
        300: "#fca5a5",
        500: "#ef4444",
        700: "#b91c1c",
        950: "#450a0a",
      },
      blue: {
        50: "#E9FEFF",
        100: "#C9FAFD",
        200: "#9DF1F9",
        300: "#5FE5F5",
        400: "#26CFE7",
        500: "#15AFCA",
        600: "#1288A6",
        700: "#15718B",
        800: "#175567",
        900: "#174556",
        950: "#0B2E3B",
      },
      green: {
        50: "#EDFDE6",
        100: "#D8F8CA",
        200: "#B2F29E",
        300: "#84E569",
        400: "#60D548",
        500: "#44B932",
        600: "#308F26",
        700: "#28691F",
        800: "#22521C",
        900: "#20451B",
        950: "#10270D",
      },
      alabaster: {
        50: "#F9F9F9",
        100: "#ECECEC",
        200: "#D7D7D7",
        300: "#B5B5B5",
        400: "#8D8D8D",
        500: "#717171",
        600: "#5A5A5A",
        700: "#484848",
        800: "#3D3D3D",
        900: "#353535",
        950: "#252525",
      },
    },
    boxShadow: {
      DEFAULT: "4PX 4PX 4PX 0 rgba(37, 37, 37, 0.3)",
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "scale-in-center": {
          from: { opacity: "1", transform: "scale(0)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "scale-in-center":
          "scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
      transitionDelay: {
        "400": "400ms",
        "500": "500ms",
        "600": "600ms",
        "700": "700ms",
        "800": "800ms",
        "900": "900ms",
        "1000": "1000ms",
        "1100": "1100ms",
        "1200": "1200ms",
        "1300": "1300ms",
        "1400": "1400ms",
        "1500": "1500ms",
        "1600": "1600ms",
        "1700": "1700ms",
        "1800": "1800ms",
        "1900": "1900ms",
        "2000": "2000ms",
        "2100": "2100ms",
        "2200": "2200ms",
        "2300": "2300ms",
        "2400": "2400ms",
        "2500": "2500ms",
      },
      transitionTimingFunction: {
        "fade-in": "cubic-bezier(0.390, 0.575, 0.565, 1.000)",
        "slide-in": "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        rubik: ["var(--font-rubik)"],
      },
      spacing: {
        "22": "88px",
      },
      maxWidth: {
        "240": "960px",
        "285": "1140px",
      },
      borderWidth: { "3": "3px" },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
