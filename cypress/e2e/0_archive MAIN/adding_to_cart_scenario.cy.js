describe("SQA - adding to cart scenario", () => {
    it("adds items to cart", () => {
        // visiting page
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        // typing into searchbox
        cy.get("input.search-keyword").type("ca")
        // establishing aliases
        cy.get(".products").as("prods")
        cy.get("@prods").find(".product").should("have.length", 4)
        // adding 1st item with each() - dynamically
        cy.get("@prods").find(".product").each( ($el, index, $elements) => {
            let elementText = $el.find("h4.product-name").text()
            if(elementText.includes("Cashews")){
                $el.find("button").click()
            }
        })
        // adding 2nd item - statically
        cy.get("@prods").find("button").eq(2).click()
        // asserting the cart
        cy.get("a.cart-icon").find("span.cart-count").should("have.text", "2")
        cy.get("a.cart-icon").click()
        cy.get("ul.cart-items").should("be.visible")
        cy.get("ul.cart-items").find("li:visible").should("have.length", 2)
        // proceeding to payment
        cy.contains("PROCEED TO CHECKOUT").click()
        cy.contains("Place Order").click()
        // selecting a country and checking the checkbox
        cy.get("select").select("Poland").should("have.value", "Poland")
        cy.get("input[type='checkbox']")
            .check().wait(1000).uncheck().should("not.be.checked").wait(1000).check()
            .should("be.checked")
            .and("have.class", "chkAgree")
        cy.contains("Proceed").click()
    });
});