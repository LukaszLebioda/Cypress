// ENVIRONMENTAL VARIABLES

/* 
a piece of code injected into e2e object in Cypress.config.js:

env: {
      demoVariable: "Hello from Cypress.config.js file!",
      demoWebsite: "https://www.globalsqa.com/"
    }

in the scripts (package.json) or in CLI command 
we can temporarily overwrite this with --env flag like this:
"cy:open": "cypress open --env demoVariable=some_new_text_to_be_logged_out" (no blank spaces)

*/

describe.skip("Environmental Variables", () => {
    it("should load the page", () => {
        cy.log(Cypress.env("demoVariable"))
    });
    it("hamburger menu should be visible on mobile only", () => {
        cy.visit(`${Cypress.env("demoWebsite")}/angularjs-protractor-practice-site/`)
        cy.get(".mobile_menu_toggler").should("not.exist")
        cy.viewport(300, 400)
        cy.get("#mobile_menu_toggler").should("be.visible")
        cy.get("#mobile_menu_toggler").click() // dblclick() or rightclick()
        cy.get('#mobile_menu > :nth-child(1) > .menu-item-home > a').should("be.visible")
    })
});