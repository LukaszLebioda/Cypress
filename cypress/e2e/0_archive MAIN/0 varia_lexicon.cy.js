/*
INDEX:
headless mode
intelligent code completion (reference)
mocha syntax
practice websites
scripts (npm vs npx)
selectors
xpath installation & example
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

/* 
PRACTICE WEBSITES:

http://example.com/
https://books.toscrape.com/
http://zero.webappsecurity.com/login.html
https://devexpress.github.io/testcafe/example/
https://itera-qa.azurewebsites.net/home/automation

LOGIN:
https://opensource-demo.orangehrmlive.com/web/index.php/auth/login (login: Admin, password: admin123)

INPUTS:
https://www.zoho.com/commerce/free-demo.html
https://www.dummyticket.com/dummy-ticket-for-visa-application/
*/

// ------------------------------

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

/*
XPATH INSTALLATION:

1) install XPath plugin: npm install -D @cypress/xpath
2) e2e.js: require('@cypress/xpath');
3) https://selectorshub.com/: install XPath selector hub for Chrome;

syntax example:
cy.xpath("//h5").should("be.visible").and("have.length", 1)
cy.xpath("//label[@class='oxd-label']").should("have.length", 2)

*/

// ----------------------------






