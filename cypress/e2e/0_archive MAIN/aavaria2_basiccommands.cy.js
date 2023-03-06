/* BASIC:
cy.get();
cy.pause();
cy.visit();
cy.wait();
*/

/* ADVANCED:
cy.screenshot (full page or single element);
cy.scrollIntoView;
*/


describe("loading the page & asserting", () => {

  it("should load books-to-scrape 'Travel' website", () => {
    cy.visit("https://books.toscrape.com/catalogue/category/books/travel_2/index.html", { timeout: 10000 });
    cy.url().should("include", "travel"); // contain, eq, equal
    cy.get("h1").contains("Travel").should("be.visible");
  })

  it("should display correct number of books", () => {
      cy.get(".product_pod").should("have.length", 11) 
  })

  // SCREENSHOTS
  it.skip("should make 2 screenshots", () => {
  cy.screenshot( { capture: "fullPage"} );
    cy.get("h1").contains("Travel").screenshot();
  })
 
  // SCROLLINTOVIEW + WAIT + PAUSE
  it("should scroll into element", () => {
      cy.get("a").contains("Crime").scrollIntoView();
      cy.wait(2000); // cy.pause();
      cy.get("a").contains("Travel").scrollIntoView();
  })
  
})