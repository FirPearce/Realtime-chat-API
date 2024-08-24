module.exports = {
  extends: ["standard", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  env: {
    node: true,
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "lf",
        trailingComma: "es5",
      },
    ],
    "no-unused-vars": "warn",
    "no-console": "off",
  },
};
