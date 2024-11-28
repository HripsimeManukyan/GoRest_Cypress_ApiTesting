const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://gorest.co.in',
    env: {
      token: 'adc340f0f3eb664acfbeab533ddfa000399563646bfeff39f37eb4897f5a2a2e',
    },
  },
});
