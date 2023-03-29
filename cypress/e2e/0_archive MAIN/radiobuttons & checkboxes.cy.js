// RADIOBUTTONS & CHECKBOXES
describe("radiobuttons & checkboxes", () => {

    beforeEach( ()=> {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
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

    it.only("checkboxes", () => {
        //sprawdzanie widoczności wszystkich checkboxów
        cy.get("input#monday").should("be.visible")
        cy.get("input#tuesday").should("be.visible")
        cy.get("input#wednesday").should("be.visible")
        cy.get("input#thursday").should("be.visible")
        cy.get("input#friday").should("be.visible")
        cy.get("input#saturday").should("be.visible")
        cy.get("input#sunday").should("be.visible")

        // wybieramy konkretny checkbox (check = click)
        cy.get("input#monday").check().should("be.checked")
        cy.wait(1500) // tylko żeby zobaczyć, że zaznaczone
        // odznaczamy ten sam checkbox (uncheck = click)
        cy.get("input#monday").uncheck().should("not.be.checked")

        // wybieramy wszystkie checkboxy (nie trzeba robić pętli, ale można)
        cy.get("input.form-check-input[type='checkbox']").check().should("be.checked")
        cy.wait(1500) // tylko żeby zobaczyć, że zaznaczone
        // odznaczamy wszystkie checkboxy (nie trzeba robić pętli, ale można)
        cy.get("input.form-check-input[type='checkbox']").uncheck().should("not.be.checked")

        // wybieramy tylko pierwszy / ostatni checkbox
        // znowu najpierw musimy pobrać wszystkie checkboxy
        cy.get("input.form-check-input[type='checkbox']").first().check().should("be.checked")
        cy.get("input.form-check-input[type='checkbox']").last().check().should("be.checked")

    })
    
})
