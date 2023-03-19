// 1) beforeEach - one url, then suburl's only;
// 2) then() - allows to work with the subject yielded by a previous command;
// BDD assertion: expect(url).to.contains("/click");

describe("basics", () => {

    
    /*1*/beforeEach( () => {
        cy.visit("http://uitestingplayground.com/textinput");
    })

    it("visit1", () => {
        cy.visit("/click");
        /*2*/cy.url().then( (url) => {
            cy.log(`The URL is: ${url}`);
            /*3*/expect(url).to.contains("/click");
        })
        
        
    })
    it("visit2", () => {
        cy.visit("/textinput")
    })

})