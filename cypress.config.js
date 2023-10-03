const { defineConfig } = require("cypress");

// for cy-verify-downloads
const { verifyDownloadTasks } = require('cy-verify-downloads');

module.exports = defineConfig({
  projectId: 'wicmv5',
  e2e: {
    // baseUrl: "your url goes here", (jak pracujemy nad jedną stroną, to można tu ją zakodować; wtedy w teście piszemy: cy.visit("/somethingAfterSlash"))
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
    video: false, // true - nagrywa testy w headless mode; 
    screenshotOnRunFailure: true, // robi screenshoty w headless, jeśli test failure
    failOnStatusCode: false,
    // excludeSpecPattern: "**/2-advanced-examples/*", (wyklucza z wykonywania testu konkretne pliki / foldery),
    reporter: 'cypress-mochawesome-reporter', 
    reporterOptions: { // ustawienia mochawesome reportera;
      charts: true,
      reportPageTitle: 'my title',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    retries: { // określamy, ile razy cy ma ponowić test (osobno dla run i dla open);
        runMode: 2,
        openMode: 1
    },
    
    setupNodeEvents(on, config) {
      // https://github.com/bahmutov/cypress-failed-log
      require('cypress-failed-log/on')(on),
      // https://www.npmjs.com/package/cy-verify-downloads
      on('task', verifyDownloadTasks),
      require('cypress-mochawesome-reporter/plugin')(on)
    },

    env: {
      demoVariable: "Hello from Cypress.config.js file!",
      demoWebsite: "https://www.globalsqa.com/",
      demoWebsite2: "https://demoqa.com",
      navbarText: "cypress.io",
      sqaWebsite: "https://rahulshettyacademy.com"
    }
  },
});



