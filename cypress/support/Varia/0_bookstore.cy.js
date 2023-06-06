describe('when navigate to the online bookstore page', () => {

    let author = "Grisham";
    let dummyPhrase = "sdgrdthfhjgfhkgkgh";
    let searchbox = "#headerSearchInput";
    let website = "https://bonito.pl/";


    beforeEach(() => {
        cy.visit(website);
        cy.url().should("contain", "bonito");
    })

    it("website loaded and searchbox with placeholder visible", () => {
        cy.get(searchbox).should("be.visible");
        cy.get(searchbox).should("have.attr", "placeholder", "Czego szukasz?");
    })

    it("search icon clicked: no redirection", () => {
        cy.get('.menu_ikona')
            .should("be.visible")
            .click();
        cy.url().should("eq", website);

    })

    it("search icon clicked: no-results info provided", () => {
        cy.get(".menu_ikona")
            .should("be.visible")
            .click();
        cy.get(searchbox).should("have.attr", "placeholder", "Wypełnij to pole");
    })

    it("author's name typed in (no Enter), pop up window with hints appears", () => {
        cy.get(searchbox).clear();
        cy.get(searchbox).type(author);
        cy.get("iframe").should("be.visible")
        cy.get(searchbox).should("have.attr", "placeholder", author);
    })

    it("author's name typed in, {Enter}, 24 book items exist, pagination visible", () => {
        cy.get(searchbox).clear();
        cy.get(searchbox).type(`${author} {Enter}`);
        cy.get("h1").contains(author);
        cy.get('.product_card_min_white').should("have.length", 24);
        cy.get("div.H4B").should("be.visible");
    })

    it("dummy phrase typed in, {Enter}, no-results info provided", () => {
        cy.get(searchbox).clear();
        cy.get(searchbox).type(`${dummyPhrase} {Enter}`);
        cy.get('.ps-1 > .T2L').should("have.text", "0 wyników");
    })

  })
  
