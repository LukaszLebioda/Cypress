// FORGOTTEN PASSWORD TEST

describe.skip("password test", () => {

    before( () => {
        cy.visit("http://zero.webappsecurity.com/")
    })

    it("should click on sign-in button", () => {
        cy.get("#signin_button").click()
    })

    it("should click on the forgotten password link", () => {
        cy.get(".offset3 > a").click()
    })

    it("should fill the email form", () => {
        cy.get("#user_email").type("name@email.com")
        cy.get("input[type='submit']").click()
        // cy.contains("Send Password").click()
    })

    it("should submit the email form", () => {
        // TODO
    })

})

//----------------------------------------------------

// NAVBAR TEST

describe("Navbar trest", () => {

    before( () => {
        cy.visit("http://zero.webappsecurity.com/")
    })

    it("should display 'online banking' content", () => {
        cy.contains("Online Banking").click()
        cy.url("include", "online-banking.html")
        cy.get("h1").should("be.visible")
    })
    it("should display 'feedback' content", () => {
        cy.contains("Feedback").click()
        cy.url().should("include", "feedback.html")
        cy.get("h3").should("be.visible")
    })
    it("should display home page content", () => {
        cy.contains("Zero Bank").click()
        cy.url().should("include", "index.html")
    })

})

