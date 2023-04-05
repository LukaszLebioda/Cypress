// CHILD TABS

/* by default Cypress doesn't handle child tabs that open on a new tab (new window), 
so we have to by-pass this disfunctionality somehow
1) either by removing the attribute 'target="blank"' (cy.invoke);
2) or by capturing a-href value with a function and using cy.visit twice

*/

describe.skip("child tabs - approach 1 (removing target attribute)", () => {

    beforeEach( () => {
        cy.visit("https://demoqa.com/links")
    })

    it("should have href & target attributes with proper values", () => {
        // upewniamy się, że link a ma atrybut href i przede wszystkim target:_blank
        cy.get("a").contains("Home").should("have.attr", "href", "https://demoqa.com")
        cy.get("a").contains("Home").should("have.attr", "target", "_blank")
    });

    // i następnie usuwamy atrybut target, dzięki czemu strona nie otworzy się w nowym oknie
    // korzystamy z cy.invoke() => "Invoke a function on the previously yielded subject"
    it("approach 1 - should remove the 'target' attribute", () => {
        cy.get("a").contains("Home").invoke("removeAttr", "target").click()
        
        cy.url().should("eq", "https://demoqa.com/") // assertion 1a
        
        cy.url().then( url => {
            expect(url).to.eql("https://demoqa.com/") // assertion 1b
        })
        
        cy.get("div.card-up").should("be.visible").and("have.length", 6) // assertion 2

        cy.go("back") // goes back to the initial tab
    });
});

describe("child tabs - approach 2 (removing target attribute)", () => {

    it("should capture the 'a href' element", () => {
        cy.visit("https://demoqa.com/links");
         
        cy.get("a#simpleLink").then( (link) => {

           let url = link.prop("href");

           cy.visit(url);

        })

        // cy.go(-1)
        // same assertions as above (approach 1) can be applied
    })

})