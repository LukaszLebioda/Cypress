// LOGIN SCENARIO with cy.session() and cy.cookies()
//  this time login is a part of beforeEach and is wrapped in cy.session()
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






 