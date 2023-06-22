// ADDING TO CART SCENARIO WITH SQA
// FIXTURES, CUSTOM COMMANDS, POM APPROACH

/* BEST PRACTICES USED HERE:
1) setting up test hooks;
2) setting up fixtures;
3) building custom commands;
4) parameterizing tests with multiple data sets;
5) using POM approach for web elements used in the tests;
6) using environmental variables (e.g. for URL);
*/


// fixtures used:
/*
{
    "users": [
        {
            "valid": true,
            "username": "username",
            "password": "password",
            "stronka": ""
        },
        {
            "valid": false,
            "imionkusername": "badusername",
            "password": "badpassword",
            "stronka": ""  
        }
    ],
    "users2": 
    {
       "imionko": "wrong",
       "haselko": "",
       "email": "",
       "gender": "Male",
       "mobileName": ["Blackberry", "Nokia", "Samsung"]
    }
}
*/

// we're importing the class
import LoginSQA from "../../support/PageObjects/SQAHomePage.js";
import ProductSQA from "../../support/PageObjects/SQAProductPage.js";

describe("fixtures, custom commands, pom approach", () => {

    // we're creating an object as an instance of the class imported above
    const homePage = new LoginSQA();
    const productPage = new ProductSQA();

    // fixtures should be loaded as part of before hook, not test suite;
    // only old function notation can be used here with THIS to make it work;
    // normally we wouldn't be able to acces data outside the function scope;
    // so we need to use THIS to expand the scope to the entire class (document)
    beforeEach( function() {
        cy.fixture("./myFixtures/testingdata.json").then( function(data) {

            this.data = data;
        })
    })

    // we use ENVIRONMENTAL (GLOBAL) VARIABLES for URL's to control which URL to use
    // because there can be different URL's for development and different for testing etc.
    // and the rest of the test suites remain unchanged, no matter the environment
    // we declare env variables in "cypress.config.js"
    beforeEach( () => {
        cy.visit(`${Cypress.env("sqaWebsite")}/angularpractice/`, { timeout: 30000 })
    })

    it("POM + fixtures - filling the home page form", function() {
        
            // some examples of data driven test with fixtures' data
            // and with methods imported from the class (POM)
            // before: cy.get("input[name='name']").first().type(this.data.users2.imionko)
            // before: cy.get("select#exampleFormControlSelect1").select(this.data.users2.gender)
            homePage.getName().type(this.data.users2.imionko)
            homePage.getGender().select(this.data.users2.gender)

            // some validations (disabled radio button)
            homePage.checkRadioButton().should("be.disabled")

            // some validations (value + minlength)
            cy.get("input[name='name']")
                .first()
                .should("have.value", this.data.users2.imionko)
                .and("have.attr", "minlength", "2") // 2 or "2", both work

            // same as above (value only) (but with jQuery text() $ prop() methods)
            // cy.get("input[name='name']").first().then( ($txt) => {
            //     let text = $txt.val()
            //     expect(text).to.be.equal(this.data.users2.imionko)
            // })
            // cy.get("input[name='name']").first().then( ($txt) => {
            //     let text = $txt.prop("value")
            //     expect(text).to.be.equal(this.data.users2.imionko)
            // })
    })

    it("POM + custom commands - adding to cart scenario", function() {
        cy.contains("a", "Shop").click()

        // custom command: cy.selectMobile(mobile)
        /* 
        cy.get("h4.card-title a").each( ($item, index, $items) => {
            let item = $item.text()
            if(item.includes("Nokia")){
                cy.get("button.btn.btn-info").eq(index).click()
            }
        })
        */

       // parameterizing multiple data sets:
       // we want to get mobile names from fixtures loaded in the before hook;
       // so we could do this: cy.selectMobile("Blackberry") or/and cy.selectMobile("Nokia") (...);
       // or this: cy.selectMobile(this.data.users2.mobileName[0]);
       // or better this (forEach loop iterates and selects all the items from the array)

       // since we're using custom command, no POM approach is needed this time
       this.data.users2.mobileName.forEach(function(element) {
            cy.selectMobile(element)
        });

        productPage.clickCheckoutCart();
       
        // here we're writing a test to check if the partial item prizes in the cart 
        // sum up properly into total prize (no matter how many items we would have in the cart)
        // firstly we have to write a selector that will filter these partial prizes only
        // then we iterate through the array of item prizes
        // but we also need "sum" variable
        let sum = 0;
        cy.get("tr td:nth-child(4) strong").each( ($el, index, $elements) => {
            // we're grabbing the text, slicing and parsing into number
            const price = parseInt($el.text().slice(2));
            sum = sum + price;
            cy.log(sum)
        }).then( () => {
            cy.log(sum) // otherwise it would log "0" (initial value of sum variable is "0", and JS is synchronous, and would finish before cypress each loop)
        })

        // and now we're converting TOTAL PRIZE to be compared later with SUM
        cy.get("h3 strong").then( (element) => {
            const amount = element.text()
            var res = amount.split(" ")
            var total = Number(res[1].trim())
            
            expect(sum).to.equal(total)
        })





        // // proceeding to payment (selecting country)
        // cy.contains("Checkout").click();
        // cy.get("input#country").type("Poland");

        // // explicitly overwriting cypress configuration
        // // to click the country suggestion and then to check "agree"
        // Cypress.config('defaultCommandTimeout', 10000)
        // cy.get('.suggestions > ul > li > a').click()
        // cy.get("input#checkbox2").check({force: true});
        // cy.contains("Purchase").click();

        // // this validation below won't work, because there is <strong></strong> used within text:
        // // cy.get("div.alert").should("have.text", "Success! Thank you! Your order will be delivered in next few weeks :-).")

        // // so we need to use "expect(true).to.be.true" assertion
        // cy.get("div.alert").then( (txt) => {
        //     const actualText = txt.text()
        //     expect(actualText.includes("Success")).to.be.true
        //     // because "actualText.includes("Success")" = true
        // })



    });

})