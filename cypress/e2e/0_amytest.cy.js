/*
1) install XPath plugin: npm install -D @cypress/xpath
2) e2e.js: require('@cypress/xpath');
3) https://selectorshub.com/: install XPath selector hub for Chrome;
*/

// loading the page:
describe("Loading a bank login form website", () => {
    it("should load the page", () => {
        cy.visit("http://zero.webappsecurity.com/login.html", { timeout: 10000 })
        cy.url().should("include", "login.html")
        cy.get("h3").contains("Log in to ZeroBank").should("be.visible")
    })
})

// working with inputs (with delay option):

describe("Working with inputs", () => {
    it("should fill username", () => {
        cy.get("#user_login").clear()
        cy.get("#user_login").type("Invalid name", { delay: 100 })
        cy.get("#user_login").should("have.value", "Invalid name")
    })
    it("should fill password", () => {
        cy.get("#user_password").clear()
        cy.get("#user_password").type("Invalid password", { delay: 100 })
        cy.get("#user_password").should("have.value", "Invalid password")
    })
    it("should mark the 'Keep me signed in' checkbox", () => {
        cy.get("input[type='checkbox']").click()
    })
    it("should submit the login form", () => {
        cy.contains("Sign in").click()
    })
    it("should display error message", () => {
        cy.get(".alert")
            .should("be.visible")
            .and("contain", "Login and/or password are wrong")
    })
})



  
