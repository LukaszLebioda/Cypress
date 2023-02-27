// iFRAMES
/*
Cypress doesn't handle iFrames directyl, we have to by-pass this
1) approach 1 - 
*/

describe("handling iFrames", () => {

    it("approach 1", () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");
        let iframe = cy.get("iframe#mce_0_ifr") // łapiemy iframe i przypisujemy do zmiennej
                        .its("0.contentDocument.body") // 0: bo mamy tylko 1 wbudowany document
                        .should("be.visible") // asercja
                        .then(cy.wrap); // na koniec ten iframe wrapujemy...

                   
            iframe.clear().type("gzyms {ctrl+a}");
            cy.get("[aria-label='Bold']").click();
    })

})