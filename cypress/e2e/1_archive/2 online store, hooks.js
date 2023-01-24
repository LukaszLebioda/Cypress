
// ONLINE STORE EXAMPLE

/* test sites:
https://books.toscrape.com/
*/

/*
contains = should("contain")
its("length").should("eq") = should("have.length")
*/

describe("Browser actions", () => {
  it("should load books-to-scrape website", () => {
    cy.visit("https://books.toscrape.com/", { timeout: 10000 })
    cy.url().should("include", "books")
    cy.get("h1").contains("All products")
  })
  it("should click on 'Travel' category1", () => {
    cy.get("a").contains("Travel").click()
    cy.get("h1").contains("Travel").should("be.visible") // same as below
  })
  it("should click on 'Travel' category2", () => {
    cy.get("a").contains("Travel").click() // same as above
    cy.get("h1").should("contain", "Travel") 
  })
  it("should display correct number of books1", () => {
    cy.get(".product_pod").its("length").should("eq", 11) // same as below
  })
  it("should display correct number of books2", () => {
    cy.get(".product_pod").should("have.length", 11) // same as above
  })
})

// ----------------------------------------------------------

/* HOOKS: 
before (once, before 1st test spec)
beforeEach (before each test spec)
    testExecution ()
afterEach (after each test script)
after (once, after the last test spec)
skip - skips test
only - runs only this test
*/

describe.skip("Scroll on the page", () => {

  before( () => {
     cy.visit("https://devexpress.github.io/testcafe/example/")
  })
  after( () => {
     cy.clearCookies()
     cy.clearLocalStorage()
  })
  beforeEach( () => {
      cy.log("log something before each test")
  })
  afterEach( () => {
      cy.log("log something after each test")
  })

  it("should scroll down and up on the page", () => {
      cy.wait(3000)
      cy.get("#submit-button").scrollIntoView()
      cy.wait(3000)
      cy.get("header").scrollIntoView()
  })
})






