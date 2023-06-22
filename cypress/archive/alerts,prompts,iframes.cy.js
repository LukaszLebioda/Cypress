// ALERTS & PROMPTS

/* 
Cypress closes regular alerts automatically by clicking OK, 
so we have to capture a Cypress event called 'window:alert' 
if we want to validate sth, e.g. text of the alert 
*/

/*
Cypress has a catalogue of BROWSER EVENTS it listens to
e.g. window:alert or window:confirm;
Cypress listens to those events, so we can use cy.on() 
to trigger (fire) and capture the event 
*/

describe("JavaScript ALERTS & PROMPTS", () => {

    beforeEach(() => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    });

    it.skip("regular alert with OK only", () => {
        cy.get("button[onclick='jsAlert()']").click()
        cy.on("window:alert", ( (alert) => {
            expect(alert).to.contain("I am a JS Alert") // to.contain = to.contains = to.be.equal
        }))
        cy.on("window:alert", () => true) // to jest domyślne ustawienie, więc nie trzeba tego pisać (patrz niżej => windows:confirm with "cancel")
        cy.get("p#result").should("have.text", "You successfully clicked an alert")
    });

    it("confirmation alert (with OK $ cancel) - CLICKING OK", () => {
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on("window:confirm", ( (alert) => {
            expect(alert).to.contain("I am a JS Confirm") 
        }))
        cy.on("window:confirm", () => true) // to jest domyślne ustawienie, więc nie trzeba tego pisać (patrz niżej => windows:confirm with "cancel")
        cy.get("p#result").should("have.text", "You clicked: Ok")
    });

    it("confirmation alert (with OK $ cancel) - CLICKING CANCEL", () => {
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on("window:confirm", ( (alert) => {
            expect(alert).to.contain("I am a JS Confirm") 
        }))
        cy.on("window:confirm", () => false) // domyślnie jest TRUE, ale w tym przypadku chcemy, żeby było FALSE (żeby Cypress zamknął prompta cancelem), więć zapis ten jest już konieczny
        cy.get("p#result").should("have.text", "You clicked: Cancel")
    });

    /* this time we have to additionally control the event before clicking on prompt, 
    because otherwise it wouldn't be possible to provide any input */
    it("a prompt", () => {
        cy.window().then((win) => {
            // stub invokes a single method on a yielded element
            // so it invokes window.prompt in our example
            cy.stub(win, "prompt").returns("That's complicated :)");
        })

        cy.get("button[onclick='jsPrompt()']").click();
        cy.get("#result").should("have.text", "You entered: That's complicated :)");
    })

});

// AUTHENTICATED ALERT (from SDET 2022)

describe.skip("authenticated alert", () => {

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

// ------------------------------------------

// IFRAMES

// we have to say Cypress somehow, that want we want to do
// is not part of main html, but of sub-html frame

describe.skip("iframes - parent iframe & child iframe (with Joan Media)", () => {

    beforeEach(() => {
        cy.visit("https://demoqa.com/nestedframes")
    });

    it("iframes", () => {
        cy.get("#frame1").then( function ($iframe) {
            const $body = $iframe.contents().find("body")
            cy.wrap($body).should("have.text", "Parent frame")
            cy.wrap($body).find("iframe").then( function ($childIframe) {
                const $childBody = $childIframe.contents().find("body")
                cy.wrap($childBody).find("p").should("have.text", "Child Iframe")
            })        
        })
    });
});

describe("iframes - typing into iframe (with Joan Media)", () => {
    
    beforeEach(() => {
        cy.visit("https://the-internet.herokuapp.com/iframe")
    });

    it("iframes", () => {
        cy.get("#mce_0_ifr").then( ($iframe) => {
            const $body = $iframe.contents().find("body")
            cy.wrap($body).find("p").type("{ctrl+a}{del}Hello World!") // {ctrl+a} = {selectAll}
        })
        cy.get("#mce_0_ifr").then( ($iframe) => {
            const $body = $iframe.contents().find("body")
            cy.wrap($body).find("p").should("have.text", "Hello World!")
        })
    });
});


// -----------------------------------------------------------

// iframes approach with plugin

// first line: to get auto-suggestions
// second line: to import the plugin

/// <reference types="cypress-iframe" />
import "cypress-iframe" 

describe.skip("handling iFrames with plugin: SDET 2022", () => {

    it("iframe plugin SDET", () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");
        
        // cypress-iframe plugin command to load an iframe
        cy.frameLoaded("iframe#mce_0_ifr");
        // cypress-iframe plugin command to interact with the iframe
        cy.iframe("iframe#mce_0_ifr").clear().type("Approach 2 {ctrl+a}");

        cy.get("[aria-label='Bold']").click(); 
    })

})

describe("handling iFrames with plugin: SQA Rahul Shetty", () => {

    it("iframe plugin SQA", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        
        // cypress-iframe plugin command to load an iframe into cy object
        // to tell cy what it should focus on
        cy.frameLoaded("iframe#courses-iframe");
        // cypress-iframe plugin command to interact with the iframe
        cy.iframe().contains("a", "Mentorship").last().click({force:true}); 

        cy.iframe().find("div.inner-box h1").should("be.visible")
    })

})