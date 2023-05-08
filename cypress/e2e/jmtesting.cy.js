let extvar = "test";

describe("Variables", () => {

    beforeEach( () => {
        cy.visit("http://uitestingplayground.com/dynamicid");
    })

    // jQUERY directly
    it("grabbing the text - method 1", () => {
        cy.contains("button", "Button with Dynamic ID").then( (button) => {
            cy.log("method 1: ", button.text())
        })     
    });

    // INVOKE jQuery methos
    it("grabbing the text - method 2", () => {
        cy.contains("button", "Button with Dynamic ID").invoke("text").then( (buttonText) => {
            cy.log("method 2: ", buttonText)
        })     
    });

    // WRAP
    it("grabbing the text with wrap()", () => {
        cy.contains("button", "Button with Dynamic ID")
            .invoke("text")
            .then( (buttonText) => {
             extvar = buttonText;
                // this will overwrite extvar value
                cy.log("inside cy.contains: ", extvar);
                // wrap() yields whatever is passed into it
                // an then can be used in he next command
                cy.wrap(extvar).as("textFromContains");
        })  
        // extvar initial value will be preserved
        cy.log("external variable: ", extvar);  
        // alias is used to share a variable within the same it block
        cy.get("@textFromContains").then( (text) => {
            cy.log("overwritten variable, but outside cy.contains(): ", text)
        })
    });

    // alias from previous it block won't work here
    // in order to share aliases between many it block
    // we should use alias in beforeEach hook

})

