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
    cy.get("#user_login").clear().type(username);
    cy.get("#user_password").clear().type(password);
    cy.get("#user_remember_me").click();
    cy.get("input[type='submit']").click();
    cy.contains("username").should("be.visible");
})




