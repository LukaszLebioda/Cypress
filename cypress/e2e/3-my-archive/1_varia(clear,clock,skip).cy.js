describe("Browser actions", () => {
    it("should override the current time", () => {
        const date = new Date(2020, 3, 10).getTime() // returns a timestamp
        cy.clock(date)
        cy.log(date)
    })
    it("should load correct URL", () => {
        cy.visit("https://example.com/", { timeout: 10000 })
        cy.title().should("eq", "Example Domain") 
    })
    it("should clear cookies and local storage", () => {
        cy.clearCookies({log: true})
        cy.clearLocalStorage("your item", {log: true})
    })
    it.skip("should skip this test", () => {
        cy.visit("https://onet.pl")
    })
})