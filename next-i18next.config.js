const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  localePath: path.resolve('./public/locales') // Set the locale path here
};