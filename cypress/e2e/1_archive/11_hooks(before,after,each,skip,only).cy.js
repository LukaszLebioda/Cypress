// HOOKS - to set conditions to run before/after test suites are executed

// from JoanMedia

// before (once, before 1st test spec)
// beforeEach (before each test spec)
// testExecution ()
// afterEach (after each test script)
// after (once, after the last test spec)
// skip
// only

describe("Hooks practice", () => {

        before( () => {
            cy.log("Before")
        })

        beforeEach( () =>{
            cy.log("Before each")
        })

        afterEach ( () =>{
            cy.log("After each")
        })

        after ( () =>{
            cy.log("After")
        })

    it("Test case #1", () => {
        console.log("TC1")
    })

    it("Test case #2", () => {
        console.log("TC2")
    })

    it("Test case #3", () => {
        console.log("TC3")
    })

    // // skips the test
    // it.skip("Test case #3", () => {
    //     console.log("TC3")
    // })

    //// executes only this test
    // it.only("Test case #3", () => {
    //     console.log("TC3")
    // })

})

// some real example:
// within the brackets can be every code, not necessarily coming from Cypress
// we use hooks to set up test data or text context
// we use hooks to seed or reset the database

describe("Scroll on the page", () => {

    before( () => {
       // runs before all the tests inside describe block
       // cy.visit is not in the context of scrolling up/down
       // so we can use before
       cy.visit("https://devexpress.github.io/testcafe/example/")
    })
    after( () => {
       // runs after all the tests inside describe block
       // e.g. test clean-up; clear cookies/local storage
       cy.clearCookies()
    })
    beforeEach( () => {
        // runs before each and every test inside describe block
        // if we want to log sth or prepare some data
        cy.log("log something")
    })
    afterEach( () => {
        // runs after each and every test inside describe block
        cy.log("log something")
    })

    it("should scroll down and up on the page", () => {
        cy.wait(3000)
        cy.get("#submit-button").scrollIntoView()
        cy.wait(3000)
        cy.get("header").scrollIntoView()
    })
})
