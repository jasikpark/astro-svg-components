// @ts-check

/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  printWidth: 120,
  singleQuote: true,
  importOrderTypeScriptVersion: "5.0.0",
  plugins: [
    require.resolve("prettier-plugin-astro"),
    require.resolve("@ianvs/prettier-plugin-sort-imports"),
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
