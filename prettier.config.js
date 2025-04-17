const preset = require('@sanity/prettier-config');

module.exports = {
  ...preset,
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  plugins: [
    ...preset.plugins,
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
};
