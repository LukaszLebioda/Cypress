// skipped: 2, 3
context("test suite 1-10", () => {

    beforeEach( () => {
        cy.visit("http://127.0.0.1:5500/index.html")
    })

    it("test case 1 :has, :contains", () => {
        cy.get("li span.badge1.badge2");
        cy.get("li:has(span.badge1.badge2)");

        cy.contains("li", "out of stock");
        cy.get(".badge1:contains('out of stock')");

        cy.get("li:has(.badge1:contains('out of stock'))")
    })

})