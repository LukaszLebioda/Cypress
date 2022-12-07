describe("Google search", () => {
    it("should load the google website", () => {
        cy.visit("https://www.google.com/", { timeout: 10000 })
        cy.url().should("include", "google")
        cy.get(".gLFyf").should("be.visible")
    })
    it("should type something in the searchbox", () => {
        cy.get(".gLFyf", { timeout: 10000 }).clear()
        cy.get(".gLFyf").type("Gerlach {Enter}", { delay: 100 })
        // cy.contains('Szukaj w Google').click() - zamiast {Enter}
    })
})