// SEARCHBOX

describe("searchbox test", () => {

    before( () => {
        cy.visit("http://zero.webappsecurity.com/");
    })

    it("should locate the searchbox ant type sth", () => {
        cy.url().should("contains", "zero");
        cy.get("#searchTerm").type("blablabla {Enter}");
    })
    
    it("should show search results", () => {
        cy.get("h2").contains("Search Results");
    })
})
