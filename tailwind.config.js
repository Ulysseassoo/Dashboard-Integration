module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.jsx"],
  mode: "jit",
  media: false, //
  theme: {
    minWidth: {
      "400px": "400px",
    },
    extend: {
      boxShadow: {
        "blue-glow": "0px 4px 10px rgba(16, 156, 241, 0.24)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
