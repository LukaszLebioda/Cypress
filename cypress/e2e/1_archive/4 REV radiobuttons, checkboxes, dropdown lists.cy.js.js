// RADIOBUTTONS
describe("check UI elements 1", () => {
    it("checking radiobuttons", () => {

        // visibility
        cy.visit("https://itera-qa.azurewebsites.net/home/automation");
        cy.get("input#male").should("be.visible");
        cy.get("input#female").should("be.visible");

        // selecting (zamiast "click" może być "check") - sprawdzamy jeden radio button
        cy.get("input#male").click().should("be.checked");
        cy.get("input#female").should("not.be.checked");

         cy.wait(1500) // optional, for learning purposes

         // selecting (zamiast "click" może być "check") - sprawdzamy drugi radio button
         cy.get("input#female").click().should("be.checked");
         cy.get("input#male").should("not.be.checked");
    });
});

// CHECKBOXES

describe("check UI elements 2", () => {
    it("checking checkboxes", () => {

        cy.visit("https://itera-qa.azurewebsites.net/home/automation");
        cy.get("input#monday").should("be.visible");
        
        // selecting single checkbox - monday
        // check = click
        cy.get("input#monday").check().should("be.checked");

        cy.wait(1500) // optional, for learning purposes

        // unselecting single selected checkbox (po ID)
        // uncheck != unclick (unclick doesn't exist)
        cy.get("input#monday").uncheck().should("not.be.checked");

        // selecting all the checkboxes (po klasie)
        cy.get("input.form-check-input[type='checkbox']").check().should("be.checked")

        cy.wait(1500) // optional, for learning purposes

         // unselecting all the checkboxes (po klasie)
         cy.get("input.form-check-input[type='checkbox']").uncheck().should("not.be.checked")

        // selecting first checkbox with FIRST()
        cy.get("input.form-check-input[type='checkbox']").first().check().should("be.checked");
        // selecting last checkbox with LAST()
        cy.get("input.form-check-input[type='checkbox']").last().check().should("be.checked");
        
    });
});

