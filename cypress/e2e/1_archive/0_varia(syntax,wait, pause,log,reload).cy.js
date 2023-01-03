// <reference types="cypress" /> (że niby dzięki temu pojawia się code autocompletion)

// some practice sites:
// http://example.com/
// UDEMY: https://books.toscrape.com/
// UDEMY: http://zero.webappsecurity.com/login.html
// SDET 2022: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login (login: Admin, password: admin123)

// cy.wait: implicit wait (optional) - if we want to wait more than default cypress waiting time to move on to the next test (next it)
it("should wait for 3 seconds", () => {
    cy.wait(3000)
  })
  
// cy.pause: pauses the execution of the test until the resume button is clicked
it("should pause the execution", () => {
    cy.pause()
})

// cy.log: logs a text when a test is done:
it("should log a text", () => {
    cy.visit("https://books.toscrape.com/")
    cy.log("Page visited")
})

// cy.reload(): reloads the page:
it("should reload the page", () => {
    cy.visit("https://books.toscrape.com/")
    cy.log("Before reload")
    cy.reload()
    cy.log("After reload")
})

// -------------------------------------------

// SYNTAX from JoanMedia:

const add = (a,b) => a + b;
const sub = (a,b) => a - b;
const mul = (a,b) => a * b;
const div = (a,b) => a / b;

// we can nest describe blocks (describe = context)
// it = specify
// to.equal = to.eq = to.equals

describe("Math application", () => {
  
    context("Math with POSITIVE numbers", () =>{

        specify("should add positive numbers", () => {
            expect(add(5,5)).to.eq(10);
        })
        specify("should subtract positive numbers", () => {
            expect(sub(5,5)).to.eq(0);
        })
        specify("should multiply positive numbers", () => {
            expect(mul(5,5)).to.equals(25);
        })
        specify("should divide positive numbers", () => {
            expect(div(5,5)).to.equals(1);
        })

    });

    describe("Math with DECIMAL numbers", () =>{

        it("should add decimal numbers", () => {
            expect(add(1.2,1.2)).to.equal(2.4);
        })
        it("should subtract decimal numbers", () => {
            expect(sub(1.2,1.2)).to.equal(0);
        })
        it("should multiply decimal numbers", () => {
            expect(mul(1.2,1.2)).to.equal(1.44);
        })
        it("should divide decimal numbers", () => {
            expect(div(1.2,1.2)).to.equal(1);
        })
    });

})