// LOGIN 1 - just a regular login 
describe("Login test - regular", () => {

    let username = "test";
    let password = "Test1234*";

    beforeEach( () => {
        cy.visit("https://demoqa.com/login", { timeout: 10000 });
        cy.url().should("include", "login");
    } )

    it("should login with correct data (SUCCESS)", () => {
        cy.get("input#userName").clear().type(username).should("have.value", username)
        cy.get("input#password").clear().type(password).should("have.value", password)
        cy.get("button#login").click()

        cy.url().should("contain", "profile")
        cy.get("div[class='main-header']").should("have.text", "Profile")
        cy.get("label#userName-value").should("have.text", username)
    })

    it("should login with wrong data (FAILURE)", () => {
        cy.get("input#userName").clear().type("whatever")
        cy.get("input#password").clear().type("whatever")
        cy.get("button#login").click()

        cy.url().should("contain", "login")
        cy.get("div[class='main-header']").should("have.text", "Login")
        cy.get("p#name").should("have.text", "Invalid username or password!")
    })

})

// LOGIN 2 - this time login is a part of beforeEach
// and everything in beforeEach will be executed before each "it"
// and what is more - login is wrapped inside cy.session
// sp we can share the session with every "it"

Cypress.session.clearAllSavedSessions(); // recommended 

describe("Login - session (preserving cookies)", () => {

    let username = "test";
    let password = "Test1234*";

    beforeEach( () => {

        cy.session("mySession", () => {

            cy.visit("https://demoqa.com/login");
            cy.url().should("include", "login");
    
            cy.get("input#userName").clear().type(username).should("have.value", username)
            cy.get("input#password").clear().type(password).should("have.value", password)
            cy.get("button#login").click()
    
            cy.url().should("contain", "profile")

        })

    })

    it("check if session was saved", () => {
        cy.visit("https://demoqa.com/login");
    })

    it("check if session was saved", () => {
        cy.visit("https://demoqa.com/login");
    })

})