// FIXTURES

// {
//     "username": "invalid username",
//     "password": "invalid password"
// }

describe.skip("login with fixtures", () => {

    it("should load the login form", () => {
        cy.visit("http://zero.webappsecurity.com/login.html");
        cy.url().should("include", "login.html")
    })

    it("should try to login with invalid credentials", () => {
        cy.fixture("myFixtures/credentials.json").then((credentials) => {
            let username = credentials.username;
            let password = credentials.password;

            cy.get("input#user_login").clear().type(username);
            cy.get("#user_password").clear().type(password);
            cy.get("input[type='submit']").click();
            // cy.contains("Login and/or password are wrong.");
            cy.get(".alert").should("contain", "Login and/or password are wrong.")
        })
    })

})

// CUSTOM COMMANDS

// location: ./support/command.js

/*

1. MY CUSTOM COMMAND TO LOAD THE PAGE:

Cypress.Commands.add("myvisit", (enterUrl, checkUrl, element) => {
    cy.visit(enterUrl, { timeout: 10000 });
    cy.url().should("include", checkUrl);
    cy.get(element).should("be.visible");
})

2. MY CUSTOM COMMAND TO LOGIN:

Cypress.Commands.add("mylogin", (username, password) => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.get("#user_login").clear().type(username);
    cy.get("#user_password").clear().type(password);
    cy.get("#user_remember_me").click();
    cy.get("input[type='submit']").click();
    cy.contains("username").should("be.visible");
})
*/

describe.skip("Login with custom commands", () => {

    it("should load the page with a custom command", () => {
        cy.myvisit("http://zero.webappsecurity.com/", "webappsecurity", "a.brand");
    })

    it("should load the login form", () => {
        cy.get("#signin_button").click();
    })

    it("should login with a custom commands", () => {
        cy.mylogin("username", "password");
        cy.contains("username").should("be.visible");
    })

    it("should logout", () => {
        cy.contains("username").click();
        cy.contains("Logout").click();
        cy.contains("Signin").should("be.visible");

    })
})



