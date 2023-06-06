describe("web element testing", () => {

    beforeEach( () => {
        cy.visit("http://127.0.0.1:5500/cygetcontains.html")
    })

    it("basics", () => {
        cy.get("input[name='Channel Name']").type("Hyperion Cantoes");
        cy.get("input[name='date']").type("2023-04-29");
        cy.get("#GETCOMMAND").within( () => {
            cy.get("button").eq(-3).click({multiple: true})
        })
    });

    it.skip("review", () => {
        cy.window().then( (win) => {
            expect(win.location.hostname).to.eq("127.0.0.1")
            cy.location("hostname").should("eq", "127.0.0.1")
        })
    });
});