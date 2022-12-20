// EXPLICIT ASSERTIONS: expect(), assert()

describe("Explicit assertions", () => {
    it("should load the cypress playground page", () => {
        cy.visit("https://example.cypress.io/", { timeout: 10000 })
        cy.url().should("include", "cypress")
        cy.get("h1").contains("Kitchen Sink").should("be.visible")
    })
    it("EXPECT assertions 1", () => {
        expect(true).to.be.true;
        expect(false).to.be.false;
        expect(true).to.be.equal(true);
        expect(true).to.not.equal(false);
        // expect(true).to.be.true;
        // expect(false).to.be.false;
        // expect(true).to.be.a("string");
        // expect(true).to.be.null;
        // expect(true).to.exist;
        // expect(true).not.exist;
    })
    it("EXPECT assertions 2", () => {
        expect(true).to.equal(true)
        expect(5).to.equal(5)
    })
    it("ASSERT assertions", () => {
        assert.equal(4, 4, "not equal 1");
        assert.strictEqual(4, "4", "not equal 2");
        // assert.notEqual
        // assert.isAbove
        // assert.isBelow
        // assert.exists
        // assert.notExists
        // assert.true
        // assert.false
        // assert.isString
        // assert.isNotString
        // assert.isNumber
        // assert.isNotNumber
    })

})