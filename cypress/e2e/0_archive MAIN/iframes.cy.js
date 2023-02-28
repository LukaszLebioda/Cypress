// iFRAMES
/*
Cypress doesn't handle iFrames directyl, we have to by-pass this
1) approach 1 - storing singular iframe into variable
2) approach 2 - creating a custom command for multiple iframes
3) approach 3 - implementing cypress-iframe plugin
*/

import "cypress-iframe" // for approach 3

describe("handling iFrames", () => {

    it("approach 1 - single iframe", () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");

        let iframe = cy.get("iframe#mce_0_ifr") // łapiemy iframe i przypisujemy do zmiennej
                        .its("0.contentDocument.body") // 0: bo mamy tylko 1 wbudowany document
                        .should("be.visible") // asercja
                        .then(cy.wrap); // na koniec ten iframe wrapujemy...
       
            iframe.clear().type("Approach 1 {ctrl+a}"); // czyścimy field i wpisujemy coś
            cy.get("[aria-label='Bold']").click(); // zaznaczamy to coś i boldujemy
    })

    it("approach 2 - custom command for multiple iframes", () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");
        
        cy.getiframe("iframe#mce_0_ifr").clear().type("Approach 2 {ctrl+a}");

        cy.get("[aria-label='Bold']").click(); 
    })

    it("approach 3 - iframe plugin", () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");
        
        // cypress-iframe plugin command to load an iframe
        cy.frameLoaded("iframe#mce_0_ifr");
        // cypress-iframe plugin command to interact with the iframe
        cy.iframe("iframe#mce_0_ifr").clear().type("Approach 2 {ctrl+a}");

        cy.get("[aria-label='Bold']").click(); 
    })

})