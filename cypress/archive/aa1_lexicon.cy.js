/*
INDEX:
baseUrl
cypress-testing-library plugin
failed-log plugin
global hooks
headless mode
intelligent code completion (reference)
mocha syntax
uncaught exceptions
*/

// ----------------------------
/* BASE URL
1) package.json: "cy:openBase": "cypress open --config baseUrl=http://uitestingplayground.com"
2) cypress.config.js: e2e: { baseUrl: "http://uitestingplayground.com" }
3) testspec.cy.js: cy.visit("/textinput")
*/

// ----------------------------
/* CYPRESS-TESTING-LIBRARY PLUGIN
augments get() and find() commands by providing a series of findBy() / findAllBy() commands:
e.g. cy.findByText("some text")


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

/* GLOBAL HOOKS
we can write in e2e.js:

    beforeEach( () => {
        cy.log("I'm a message that is coming from a global be hook!")
    })

and it is going to be global!

It's is most commonly used with cy.session()
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
}

-------------------------------------------------------

JQUERY SELECTORS:
:visible (h3:visible) - selects only visible elements;
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








