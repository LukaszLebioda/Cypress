describe("interacting with buttons", function() {
    it("visits a google home page", function() {
        cy.visit("https://www.google.pl/", {timeout: 10000})
        cy.url("include", "google")
        cy.get("img.lnXdpd").should("be.visible") // google logo
        cy.get(".gLFyf").should("be.visible") // google search box
    });
    it("should click on searchbox ant then outside search box", () => {
        cy.get("input[name='q']").clear() // or cy.get("input.gLFyf").clear()
        cy.get("input[name='q']").click().type("Colin McRae {Enter}", {delay: 100})
        cy.get("input.gLFyf").click({ multiple: true }) // searchbox
        
        const search = ".erkvQe > .OBMEnb > ul"
        
        cy.get(search).should("be.visible") // dropdown menu visible
        // cy.get(".jfN4p").click() // logo click
        // cy.get(".erkvQe").should("not.be.visible") // dropdown menu not visible
        cy.get(search)
            .find("li")
            .eq("4")
            .contains("Colin McRae Rally 2")
            .click()
            cy.get('[href="https://www.dobreprogramy.pl/colin-mcrae-rally-2-0,program,windows,6628705711732353"] > .TbwUpd > .iUh30')
    })

})


// describe("Google search", () => {
//     it("should type something in the searchbox", () => {
//         cy.get(".gLFyf", { timeout: 10000 }).clear()
//         cy.get(".gLFyf").type("Gerlach {Enter}", { delay: 100 })
//         // cy.contains('Szukaj w Google').click() - zamiast {Enter}
//     })
// })

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
    it.skip("dropdown without select tag", () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
        cy.get("#select2-billing_country-container").click()
        cy.get(".select2-search__field").type("Mexico {Enter}")
        cy.get("#select2-billing_country-container").should("have.text", "Mexico")
    })

    // a dropdown with STATIC autosuggestion
    it.skip("dropdown with autosuggestion", () => {
        cy.visit("https://www.wikipedia.org/");
        cy.get("#searchInput").click().type("tuvalu");
        cy.get(".suggestion-title").should("have.length", 6);
        cy.get(".suggestion-highlight").contains("Tuvalu").click();
        cy.get('.mw-page-title-main').should("exist");
    })
        // EACH
        // DYNAMIC autosuggestion dropdowns: FUNCTION NEEDED!
        // static autosuggestions - same all the time
        // dynamic autosuggestions - different every now and then
        // so we shouldn't use "contains" and such
        // we have to build a function
        it("dynamic dropdowns with function", () => {
            cy.visit("https://www.google.com/");
            cy.get(".gLFyf").type("cypress automation");

            // to give server some time to return all the suggestions
            cy.wait(3000)

            cy.get("div.wM6W7d>span").should("have.length", 11)

            // it's easier to go like this:
            // cy.get(".div.wM6W7d>span").contains("cypress automation tool").click();
            // but is safer to do this by a function
            cy.get("div.wM6W7d>span").each( ($el, index, $list)  => {
                if($el.text()=="cypress automation tool") {
                    cy.wrap($el).click()
                }
            })

        cy.get(".gLFyf").should("have.value", "cypress automation tool")

        })
    
})


