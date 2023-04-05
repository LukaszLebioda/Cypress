/*
window object commands vs direct cypress commands
window() + expect assertion
hash()
location()
reload()
go()
setItem - getItem - clearLocalStorage()
*/


describe("hash, host, pathname, protocol", () => {

    beforeEach( () => {
        cy.visit("http://uitestingplayground.com/") 
    });

    it("hash, host, pathname, protocol - windows object commands", () => {
        cy.window().should( (win) => {
            expect(win.location.hash).to.eql("")
            expect(win.location.host).to.eql("uitestingplayground.com") // host = hostname
            expect(win.location.pathname).to.eql("/") // eq = equal, contains = include
            expect(win.location.protocol).to.eql("http:")
        })
    });

    it("hash, host, pathname, protocol - direct cypress commands", () => {
        cy.hash().should("eq", "")
        cy.location("host").should("eq", "uitestingplayground.com")
        cy.location("pathname").should("eq", "/") // often used when page is redirected
        cy.location("protocol").should("eq", "http:")
    });
});

describe("page reload", () => {

    before( () => {
        cy.visit("http://uitestingplayground.com/") 
    });

    it("page reload - windows object commands", () => {
        cy.window().should( (win) => {
            win.location.reload()
        })
    });

    it("page reload - direct cypress commands", () => {
        cy.reload()
    });
});

describe("page navigation", () => {

    before( () => {
        cy.visit("http://uitestingplayground.com/") 
    });

    it("page navigation - windows object commands", () => {
        cy.contains("AJAX Data").click()
        cy.window().should( (win) => {
            win.history.back() // or: win.history.go(-1)
        })
        cy.get("h3").should("be.visible")
        cy.window().should( (win) => {
            win.history.forward() // win.history.go(1)
        })
        cy.get("h3").should("be.visible")
    });

    it("page navigation - direct cypress commands", () => {
        cy.visit("http://uitestingplayground.com/")
        cy.contains("AJAX Data").click()
        cy.go(-1) // cy.go("back")
        cy.get("h3").should("be.visible")
        cy.go(1) // cy.go("forward")
        cy.get("h3").should("be.visible")
    });
});

describe("local storage / session storage", () => {

    before( () => {
        cy.visit("http://uitestingplayground.com/") 
    });

    it("local storage / session storage - windows object commands", () => {
        cy.window().should ( win => {
            expect(win.localStorage.length).to.eql(0) // console => window.localStorage (length will be there)
            win.localStorage.setItem("Name", "Lookash") // set key + value
            expect(win.localStorage.getItem("Name")).to.eql("Lookash") // provide key to get value; devtools in cypress gui => application => Local Storage => key + value will be there
        })
    });

    it("local storage - direct cypress commands", () => {
        cy.clearLocalStorage() // clears what we have set in the "it" above
    });
});