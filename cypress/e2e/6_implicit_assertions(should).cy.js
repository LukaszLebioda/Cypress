// IMPLICIT ASSERTIONS: should(), and()
// EXPLICIT ASSERTIONS: expect(), assert()

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
            // .should("be.disabled")
            // .should("be.selected")
            // .should("be.focused") = .should("have.focus")
    })
})