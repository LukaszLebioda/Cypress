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

// Udemy custom command
Cypress.Commands.add("login", (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get("#user_login").type(username, {delay: 100})
    cy.get("#user_password").type(password, {delay: 100})
    cy.get("#user_remember_me").click()
    cy.contains("Sign in").click()
})

// my custom command
Cypress.Commands.add("myvisit", (enterUrl, checkUrl, element) => {
    it("should load correct URL", () => {
        cy.visit(enterUrl, { timeout: 10000 })
    })
    it("should check correct URL", () => {
        cy.url().should("include", checkUrl)
    })
    it("should check for correct element on the page", () => {
        cy.get(element).should("be.visible") 
    })
})

