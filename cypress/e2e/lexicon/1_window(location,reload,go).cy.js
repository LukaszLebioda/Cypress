// we can access window properties (browser global object properties) directly or via cypress commands

describe("location - hash, host, pathname, protocol", () => {

    beforeEach( () => {
        cy.visit("http://uitestingplayground.com/") 
    });

    it("hash, host, pathname, protocol - windows object commands", () => {

        cy.window().should( (win) => {
            expect(win.location.hash).to.eq("")
            expect(win.location.host).to.eq("uitestingplayground.com") // host = hostname
            expect(win.location.pathname).to.eq("/") // eq = eql, equal; contains = include
            expect(win.location.protocol).to.eq("http:")
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
        cy.get("h3").should("be.visible") // to assert we went back

        cy.window().should( (win) => {
            win.history.forward() // win.history.go(1)
        })
        cy.get("h3").should("be.visible") // to assert we went forward
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
