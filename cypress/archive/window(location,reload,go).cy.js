

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
