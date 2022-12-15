// IMPLICIT ASSERTIONS (in-build assetions): should(), and()

// // example code from BitFumes:
// describe("learn about locators", () => {
//     it("visit google page", () => {
//         cy.visit("https://www.google.pl/")
//     })
//     it("can locate a button on the page", () => {
//         cy.get('input[title="Szukaj"')
//             .should("be.visible")
//             .should("have.class", "gLFyf")
//             .and("have.value", "")
//         cy.get('[title="Szukaj"]').should("have.attr", "maxlength", "2048")
//     })
// })

// // IMPLICIT (from Automation Step by Step)
// describe("Assertions", () => {
//     it("should load the cypress playground page", () => {
//         cy.visit("https://example.cypress.io/", { timeout: 10000 })
//         cy.url().should("include", "cypress")
//         cy.get("h1").contains("Kitchen Sink").should("be.visible")
//     })
//     it("should click on 'get' category", () => {
//         cy.contains('get').click()
//     })
//     it("should click on button", () => {
//         cy.get('#query-btn')
//             .should("contain", "Button")
//             .should("have.class", "query-btn btn btn-primary")
//             // .should("have.text")
//             // .should("have.html")
//             .should("be.visible")
//             .should("be.enabled")
//             // .should("have.length", 2) => sprawdza, czy są dwa elementy danego typu (np. cy.get(".todo-list li"))
//             // .should("be.disabled")
//             // .should("be.selected")
//             // .should("be.focused") = .should("have.focus")
//             // .should("be.empty")
//     })
// })

// ---------------------------------------------------------------------------------------

// IMPLICIT ASSERTIONS: SDET 2022

// // trzy shouldy: include / eq / contain
// // można zapisać tak
// describe("test suite 1", () => {
//     it("test1", () => {
//         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
//         cy.url().should("include", "orangehrmlive.com");
//         cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
//         cy.url().should("contain", "orangehrm");
//     })
// })
// // albo tak:
// describe("test suite 2", () => {
//     it("test1", () => {
//         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
//         cy.url().should("include", "orangehrmlive.com")
//             .should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//             .should("contain", "orangehrm");
//     })
// })
// // albo ze słówkiem and:
// describe("test suite 3", () => {
//     it("test1", () => {
//         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
//         cy.url().should("include", "orangehrmlive.com").and("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login").and("contain", "orangehrm");
//     })
// })
// // i wreszcie mamy negative assertions:
// describe("test suite 4", () => {
//     it("test1", () => {
//         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
//         cy.url().should("not.include", "dfgdfgdfg.com")
//             .should("not.eq", "https://dfdfgdfgdfgdfg")
//             .should("not.contain", "ujgfhjghj");
//     })
// })
// i na koniec kompletny test z wieloma assertions:
describe("test suite 5", () => {
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
        // albo: cy.get(".orangehrm-login-branding > img")..should("be.visible").and("exist")
    })
    it("multiple element assertions", () => {
        cy.get("a").should("have.length", 5)
    }) 
    // czy to jest to samo???
    // it("multiple element assertions", () => {
    //     cy.get(".product_pod").its("length").should("eq", 11)
    // })
})