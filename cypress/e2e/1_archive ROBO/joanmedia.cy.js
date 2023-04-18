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
// ----------------------

// I SKIPPED THE DRAG'N'DROP VIDEO!!!

// ----------------------

// dynamic table challenge
// each() => Iterates through an array or any DOM elements' collection
describe.skip("dynamic table challenge", () => {

    beforeEach( () => {
        cy.visit("http://uitestingplayground.com/dynamictable")
    })

    it("Chrome CPU test", () => {
        // pobieranie wszystkich komórek w tabeli i logowanie wszystkich komórek w tabeli
        cy.get("div[role='row'] span").each( ($cells) => {
            cy.log($cells.text())
        })
        // pobieranie wszystkich komórek w tabeli i logowanie tylko tej zawierającej "Chrome"
        cy.get("div[role='row'] span").each( ($cell) => {
            if($cell.text().includes("Chrome")){
                cy.log($cell.text())
                cy.log(`I have found the cell: ${$cell.text()}`)
            }  
        })
    });
});

