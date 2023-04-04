/* BASIC:
cy.get();
cy.pause();
cy.title();
cy.url();
cy.visit();
cy.wait();
*/

/* ADVANCED:
cy.document(text/html, UTF-8)
cy.screenshot (full page or single element);
cy.scrollIntoView();
*/


describe("loading the page & asserting", () => {

  let booksLength = 11;
  let pageUrl = "https://books.toscrape.com/catalogue/category/books/travel_2/index.html";
  let username = "Lucas";
  let password = "Lucas1982";

  beforeEach( () => {
    cy.visit(pageUrl);
  })

  // VISIT, URL, TITLE
  it("should load books-to-scrape 'Travel' website", () => {
    cy.visit("https://books.toscrape.com/catalogue/category/books/travel_2/index.html", { timeout: 10000 });
    cy.url().should("include", "travel"); // contain, contains, eq, equal
    cy.title().should("eq", "Travel | Books to Scrape - Sandbox");
  })

  // GET (CSS SELECTORS, FIRST/EQ/LAST, FILTER, FIND, PARENT)
  it("should get elements by different css selectors", () => {

    cy.get("h1").contains("Travel").should("be.visible"); // tag name
    cy.get("#promotions").should("exist"); // id
    cy.get("div#promotions").should("exist"); // tag name + id
    cy.get(".instock").should("be.visible"); // class
    cy.get("p.instock").should("be.visible"); // tag name + class
    cy.get("[role='alert']").should("be.visible"); // attribute
    cy.get("div[role='alert']").should("be.visible"); // tag name + attribute

    cy.get("button").first().click(); // first position in an array of buttons
    cy.get("button").eq(1).click(); // second position in an array of buttons (etc.)
    cy.get("button").last().click(); // last position in an array of buttons
    
    cy.get(".price_color").filter(":contains('£36.94')").click(); // filters by attribute-value
    cy.get("ul").find("li").last().should("be.visible"); // finds elements within other elements
    cy.get("ul").parent().should("have.class", "side_categories"); // finds parents of elements

  })
  
  // LENGTH OF ELEMENTS (with variable)
  it.skip("should display correct number of books", () => {
      cy.get(".product_pod").should("have.length", booksLength); 
  })

  // LENGTH OF ELEMENTS (with variable)
  it.skip("should display correct number of books", () => {
    cy.get(".product_pod").as("item")
    
    cy.get("@item").should("have.length", booksLength); 
})

  // SCREENSHOTS
  it.skip("should make 2 screenshots", () => {
  cy.screenshot( { capture: "fullPage"} );
    cy.get("h1").contains("Travel").screenshot();
  })
 
  // SCROLLINTOVIEW + WAIT + PAUSE
  it.skip("should scroll into element", () => {
      cy.get("a").contains("Crime").scrollIntoView();
      cy.wait(2000); // cy.pause();
      cy.get("a").contains("Travel").scrollIntoView();
  })

})