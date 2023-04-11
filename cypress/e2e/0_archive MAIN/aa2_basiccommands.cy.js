/* 
BASIC:
cy.visit();
cy.url();
cy.title();
cy.get() => find() / parent () / first() / last() / filter() 
cy.contains()
cy.pause();
cy.wait();
*/

/* 
ADVANCED:
cy.screenshot (full page or single element);
cy.scrollIntoView();
cy.viewport();
*/


describe("list of basic commands", () => {

  it("BASIC", () => {

    cy.visit("https://coding40.eu", { timeout: 10000 });
    cy.url().should("include", "travel");
    cy.title().should("eq", "Travel | Books to Scrape - Sandbox");

    cy.get("h1").contains("Travel").should("be.visible"); // tag name
    cy.get("#promotions").should("exist"); // id
    cy.get("div#promotions").should("exist"); // tag name + id
    cy.get(".instock").should("be.visible"); // class
    cy.get("p.instock").should("be.visible"); // tag name + class
    cy.get("[role='alert']").should("be.visible"); // attribute
    cy.get("div[role='alert']").should("be.visible"); // tag name + attribute

    cy.get(".product_pod").should("have.length", booksLength); // length (number of elements)

    cy.get("button").first().click(); // first position in an array of buttons
    cy.get("button").eq(1).click(); // second position in an array of buttons (etc.)
    cy.get("button").last().click(); // last position in an array of buttons

    cy.get(".price_color").filter(":contains('£36.94')").click(); // filters by attribute-value
    cy.get("ul").find("li").last().should("be.visible"); // finds elements within other elements
    cy.get("ul").parent().should("have.class", "side_categories"); // finds parents of elements

    cy.contains("some button").should("have.class", "btn-primary");
    cy.get("button").contains("some button").click()

    cy.pause();
    cy.wait(3000);
  })

  
  it("ADVANCED", () => {

    cy.screenshot( { capture: "fullPage"} );
    cy.get("h1").contains("Travel").screenshot();

    cy.get("a").contains("Crime").scrollIntoView();
    cy.wait(2000); 
    cy.get("a").contains("Travel").scrollIntoView();
    
    cy.viewport(550,750) // 2 arguments for the resolution, "portrait" mode is default
    cy.viewport("iphone-6", "landscape") // preset examples of the mobile devices, with "landscape" mode


  });

})
