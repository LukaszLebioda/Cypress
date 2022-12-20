/// <reference types="cypress" />

describe("interacting with buttons", function() {
    it("visits a google home page", function() {
        cy.visit("https://www.google.pl/", {timeout: 10000})
        cy.url("include", "google")
        cy.get("img.lnXdpd").should("be.visible") // google logo
        cy.get(".gLFyf").should("be.visible") // google search box
    });
    it("should click on searchbox ant then outside search box", () => {
        cy.get("input[name='q']").clear() // or cy.get("input.gLFyf").clear()
        cy.get("input[name='q']").click().type("random {Enter}")
        cy.get("input.gLFyf").click({ multiple: true })
        cy.get('.erkvQe').should("be.visible") // dropdown menu visible
        cy.get('.jfN4p').click() // logo click
        cy.get('.erkvQe').should("not.be.visible") // dropdown menu not visible
    })

})


describe("Google search", () => {
    it("should type something in the searchbox", () => {
        cy.get(".gLFyf", { timeout: 10000 }).clear()
        cy.get(".gLFyf").type("Gerlach {Enter}", { delay: 100 })
        // cy.contains('Szukaj w Google').click() - zamiast {Enter}
    })
})