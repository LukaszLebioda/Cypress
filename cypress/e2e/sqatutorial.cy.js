/*
SQA => EACH()
LAMBDA => asynchronous nature of Cypress
*/

describe("SQA", () => {
    it('wsdwsd', () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

        cy.get("input.search-keyword").type("ca")

        cy.get(".products > .product").should("have.length", 4)
        cy.get(".products").find(".product").should("have.length", 4)

        // EACH() to be reviewed!!!
        cy.get("div.products").find("div.product").each( ($prod, index, $prods) => {
           let text = $prod.find("h4.product-name").text()
           if(text == "Capsicum") {
                $prod.find("button").click()
           }
        })

    });
});

describe("LAMBDA", () => {
    it('wsdwsd', () => {

        // cypress commands run in order, like a chain of promises
        cy.visit("https://example.cypress.io/commands/actions")

        cy.findByPlaceholderText("Email").type("test@email.com")
        cy.wait(5000)

        // Cypress acts asynchronously when we are not usin cypress commands!!
        console.log("Test is finished"); // asynchronous, and it runs first
        cy.log("Test is finished") // synchronous, so it runs last

    });
});

