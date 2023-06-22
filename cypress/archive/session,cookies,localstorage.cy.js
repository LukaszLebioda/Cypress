// LOGIN SCENARIO with cy.session() and cy.cookies()
// this time login is a part of beforeEach and is wrapped in cy.session()
// so we can share the login session with every "it" (in the logs there will be session created and restored)

// it's recommended however to put all the session in the global beforeEach hook
// and leave beforeEach hook locally with cy.visit() only 

Cypress.session.clearAllSavedSessions(); // recommended 

describe("Login - session (preserving cookies)", () => {

    beforeEach( () => {

        // it allows to preserve cookies and local storage data
        cy.session("mySession", () => {
    
            cy.visit("https://demoqa.com/login");
        
            cy.get("input#userName").clear().type("test")
            cy.get("input#password").clear().type("Test1234*")
            cy.get("button#login").click()
    
        })
    
    })

    // it("check if session was saved", () => {
    //     cy.visit("https://demoqa.com/login");
    // })

    // it("double check if session was saved", () => {
    //     cy.visit("https://demoqa.com/login");
    // })

    it("logs in correctly", () => {
        cy.contains("label#userName-value", "test")
    })

    // normally there are some cookies and we can see them in the console
    // this time however I couldn't make it work (I can't login actually, I don't know why)
    it("counts the cookies", () => {
        cy.getCookies().then( (cookies) => {
            cy.log("Cookies: ", cookies)
            expect(cookies).to.have.length(0)
        })
    })

    // this is also supposed to be a global after hook!
    after( () => {
        cy.clearCookies()
        // and we're asserting there are no cookies left
        cy.getCookies().then( (cookies) => {
            cy.log("Cookies: ", cookies)
            expect(cookies).to.have.length(0)
        })
    })

})

// ---------------------------------------

// SETTING AND GETTING ITEMS LOCAL STORAGE WITH CUSTOM COMMANDS
// we can set & get tokens (like in the example below, user id, email etc.)

/* CUSTOM COMMANDS USED (FROM LAMBDA):

// setting, so both key and value are needed

Cypress.Commands.add("setLocalStorage", (key, value) => {
    cy.window().then( (win) => {
        win.localStorage.setItem(key, value)
    })
})

// getting only by the item's key

Cypress.Commands.add("getLocalStorage", (key) => {
    cy.window().then( (win) => {
        win.localStorage.getItem(key)
    })
})

*/
const tokenValue = "abcd123";

describe.skip("LAMBDA - with custom commands", () => {

    before( () => {
        cy.visit("https://example.cypress.io/commands/actions")
    })

    it("sets and gets a token in/from local storage", () => {
        cy.setLocalStorage("token", tokenValue)
        cy.getLocalStorage("token").should("eq", tokenValue)
    });
    
});

describe("my try - no custom commands used", () => {
    it("sets & gets a token in / from local storage", () => {
        cy.visit("https://coding40.eu")
        cy.window().then( (wind) => {
            wind.localStorage.setItem("Lukash", 40)
        })
        cy.window().then( (wind) => {
            wind.localStorage.getItem("Lukash")
        })
    });

});




 