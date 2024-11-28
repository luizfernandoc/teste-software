const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.automationexercise.com', // URL base do sistema
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
