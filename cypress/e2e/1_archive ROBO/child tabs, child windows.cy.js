// CHILD TABS, CHILD WINDOWS

/* by default Cypress doesn't handle child tabs that open on a new tab (new window), 
so we have to by-pass this disfunctionality
1) either by removing the attribute 'target="blank"' (cy.invoke);
2) or by capturing a-href value with a function and using cy.visit twice

*/

describe("handle child tabs - approach 1 (attribute removal", () => {

    it("should remove the target attribute", () => {
        cy.visit("https://the-internet.herokuapp.com/windows"); // parent tab
        cy.get(".example > a").invoke("removeAttr", "target").click(); // attr removal
        cy.url().should("include", "windows/new"); // assertion 1
        cy.get("h3").should("have.text", "New Window").and("be.visible"); // assertion 2 

        cy.wait(3000);
        cy.go("back"); // goes back to the parent tab
    })

    it("should capture the 'a href' element", () => {
        cy.visit("https://the-internet.herokuapp.com/windows");
         
        /* - get link element and pass it as 'e' to a function
        - extract 'href' property of 'e' parameter
        - and store it into 'url' variable */
        cy.get(".example a").then( (e) => {

           let url = e.prop("href");

           cy.visit(url);

        })


        cy.url().should("include", "windows/new");
        cy.get("h3").should("have.text", "New Window").and("be.visible");

        cy.wait(3000);
        cy.go("back"); // goes back to the parent tab
    })

})