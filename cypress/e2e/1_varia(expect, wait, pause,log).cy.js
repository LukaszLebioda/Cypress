// test success & failure
describe("My first simple test with Cypress", () => {
    it("True should be True", () => {
        expect(true).to.equal(true)
    })
    it("True should be True", () => {
        expect(5).to.equal(10)
    })
  })

//   // cy.wait: implicit wait (optional) - if we want to wait more than default cypress waiting time to move on to the next test (next it)
// it("should wait for 3 seconds", () => {
//     cy.wait(3000)
//   })
  
//   // cy.pause: pauses the execution of the test until the resume button is clicked
//   it("should pause the execution", () => {
//     cy.pause()
//   })

// cy.log: logs a text when a test is done:
it("should do something", () => {
    cy.visit("https://books.toscrape.com/")
    cy.log("Page visited")
})