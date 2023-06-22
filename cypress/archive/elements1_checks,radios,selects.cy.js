describe("select boxes / dropdowns - static & dynamic", () => {

    // STATIC DROPDOWNS - there is a list of values to be selected provided
    // tags: select & option are obligatory
    it("select boxes / dropdowns: STATIC", () => {
        cy.visit("https://devexpress.github.io/testcafe/example/")

        // getting the select box and selecting something
        cy.get("select#preferred-interface").select("Both");
        cy.get("select#preferred-interface").should("have.value", "Both");
        cy.wait(2000);
        cy.get("select#preferred-interface").select("JavaScript API").should("have.value", "JavaScript API");
    })

        // DYNAMIC DROPDOWNS - we have to type sth to get the hints to be selected
        it("select boxes / dropdowns: DYNAMIC", () => {
            
            cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
            // no select, no option tags, just input text with autocomplete feature
            cy.get("input#autocomplete[type='text']").type("pol") 
            // after typing "pol" now we have 3 options displayed, from which we have to select "Poland"
            // we can do this statically: cy.get("ul#ui-id-1").find("li").eq(2).click()
            // but actually we don't know, wich position "Poland" will be in
    
            // so we use EACH() to iterate through li items and find a match
            cy.get("ul#ui-id-1").find("li.ui-menu-item").each( ($item, index, $items) => {
                let itemText = $item.text()
                if(itemText == "Poland") {
                    $item.click()
                }
            })
            cy.get("input#autocomplete[type='text']").should("have.value", "Poland")

        })


});

// SOME DROPDOWN EXAMPLES FROM SDET 2022
describe("handle dropdowns", () => {

  
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




