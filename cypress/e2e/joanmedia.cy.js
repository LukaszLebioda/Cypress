describe("basics", () => {

    beforeEach( () => {
        cy.visit("http://uitestingplayground.com/textinput");
    })

    it("URL + TITLE", () => {
        cy.url().should( (urlParam) => {
            expect(urlParam).to.contains("/textinput");
        })
        cy.title().then( (titleParam) => {
            cy.log(`The title is: ${titleParam}`)
            expect(titleParam).to.be.equal("Text Input")
        }) 
    })

    it("CONTAINS, FIND", () => {
        cy.visit("http://uitestingplayground.com/dynamicid")
        cy.contains("Button with Dynamic ID").should("have.class", "btn-primary")
        cy.get("div").find("button").should("have.text", "Button with Dynamic ID")
        cy.get("button[type='button']").should("have.attr", "type")
    })

    it.only("XPATH", () => {
        cy.visit("http://uitestingplayground.com/classattr")
        
        cy.xpath("//pre[@class=' language-html']").should("contain.text", "button")

        cy.xpath("//*[text()='Correct variant is']").should("contain.text", "Correct")

        cy.xpath("//button[contains(concat(' ', normalize-space(@class), ' '), ' btn-primary ')]").should("have.css", "background-color", "rgb(0, 123, 255)")
    })

})