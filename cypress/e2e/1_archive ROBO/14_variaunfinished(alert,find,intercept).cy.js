// alert
// find
// intercept

// ---------------------------------------------------------

// alert (unfinished)

// cy.on("windows.alert", (txt) => {
//     expect(txt).to.be.equal("message")
// })

// ---------------------------------------------------------

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





// non-working example from BITFUMES!!!

// find / intercept
// "find" is added when we want to get(find) an element within another element (for instance when we want to find some posts)
// "intercept" is used when we want to mock an api, e.g. to return number of posts (wich can change of course when another posts are added)
// with "intercept" we are saying, that Cypress shouldn't reaaly access any database with posts

// describe("finding an element within another element", () => {
//     it("finding and intercepting", () => {

//         cy.visit("https://books.toscrape.com/")
//         cy.get("div.page_inner").find("ul.breadcrumb").should("be.visible")

//         cy.intercept("get", "https://someadress.com/api.posts", {
//           body: {
//             posts: {
//                 {
//                     "userId": 1,
//                     "id": 1,
//                     "title": "delectus aut autem",
//                     "completed": false
//                   },
//                   {
//                     "userId": 2,
//                     "id": 2,
//                     "title": "delectus aut autem",
//                     "completed": false
//                   },
//                   {
//                     "userId": 2,
//                     "id": 2,
//                     "title": "delectus aut autem",
//                     "completed": false
//                   }
//             }
//           }  
//         })

//     })
// })

// możemy też wrzucić całe to body do np. "./fixtures/posts.json" a w powyższym przykładzie zamiast BODY wpisać FIXTURE: "posts.json":

//         cy.intercept("get", "https://someadress.com/api.posts", {
//           fixture: "posts.json"
// })