// IMPLICIT ASSERTIONS (in-build assetions): should(), and()

        //     .and("have.value", "")
        // cy.get('[title="Szukaj"]').should("have.attr", "maxlength", "2048")


// implicit assertions:
describe("Implicit assertions", () => {
    it("should load the cypress playground page", () => {
        cy.visit("https://example.cypress.io/", { timeout: 10000 })
        cy.url().should("include", "cypress")
        cy.get("h1").contains("Kitchen Sink").should("be.visible")
    })
    it("should click on 'get' category", () => {
        cy.contains('get').click()
    })
    it("should click on button1", () => {
        cy.get('#query-btn')
            .should("contain", "Button")
            .and("have.class", "query-btn btn btn-primary")
            // .should("have.text")
            // .should("have.html")
            .and("be.visible")
            .and("be.enabled")
            // .should("have.length", 2)
            // .should("be.disabled")
            // .should("be.selected")
            // .should("be.focused")
            // .should("have.focus")
            // .should("be.empty")
    })
})

// ---------------------------------------------------------------------------------------

// IMPLICIT ASSERTIONS: SDET 2022

// trzy shouldy: include / eq / contain
// można zapisać tak
describe("test suite 1", () => {
    it("test1", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.url().should("include", "orangehrmlive.com");
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.url().should("contain", "orangehrm");
    })
})
// albo tak:
describe("test suite 2", () => {
    it("test2", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.url().should("include", "orangehrmlive.com")
            .should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            .should("contain", "orangehrm");
    })
})
// albo ze słówkiem and:
describe("test suite 3", () => {
    it("test3", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.url().should("include", "orangehrmlive.com")
        .and("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        .and("contain", "orangehrm");
    })
})
// mamy też negative assertions:
describe("test suite 4", () => {
    it("test4", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.url().should("not.include", "dfgdfgdfg.com")
            .should("not.eq", "https://dfdfgdfgdfgdfg")
            .should("not.contain", "ujgfhjghj");
    })
})
// i na koniec kompletny test z wieloma assertions:
describe("test suite 5 COMPLETE", () => {
    it("url assertions", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.url().should("include", "orangehrmlive.com")
            .and("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            .and("contain", "orangehrm")
    })
    it("title assertions", () => {
        cy.title().should("include", "Orange")
        .and("eq", "OrangeHRM")
        .and("contain", "HRM")
    })
    it("single element assertions", () => {
        cy.get(".orangehrm-login-branding > img").should("be.visible") // albo "exist"
        cy.get(".orangehrm-login-branding > img").should("exist") // albo "be.visible"
        // albo: cy.get(".orangehrm-login-branding > img").should("be.visible").and("exist")
    })
    it("multiple element assertions version1", () => {
        cy.get("a").should("have.length", 5)
    }) 
    it("multiple element assertions version2", () => {
        cy.get("a").its("length").should("eq", 5)
    }) 
})