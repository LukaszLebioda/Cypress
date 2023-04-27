// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//

// -------------------------------------------------

// for Cypress commands (otherwise we would have to write this in every file.cy.js file)
/// <reference types="cypress" />

// for cypress-file-upload custom commands
import 'cypress-file-upload';

// for Cypress Testing Library plugin
import '@testing-library/cypress/add-commands';

// my custom command to load the page
Cypress.Commands.add("myvisit", (enterUrl, checkUrl, element) => {
    cy.visit(enterUrl, { timeout: 10000 });
    cy.url().should("include", checkUrl);
    cy.get(element).should("be.visible");
})

// my custom command to login
Cypress.Commands.add("mylogin", (username, password) => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.get("input#userName").clear().type(username);
    cy.get("input#password").clear().type(password);
    // cy.get("#user_remember_me").click();
    cy.get("button#login").click();
    cy.url().should("include", "profile")
})

// LAMBDA EXAMPLES for setting & getting local storage data
// setting, so bot key and value are needed
Cypress.Commands.add("setLocalStorage", (key, value) => {
    cy.window().then( (win) => {
        win.localStorage.setItem(key, value)
    })
})
// getting only by the item's key
Cypress.Commands.add("getLocalStorage", (key) => {
    cy.window().then( (win) => {
        return win.localStorage.getItem(key)
    })
})

// SQA example for adding to cart scenario
Cypress.Commands.add("selectMobile", (mobileName) => {
    cy.get("h4.card-title a").each( ($item, index, $items) => {
        let item = $item.text()
        if(item.includes(mobileName)){
            // we use index from each() to click a proper add-to-cart-button
            cy.get("button.btn.btn-info").eq(index).click()
        }
    })
})


