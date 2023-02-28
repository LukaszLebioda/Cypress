// HOOKS

/*
before
beforeEach
afterEach
after
skip - skips certain describe block or test case(s)
only - runs only certain describe block or test case(s)
*/

describe("hook practice", () => {

    before( () => {
        cy.visit("https://books.toscrape.com/");
        cy.log("before hook is applied before the first test case / before the whole test suite");
    })

    beforeEach( () => {
        cy.get("a").contains("Travel").click();
        cy.log("beforeEach hook is applied before every single test case in the test suite");
    })

    afterEach( () => {
        cy.log("afterEach hook is applied after every single test case in the test suite");
    })

    after( () => {
        cy.log("after hook is applied after the whole test suite / after the last test case");
    })

        it("Test Case 1", () => {
            console.log("TC1");
        })
        it("Test Case 2", () => {
            console.log("TC2");
        })
        it("Test Case 3", () => {
            console.log("TC3");
        })

})