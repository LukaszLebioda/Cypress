describe.skip("basics", () => {

    beforeEach( () => {
        cy.visit("http://uitestingplayground.com/textinput");
    })

    // THEN() => "Enables you to work with the subject yielded from the previous command"
    it("URL + TITLE / should vs then", () => {
        cy.url().should( (urlParam) => {
            expect(urlParam).to.contains("/textinput");
        })
        cy.title().then( (titleParam) => {
            cy.log(`The title is: ${titleParam}`)
            expect(titleParam).to.be.equal("Text Input")
        }) 
    })

    it("CONTAINS, FIND", () => {
        cy.visit("http://uitestingplayground.com/dynamicid")
        cy.contains("Button with Dynamic ID").should("have.class", "btn-primary")
        cy.get("div").find("button").should("have.text", "Button with Dynamic ID")
        cy.get("button[type='button']").should("have.attr", "type")
    })

    it("XPATH", () => {
        cy.visit("http://uitestingplayground.com/classattr")
        
        cy.xpath("//pre[@class=' language-html']").should("contain.text", "button")
        cy.xpath("//*[text()='Correct variant is']").should("contain.text", "Correct")
        cy.xpath("//button[contains(concat(' ', normalize-space(@class), ' '), ' btn-primary ')]").should("have.css", "background-color", "rgb(0, 123, 255)")
    })

})

// po kliknięciu w przycisk generuje się paragraf, ale dopiero po 15 sekundach
// albo progress bar ładuje się jeszcze dłużej
// zatem możemy do naszego kodu wstrzyknąć fragment konfiguracji z cypress.config.js
// albo użyć opcji timeout w cy.get()
Cypress.config("defaultCommandTimeout", 16000)
describe.skip('Retry-ability of Cypress', () => {
    it('Client delay button', () => {
        cy.visit("http://uitestingplayground.com/clientdelay")
        cy.get("button#ajaxButton").click().then( (el) => {
            let mytext = el.text()
            cy.log(mytext)
        })
        cy.get("p.bg-success").should("have.text", "Data calculated on the client side.")
    });
    it("Progress bar challenge", () => {
        cy.visit("http://uitestingplayground.com/progressbar")
        cy.get("button#startButton").click()
        cy.get("#progressBar", {timeout: 60000}).should("have.text", "100%")
    })
});

// there is no cy.hover() in Cypress
// there are workarounds:
// cy.get('.menu-item').trigger('mouseover') => triggers a js event (if there is any)
// cy.get('.hidden').invoke('show').click() => invokes a jQuery function on the yielded element
describe("Mouseover actions", () => {
    it.skip("Hover - Cypress workarounds", () => {
        cy.visit("http://uitestingplayground.com/mouseover")
        cy.xpath("//div//a[@title='Click me']").trigger("mouseover")
        cy.xpath("//div//a[@title='Click me']").invoke("show").click()
    });
    it("Cypress-real-events plugin", () => {
        cy.visit("http://uitestingplayground.com/mouseover")
        cy.contains("Click me").realHover();
    })
});