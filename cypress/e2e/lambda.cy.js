context("some test", () => {

    beforeEach( () => {
        cy.visit("https://example.cypress.io/commands/actions");
    })

    specify("should search for h1 element", () => {
        cy.get("h1").should("exist");
    })
    specify("should check if h1 has a proper text", () => {
        cy.get("h1").should("contain.text", "Actions");
    })

})