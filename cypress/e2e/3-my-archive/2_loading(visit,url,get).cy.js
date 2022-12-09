// cy.visit: loading URL with timeout option (fails when timeout exceeds time given; 1000ms = 1s)
// cy.url: checking whether the URL is correct (checking whether a certain text is a part of an URL) 
// cy.get: checking, whether an element (e.g. a header h1) is visible on the page

describe("Browser actions", () => {
    it("should load correct URL", () => {
      cy.visit("https://example.com/", { timeout: 10000 })
    })
    it("should check correct URL", () => {
    cy.url().should("include", "example.com")
    })
    it("should check for correct element on the page", () => {
      cy.get("h1").should("be.visible") // with: contains("sth")?
    })
  })