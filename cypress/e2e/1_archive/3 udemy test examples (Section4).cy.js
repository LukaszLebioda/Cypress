// SEARCHBOX

describe("searchbox test", () => {

    before( () => {
        cy.visit("http://zero.webappsecurity.com/");
    })

    it("should locate the searchbox ant type sth", () => {
        cy.url().should("contains", "zero");
        cy.get("#searchTerm").type("blablabla {Enter}");
    })
    
    it("should show search results", () => {
        cy.get("h2").contains("Search Results");
    })
})

// FORGOTTEN PASSWORD TEST

describe("password test", () => {

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
        
    })

    it("should submit the email form", () => {
        cy.contains("Send Password").click()
    })

})

// NAVBAR TEST

describe.only("Navbar test", () => {

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


// FEEDBACK FORM

describe("Feedback Form Test", () => {

    before( () =>{
        cy.visit("http://zero.webappsecurity.com/")
        cy.contains("Feedback").click()
    })

    it("should load feedback form", () => {
       cy.get("form").should("be.visible") 
    })

    it("should ill the feedback form", () => {
        cy.get("input#name").clear().type("Lucas")
        cy.get("input#email").clear().type("lucas@email.com")
        cy.get("input#subject").clear().type("need help")
        cy.get("textarea#comment").clear().type("need help with login")
    })
    it("should submit the feedback form", () => {
        cy.get("input").contains("Send Message").click()
    })

    it("should display feedback message", () => {
        cy.get("h3#feedback-title").contains("Feedback")
    })

})

