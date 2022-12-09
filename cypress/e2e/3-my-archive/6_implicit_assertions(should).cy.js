// IMPLICIT ASSERTIONS: should(), and()
// EXPLICIT ASSERTIONS: expect(), assert()

// example code from BitFumes:
describe("learn about locators", () => {
    it("visit google page", () => {
        cy.visit("https://www.google.pl/")
    })
    it("can locate a button on the page", () => {
        cy.get('input[title="Szukaj"')
            .should("be.visible")
            .should("have.class", "gLFyf")
            .and("have.value", "")
        cy.get('[title="Szukaj"]').should("have.attr", "maxlength", "2048")
    })
})

// IMPLICIT (from Automation Step by Step)
describe("Assertions", () => {
    it("should load the cypress playground page", () => {
        cy.visit("https://example.cypress.io/", { timeout: 10000 })
        cy.url().should("include", "cypress")
        cy.get("h1").contains("Kitchen Sink").should("be.visible")
    })
    it("should click on 'get' category", () => {
        cy.contains('get').click()
    })
    it("should click on button", () => {
        cy.get('#query-btn')
            .should("contain", "Button")
            .should("have.class", "query-btn btn btn-primary")
            // .should("have.text")
            // .should("have.html")
            .should("be.visible")
            .should("be.enabled")
            // .should("have.length", 2) => sprawdza, czy są dwa elementy danego typu (np. cy.get(".todo-list li"))
            // .should("be.disabled")
            // .should("be.selected")
            // .should("be.focused") = .should("have.focus")
            // .should("be.empty")
    })
})