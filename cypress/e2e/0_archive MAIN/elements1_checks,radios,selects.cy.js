// RADIOBUTTONS & CHECKBOXES & SELECT BOXES

describe.skip("radiobuttons & checkboxes", () => {

    beforeEach( ()=> {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
    })

    it("checkboxes", () => {
        //sprawdzanie widoczności wszystkich checkboxów
        cy.get("input#monday").should("be.visible")
        cy.get("input#tuesday").should("be.visible")
        cy.get("input#wednesday").should("be.visible")
        cy.get("input#thursday").should("be.visible")
        cy.get("input#friday").should("be.visible")
        cy.get("input#saturday").should("be.visible")
        cy.get("input#sunday").should("be.visible")

        // cy.contains("You have selected").should("be.visible")
        // cy.get("#someElement").should("have.text", "some text")

        // wybieramy konkretny checkbox (check = click)
        cy.get("input#monday").check().should("be.checked") // check({force: true}) if checkbox has css property display:none
        cy.wait(1500) // tylko żeby zobaczyć, że zaznaczone
        // odznaczamy ten sam checkbox (uncheck = click)
        cy.get("input#monday").uncheck().should("not.be.checked")

        // wybieramy wszystkie checkboxy po klasie
        cy.get("input.form-check-input[type='checkbox']").check().should("be.checked")
        cy.wait(1500) // tylko żeby zobaczyć, że zaznaczone
        // odznaczamy wszystkie checkboxy 
        cy.get("input.form-check-input[type='checkbox']").uncheck().should("not.be.checked")

        // wybieramy tylko pierwszy / ostatni checkbox
        // znowu najpierw musimy pobrać wszystkie checkboxy po klasie
        cy.get("input.form-check-input[type='checkbox']").first().check().should("be.checked")
        cy.get("input.form-check-input[type='checkbox']").last().check().should("be.checked")

        // inny sposób na wybranie pierwszego i ostatniego (po indeksie)
        cy.get("input[type='checkbox']").eq(0).should("be.checked")
        cy.get("input[type='checkbox']").eq(1).should("be.checked")
    })

    it("radiobuttons", () => {
        // sprawdzamy widoczność wszystkich radiobuttonów "gender"
        cy.get("input#female").should("be.visible")
        cy.get("input#male").should("be.visible")
        cy.get("input#other").should("be.visible")

        // wybieramy konkretny radiobutton (check = click)
        // drugi radiobutton nie może być zaznaczony
        cy.get("input#female").check().should("be.checked")
        cy.get("input#male").should("not.be.checked")

        // i w drugą stronę
        cy.get("input#male").check().should("be.checked")
        cy.get("input#female").should("not.be.checked")
    })

})

describe("select boxes", () => {
    it("select boxes", () => {
        cy.visit("https://devexpress.github.io/testcafe/example/")

        // getting the select box and selecting something
        cy.get("select#preferred-interface").select("Both");
        cy.get("select#preferred-interface").should("have.value", "Both");
        cy.wait(2000);
        cy.get("select#preferred-interface").select("JavaScript API").should("have.value", "JavaScript API");
    })
});



