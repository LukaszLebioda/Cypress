// DROPDOWNS

// ----------------------------------------------------------------

// from SDET 2022
describe("handle dropdowns", () => {

    // normal drobdown, with select and option
    it("dropdown with select tag", () => {
        cy.visit("https://www.zoho.com/commerce/free-demo.html");
        cy.get("select#zcf_address_country")
            .select("Peru")
            .should("have.value", "Peru")
    })
})





