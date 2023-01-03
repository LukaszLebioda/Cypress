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