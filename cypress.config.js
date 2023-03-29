const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // baseUrl: "your url goes here", (jak pracujemy nad jedną stroną, to można tu ją zakodować)
    watchForFileChanges: true, // (jeśli false, to po po sejwie trzeba ręcznie uruchomić test)
    viewportWidth: 1000, // 1000 is default
    viewportHeight: 600, // 600 is defalut 
    waitForAnimations: true, // cypres should wait for animation to finish or not (true recommended)
    animationDistanceTreshold: 20, // number of pixels to be moved to consider an element an animation
    defaultCommandTimeout: 5000, // dotyczy czasu komend (defaultowo jest 4000) 
    execTimeout: 60000, // recommended
    pageLoadTimeout: 60000, // recommended
    requestTimeout: 15000, // recommended
    responseTimeout: 15000, // recommended
    video: false, // defaultowo jest false, true - nagrywa nasze testy w headless mode;
    failOnStatusCode: false,
    // excludeSpecPattern: "**/2-advanced-examples/*", (wyklucza z wykonywania testu konkretne pliki / foldery)
    
    setupNodeEvents(on, config) {
      // https://github.com/bahmutov/cypress-failed-log
      require('cypress-failed-log/on')(on)
    },

  },
});



