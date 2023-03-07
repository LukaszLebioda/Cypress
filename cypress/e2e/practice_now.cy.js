describe("Location demo", () => {

    beforeEach ( () => {
        cy.visit("https://www.saucedemo.com/");
    })

    it("should have title tag witha certain value", () => {
        cy.title().should("eq", "Swag Labs");
    })
    it("should have a proper URL", () => {
        cy.url().should("eq", "https://www.saucedemo.com/");
    })
    it("should have a proper https protocol", () => {
        cy.location("protocol").should("contains", "https");
        cy.location("host").should("contains", "www.saucedemo.com");
    })
    it("should redirect to proper /sublocation", () => {
        cy.get("[data-test='user-name']").type("standard_user");
        cy.get("[data-test='password']").type("secret_sauce");
        cy.get("[data-test='password']").type("secret_sauce");
        cy.get("[data-test='login-button']").click();
        cy.location("pathname").should("eq", "/inventory.html");

    })

})

