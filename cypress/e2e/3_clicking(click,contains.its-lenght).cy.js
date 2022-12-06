// cy.get().contains().click(): clicks on links and buttons to check if they're working
describe("Browser actions", () => {
  it("should load books-to-scrape website", () => {
    cy.visit("https://books.toscrape.com/", { timeout: 10000 })
    cy.url().should("include", "books")
    cy.get("h1").contains("All products")
  })
  it("should click on 'Travel' category", () => {
    cy.get("a").contains("Travel").click()
    cy.get("h1").contains("Travel") // + .should("be.visible"?)
  })
  it("should display correct number of books", () => {
    cy.get(".product_pod").its("length").should("eq", 11)
  })
})





