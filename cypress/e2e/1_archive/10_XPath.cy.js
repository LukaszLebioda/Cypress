/*
1) install XPath plugin: npm install -D @cypress/xpath
2) e2e.js: require('@cypress/xpath');
3) https://selectorshub.com/: install XPath selector hub for Chrome;
*/

describe("XPath Locators plugin practice", () => {
    // with XPath we're grabbing li item of the ul list
    it("find number of products", () => {
        cy.visit("https://books.toscrape.com/catalogue/category/books/fantasy_19/index.html");
        cy.xpath("//ol[@class='row']/li").should("have.length", 20)
    })
    // with XPath we're grabbing ul list first, the the li items 
    it("chained XPath", () => {
        cy.visit("https://books.toscrape.com/catalogue/category/books/fantasy_19/index.html");
        cy.xpath("//ol[@class='row']").xpath("./li").should("have.length", 20)
    })
})


  
