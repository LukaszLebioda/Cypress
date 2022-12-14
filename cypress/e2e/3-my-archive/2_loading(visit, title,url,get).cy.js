// cy.visit: loading URL with timeout option (fails when timeout exceeds time given; 1000ms = 1s)
// cy.url: checking whether the URL is correct (checking whether a certain text is a part of an URL) 
// cy.get: checking, whether an element (e.g. a header h1) is visible on the page

// cy.get("h1") - gets tag
// cy.get("h1#id") - gets tag and id
// cy.get(".class") - gets class
// cy.get("h1.class") - gets tag and class
// cy.get("[attribute='value']") - gets attribute
// cy.get("h1[attribute='value']") - gets tag and attribute
// cy.get(".class[attribute='value'") - gets class and attribute
// cy.get("input.class[attribute='value'") - gets tag and class and attribute

// UDEMY
describe("Browser actions", () => {
    it("should load correct URL", () => {
      cy.visit("https://example.com/", { timeout: 10000 })
      cy.title().should("eq", "Example Domain") // optional I guess
    })
    it("should check correct URL", () => {
    cy.url().should("include", "example.com")
    })
    it("should check for correct element on the page", () => {
      cy.get("h1").should("be.visible") // with: contains("sth")?
    })
  })

