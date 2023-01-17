// DROPDOWNS

// ----------------------------------------------------------------

// from SDET 2022
describe("handle dropdowns", () => {

    // normal dropdown, with select and option
    it.skip("dropdown with select tag", () => {
        cy.visit("https://www.zoho.com/commerce/free-demo.html");
        cy.get("select#zcf_address_country")
            .select("Peru")
            .should("have.value", "Peru")
    })

 // a dropdown without select and option (e.g. bootstrap dropdown)
 it("dropdown without select tag", () => {
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
    cy.get("#select2-billing_country-container").click()
    cy.get(".select2-search__field").type("Mexico {Enter}")
    cy.get("#select2-billing_country-container").should("have.text", "Mexico")
})

})





