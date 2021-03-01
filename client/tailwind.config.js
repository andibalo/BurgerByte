module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#1CBAFF",
      secondary: "#131313",
      "secondary-light": "#262626",
      black: "#000",
      white: "#ffffff",
      grey: "#C4C4C4",
      "grey-30": "rgba(196, 196, 196, 0.3)",
      "grey-dark": "#7B7B7B",
      danger: "#E53935",
      warning: "#FDD835",
      transparent: "transparent",
    },
    container: {
      padding: {
        DEFAULT: "2rem",
        md: "4rem",
        lg: "8rem",
        xl: "10rem",
      },
    },
    fontFamily: {
      dosis: [
        "Dosis",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Fira Sans",
        "Droid Sans",
        "Helvetica Neue",
        "sans-serif",
      ],
      righteous: [
        "Righteous",
        "Dosis",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Fira Sans",
        "Droid Sans",
        "Helvetica Neue",
        "sans-serif",
      ],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
