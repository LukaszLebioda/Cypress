// cypress is asynchronous in nature, but it has some in-built mechanisms
// to control the flow of the CY commands and make them run synchronously, one by one
// so cypress commands queue up and run in order (it's like a chain of promises (resolved, rejected, pending))
// however we can use .then() to disrupt this running in order feature
describe("LAMBDA", () => {
    it('wsdwsd', () => {


        cy.visit("https://example.cypress.io/commands/actions")

        cy.findByPlaceholderText("Email").type("test@email.com")
        cy.wait(3000)

        // Cypress acts asynchronously when we are not using cypress commands!!
        console.log("Test is finished - console.log() without .then()"); // it's asynchronous, so it runs first
        cy.log("Test is finished") // it's synchronous, so it runs last

        //cy.log() above is only for logging; we can not do anything with it
        // e.g. we ca not store it it a variable or such
        // but we can use .then() to run a CY command, and when this command successfully executes
        // it can run another commands (even if it's not a CY command):
        cy.findByPlaceholderText("Email").type("test@email.com")
        cy.wait(3000).then( () => {
            console.log("Test is finished - console.log() with .then()")

            fetch("https://api.spacexdata.com/v3/missions")
                .then( (res) => res.json() )
                .then( (data) => {
                    console.log(data);
                })

        })

    });

    it("another example", () => {
        // this won't work, because const is JS and text() is jQuery:
        // const logo = cy.get("div.greenLogo"); 
        // cy.log(logo.text());

        // but this will (we're manually resolving the promise):
        cy.get("div.greenLogo").then( (logo) => {

            let textLogo = logo.text()

            cy.log(textLogo)
            expect(textLogo).to.be.equal("GREENKART")
        })

        // another way:
        cy.get(".greenLogo").should("have.text", "GREENKART")

    })
});