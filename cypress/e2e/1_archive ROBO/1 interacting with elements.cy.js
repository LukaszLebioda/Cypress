describe.skip("tests 1 - basics", () => {

    let searchboxPhrase = "banking";

    it("Should load the page", () => {
        cy.visit("http://zero.webappsecurity.com/", { timeout: 10000 });
        cy.url().should("include", "webappsecurity.com");
        cy.title().should("eq", "Zero - Personal Banking - Loans - Credit Cards");
    })
    it.skip("10 should equal 10", () => { // it.only
        cy.log("before waiting for 1500");
        cy.wait(3000); // cy.pause();
        expect(10).to.equal(10);
    })
    it("should search a phrase in the searchbox", () => {
        cy.get("#searchTerm").type(`${searchboxPhrase} {Enter}`); // ("some search phrase {Enter}")
        cy.contains("Search Results").should("be.visible"); // ("not.be.visible), ("exist");
        cy.log("Before reloading the page");
        cy.reload();
        cy.log("After reloading the page");
    })
    it("should grab an element from the page", () => {
        cy.get("#signin_button").click();
        cy.get("h3").contains("Log in to ZeroBank").should("be.visible");
    })
    it("should count 4 input fields 1", () => {
        cy.get("input").should("have.length", 4);
    })
    it("should count 4 input fields 2", () => {
        cy.get("input").its("length").should("eq", 4);
    })
    it("should fill the form", () => {
        cy.get("label").contains("Keep me signed in").click();
    })
    it("inputs should not have class disabled", () => {
        cy.visit("http://zero.webappsecurity.com/login.html");
        cy.get("form")
            .find("input")
            .should("not.have.class", "disabled")
    })
    it("inputs should not have value - placeholder", () => {
        cy.visit("http://zero.webappsecurity.com/login.html");
        cy.get("input")
            .should("not.have.value", "placeholder");
    })
}) 




