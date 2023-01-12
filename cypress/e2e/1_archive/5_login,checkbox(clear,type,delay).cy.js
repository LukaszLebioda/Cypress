// loading the page:
describe("Loading a bank login form website", () => {
    it("should load the page", () => {
        cy.visit("http://zero.webappsecurity.com/login.html", { timeout: 10000 })
        cy.url().should("include", "login.html")
        cy.get("h3").contains("Log in to ZeroBank").should("be.visible")
    })
})

// working with inputs (with delay option):

// input.form-check-input[type='checkbox']
// to jest combo: tag - klasa - atrybut

describe("Working with inputs", () => {
    it("should fill username", () => {
        cy.get("#user_login").clear()
        cy.get("#user_login").type("Invalid name", { delay: 100 })
    })
    it("should fill password", () => {
        cy.get("#user_password").clear()
        cy.get("#user_password").type("Invalid password", { delay: 100 })
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

// ------------------------------------------------------------------------------------

// super-example from SDET 2022
describe("check UI elements 1", () => {
    it("checking radiobuttons", () => {

        // visibility
        cy.visit("https://itera-qa.azurewebsites.net/home/automation");
        cy.get("input#male").should("be.visible");
        cy.get("input#female").should("be.visible");

        // selecting (zamiast "click" może być "check") - sprawdzamy jeden radio button
        cy.get("input#male").click().should("be.checked");
        cy.get("input#female").should("not.be.checked");

        cy.wait(1500) // optional, for learning purposes

         // selecting (zamiast "click" może być "check") - sprawdzamy drugi radio button
         cy.get("input#female").click().should("be.checked");
         cy.get("input#male").should("not.be.checked");
    });
});

describe("check UI elements 2", () => {
    it("checking checkboxes", () => {

        // visibility
        cy.visit("https://itera-qa.azurewebsites.net/home/automation");
        cy.get("input#monday").should("be.visible");
        
        // selecting single checkbox - monday
        // check = click
        cy.get("input#monday").check().should("be.checked");

        cy.wait(1500) // optional, for learning purposes

        // unselecting single selected checkbox (po ID)
        // uncheck != unclick (unclick doesn't exist)
        // cy.get("input#monday").uncheck().should("not.be.checked");

        // // selecting all the checkboxes (po klasie)
        // cy.get("input.form-check-input[type='checkbox']").check().should("be.checked")

        // cy.wait(1500) // optional, for learning purposes

        //  // unselecting all the checkboxes (po klasie)
        //  cy.get("input.form-check-input[type='checkbox']").uncheck().should("not.be.checked")

        // selecting first checkbox with FIRST()
        cy.get("input.form-check-input[type='checkbox']").first().check().should("be.checked");
        // selecting last checkbox with LAST()
        cy.get("input.form-check-input[type='checkbox']").last().check().should("be.checked");
        
    });
});

