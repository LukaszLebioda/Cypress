const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // watchForFileChanges: false, (po sejwie trzeba ręcznie uruchomić test)
    // defaultCommandTimeout: 10000, // (defaultowo jest 4000)
    // excludeSpecPattern: "**/2-advanced-examples/*", (wyklucza z wykonywania testu konkretne pliki / foldery)
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
