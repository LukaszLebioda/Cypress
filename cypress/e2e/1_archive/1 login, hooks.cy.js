// LOGIN EXAMPLE

/* test sites:
https://opensource-demo.orangehrmlive.com/web/index.php/auth/login (qaboxletstest@gmail.com; password123)
https://react-redux.realworld.io/#/login?_k=5jewux
*/

/* 
cy.visit 
cy.url 
cy.title 

    cy.reload()
    cy.log("After reload the test is continued")
    cy.pause()
    cy.wait(2000)

cy.get()
cy.xpath()
*/

describe("login and password inputs", () => {

    it("should load the page and assert it loaded", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", {timeout: 10000})
        cy.url().should("include", "orangehrm")
        cy.title().should("eq", "OrangeHRM") 
    })

    it("should grab elements on the page with css selectors and xpath selectors", () => {
        cy.get("h5").should("be.visible").contains("Login")
        cy.xpath("//h5").should("be.visible").and("have.length", 1)
        cy.xpath("//label[@class='oxd-label']").should("have.length", 2)
    })
})


// ----------------------------------------

/* HOOKS: 
before (once, before 1st test spec)
beforeEach (before each test spec)
    testExecution ()
afterEach (after each test script)
after (once, after the last test spec)
skip - skips test
only - runs only this test
*/

describe("Scroll on the page", () => {

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



  



