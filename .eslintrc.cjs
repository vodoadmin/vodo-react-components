module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "@typescript-eslint"],
  rules: {
    "react-refresh/only-export-components": "off",
    // other rules
  },
  settings: {
    react: {
      version: "detect", // Detect the version of React
    },
  },
};
