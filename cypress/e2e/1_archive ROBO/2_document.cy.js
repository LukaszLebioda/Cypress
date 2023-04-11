/*
document()
should() vs then()
document object commands vs direct cypress commands
title()
Cypress.$
get width & height of the document
viewport()
handling cookies with document object commands 
handling cookies with direct cypress commands 
*/

describe("title, contentType, charset", () => {

    before( () => {
        cy.visit("http://uitestingplayground.com/")
    })

    it("contentType + charset assertions", () => {
        cy.document().its("contentType").should("equal", "text/html");
        cy.document().should("have.property", "charset").and("equal", "UTF-8");
    });

    // if expect is used => should() or then()
    // if cy command is used => then()
    it("title - with document object commands", () => {
        cy.document().then( (doc) => {
            cy.log(doc)
        })
        cy.document().should(doc => {
            const titleContent = doc.title;
            expect(titleContent).to.equal("UI Test Automation Playground")
        })
    });
    it("title - with direct cypress commands", () => {
        cy.title().then(titleText => {
            expect(titleText).to.eql("UI Test Automation Playground")
        })
        // or just:
        cy.title().should("eq", "UI Test Automation Playground")
    });
});

describe("get width and height with jQuery + viewport", () => {

    before( () => {
        cy.visit("http://uitestingplayground.com/")
    })

    // to get width and height of the document (not change)
    // we use jQuery (cypress has not in-built functionalities to get width and heigth)
    it("get width and height with jQuery", () => {
        cy.document().then( (doc) => {
            const jqObj = Cypress.$(doc)
            cy.log(`Height is: ${jqObj.height()}`)
            cy.log(`Width is: ${jqObj.width()}`)
            
        })
    });

    it("set css for body with jQuery", () => {
        cy.document().should( (doc) => {
         let cssBody = Cypress.$(doc.body)
         cssBody.css("background-color", "red")
        })
     });

});

describe.skip("handling cookies", () => {

    before( () => {
        cy.visit("http://zero.webappsecurity.com/login.html")
    })

    it("handling coocies with document object commands", () => {
       cy.document().should( (doc) => {
        // create cookie with should (no cy command used)
        doc.cookie = "username=Lookash" // same as: console => document.cookie = "username=Lookash"
       })
       cy.document().then( (doc) => {
        // create cookie with then (because we use cy.log)
        doc.cookie = "username=Lookash" // same as: console => document.cookie = "username=Lookash"
        // read
        cy.log(doc.cookie)
        // read
        console.log(doc.cookie)
        // update
        doc.cookie = "username=LookashUpdated"
        cy.log(doc.cookie)
        // delete (clear)
        doc.cookie = "username="
       })
    });

    it("handling coockies with direct cypress commands", () => {
        // create
        cy.setCookie("password", "buzzy123")
        // read
        cy.getCookie("password") // visible in the cypress gui devtools; cy.getCookies() to get all the cookies
        // update
        cy.setCookie("password", "buzzy1234567")
        cy.getCookie("password")
        // delete
        cy.clearCookie("password") // visible in the cypress gui devtools; cy.clearCookies() to clear all the cookies

     });
});