/*
INDEX:
baseUrl
failed-log plugin
headless mode
intelligent code completion (reference)
mocha syntax
scripts (npm vs npx)
selectors
uncaught exceptions
xpath installation & example
*/

// ----------------------------
/* BASE URL
1) package.json: "cy:openBase": "cypress open --config baseUrl=http://uitestingplayground.com"
2) cypress.config.js: e2e: { baseUrl: "http://uitestingplayground.com" }
3) testspec.cy.js: cy.visit("/textinput")
*/

// ----------------------------
/*
FAILED-LOG PLUGIN

./cypress.config.js:
        setupNodeEvents(on, config) {
            // https://github.com/bahmutov/cypress-failed-log
            require('cypress-failed-log/on')(on)
        },

./e2e.js:
        require('cypress-failed-log');

*/

// ----------------------------

/*
HEADLESS MODE

npx cypress run (instead of npx cypress open)

by default it's Electron browser
by default it runs all the tests;
by default tests are recorded and store in 'video' folder (this can be changed in cypress.config.js - video: true)

to run a single test we have to provide a spec name and its path:
npx cypress run --spec "cypress/e2e/specfilename.cy.js"

to run a single test in a specific browser we add "--browser name":
npx cypress run --browser chrome --spec "cypress/e2e/specfilename.cy.js"

to run a single test in a specific browser in headless mode we add "--headless":
npx cypress run --headless --browser chrome --spec "cypress/e2e/specfilename.cy.js"

*/

// ----------------------------

/*
INTELLIGENT CODE COMPLETION (REFERENCE)

<reference types="cypress" /> (dzięki temu pojawia się code autocompletion), ale my to mamy hardcoded w "commands.js" (chociaż to chyba nie działa) i przede wszystkim stworzyliśmy plik "tsconfig.json", w którym zapisaliśmy pewien kod, i dzięki temu intelligent code completion działa 
*/

// ----------------------------

/* MOCHA SYNTAX:

describe("test block", () => {
    it("test suite", () => {
        cy.function("parameter")
    })
})

or:

context("test block", () => {
    specify("test suite", () => {
        cy.function("parameter")
    })
})

// ----------------------------

/* SCRIPTS (NPM vs NPX):

example:

"scripts": {
    "cy:open": "cypress open", // npx cypress open (without script)
    "cy:run": "cypress run" // npm run cy:run (with script)
  },

so we can open cypress: npx cypress open (it's universal)
or we can write a script, and with the example above: npm run cy:open

  */

//--------------------------------

/* 
SELECTORS:

cy.get("h1") - gets tag
cy.get("h1#id") - gets tag with id
cy.get(".class") - gets class
cy.get("h1.class") - gets tag of class
cy.get("[attribute='value']") - gets attribute with value
cy.get("h1[attribute='value']") - gets tag of attribute with value
cy.get(".class[attribute='value'") - gets class of attribute with value
cy.get("input.class[attribute='value'") - gets tag of class of attribute with value
*/

// ----------------------------

/* UNCAUGHT EXCEPTIONS
1) create "./support/exceptions.js" file;
2) in that file: 
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
3) in e2e.js: import "./exceptions";
*/

// ----------------------------

/*
XPATH INSTALLATION:

0) find XPath plugin: "https://github.com/cypress-io/cypress/tree/develop/npm/xpath"
1) install XPath plugin: npm install -D @cypress/xpath
2) e2e.js: require('@cypress/xpath');
3) https://selectorshub.com/: install XPath selector hub for Chrome;

syntax example:
cy.xpath("//h5").should("be.visible").and("have.length", 1)
cy.xpath("//label[@class='oxd-label']").should("have.length", 2)

in the console:
no xpath: $("h3")
xpath: Sx("//h3")

*/

// ----------------------------






