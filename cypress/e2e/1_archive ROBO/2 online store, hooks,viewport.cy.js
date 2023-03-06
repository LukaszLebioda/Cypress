


//----------------------------------------------------------

/* HOOKS: 
before (once, before 1st test spec)
beforeEach (before each test spec)
    testExecution ()
afterEach (after each test script)
after (once, after the last test spec)

SKIP - skips test
ONLY - runs only this test
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

//---------------------------------------------------
// VIEWPORT (with & heigth or device name)

describe("Viewport test", () => {
  it("720p (HD)", () => {
      cy.viewport(1280, 720) // width and height of HD resolution
      cy.visit("http://www.example.com")
      cy.wait(3000)
  })
  it("1080p (Full HD)", () => {
      cy.viewport(1980, 1080) // of Full HD
      cy.visit("http://www.example.com")
      cy.wait(3000)
  })
  it("iPhone X", () => {
      cy.viewport("iphone-x")
      cy.visit("http://www.example.com")
      cy.wait(3000)
  })
  it("Macbook 15", () => {
      cy.viewport("macbook-15")
      cy.visit("http://www.example.com")
      cy.wait(3000)
  })
})







