// ALERTS & PROMPTS

/* there are 4 js alerts & prompts: 
1) regular (some text + OK button)
2) confirmation (some text + OK button + cancel button)
3) prompt (some text + text input field + OK button + cancel button)
4) authenticated alert (some text, username input, password input, login + cancel buttons)
*/

describe("regular alert, confirm alert, prompt", () => {

    it("should load the alert & prompt practice page", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.url().should("include", "javascript_alerts");  
    })

    /* Cypress closes regular alerts automatically by clicking OK, 
    so we have to capture a Cypress event called 'window:alert' 
    if we want to validate sth, e.g. text of the alert */
    it("should interact with a regular alert - OK automatically clicked", () => {
        cy.get("button[onclick='jsAlert()']").click();

        cy.on("window:alert", (t) => {
            expect(t).to.contains("I am a JS Alert");
        })

        cy.get("#result").should("have.text", "You successfully clicked an alert");
    })

    /* Cypress closes confirmation alerts automatically by clicking OK, 
    so we have to capture a Cypress event called 'window:confirm' 
    if we want to validate sth, e.g. text of the confirm alert
    or to see what happens if "cancel" button is clicked */
    it("should interact with a confirmation alert 1 - OK automatically clicked", () => {
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on("window:confirm", (t) => {
            expect(t).to.contains("I am a JS Confirm");
        })

        cy.get("#result").should("have.text", "You clicked: Ok");
    })
    it("should interact with a confirmation alert 1 - CANCEL manually clicked", () => {
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on("window:confirm", (t) => {
            expect(t).to.contains("I am a JS Confirm");
        })

        // to make Cypress close with CANCEL (default: true == closing with OK)
        cy.on("window:confirm", () => false) 

        cy.get("#result").should("have.text", "You clicked: Cancel");
    })

    /* this time we have to additionally control the event before clicking on prompt, 
    because otherwise it wouldn't be possible to provide any input */
    it("should interact with a prompt alert", () => {
        cy.window().then((win) => {
            cy.stub(win, "prompt").returns("My Gosh, that's complicated...");
        })

        cy.get("button[onclick='jsPrompt()']").click();

        cy.get("#result").should("have.text", "You entered: My Gosh, that's complicated...");
    })

})

describe.only("authenticated alert", () => {

    it("should interact with an authenticated alert - method 1 (with JSON)", () => {
        cy.visit("https://the-internet.herokuapp.com/basic_auth",   { auth: 
                                                                      { 
                                                                        username: "admin",      
                                                                        password: "admin"
                                                                      } 
                                                                    });

        cy.get("div[class='example'] p").should("have.contain", "Congratulations");
    })

    it("should interact with an authenticated alert - method 2 (URL injection)", () => {
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");

        cy.get("div[class='example'] p").should("have.contain", "Congratulations");
    })

})