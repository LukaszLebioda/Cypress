const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // baseUrl: "your url goes here", (jak pracujemy nad jedną stroną, to można tu ją zakodować)
    watchForFileChanges: true, // (po sejwie trzeba ręcznie uruchomić test)
    viewportWidth: 1400, // 1000 is default
    viewportHeight: 1200, // 600 is defalut 
    waitForAnimations: true, // cypres should wait for animation to finish or not (true recommended)
    animationDistanceTreshold: 20, // number of pixels to be moved to consider an element an animation
    defaultCommandTimeout: 5000, // (defaultowo jest 4000)
    execTimeout: 60000, // recommended
    pageLoadTimeout: 60000, // recommended
    requestTimeout: 15000, // recommended
    responseTimeout: 15000, // recommended
    video: true, // defaultowo jest false, true - nagrywa nasze testy w headless mode;
    failOnStatusCode: false,
    // excludeSpecPattern: "**/2-advanced-examples/*", (wyklucza z wykonywania testu konkretne pliki / foldery)
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
