/** @type {import("prettier").Config} */
const config = {
  printWidth: 100,
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  arrowParens: "always",
  useTabs: false,
  overrides: [
    {
      files: "LICENSE",
      options: { parser: "markdown" },
    },
  ],
};

export default config;
