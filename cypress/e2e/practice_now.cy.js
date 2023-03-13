describe("Login / Logout test", () => {
    
    let invalidUsername = "some username";
    let invalidPassword = "some password";
    const errorMessage = "Login and/or password are wrong.";
    
    before( () => {
        cy.visit("http://zero.webappsecurity.com/index.html")
        cy.url().should("include", "index.html")
        cy.title().should("equal", "Zero - Personal Banking - Loans - Credit Cards") 
        cy.get("#signin_button").click()
    })

    // it("should create json file with login data", () => {
    //     cy.writeFile("credentials.json", { username_ID: "username", password_ID: "password"});
    // })

    it("should try to login with invalid data", () => {
        cy.get("#login_form").should("be.visible")
        cy.get("#user_login").clear().type(invalidUsername, {delay: 100})
        cy.get("#user_password").clear().type(invalidPassword, {delay: 100})
        cy.get("#user_remember_me").check() // optional
        cy.get("input[name='submit']").click()
    })

    it("should display error message", () => {
        cy.get(".alert-error")
            .should("exist")
            .and("contain", errorMessage)
    })

    it("should login to the application", () => {

        // fixtures
        cy.fixture("myFixtures/credentials").then(credentials => {
            const username = credentials.username_ID;
            const password = credentials.password_ID; 

            // aliases
            cy.get("#user_login").as("loginInput")
            cy.get("@loginInput").clear().type(username, {delay: 100})
            cy.get("#user_password").as("passwordInput")
            cy.get("@passwordInput").clear().type(password, {delay: 100})

            cy.get("#user_remember_me").check() // optional
            cy.get("input[name='submit']").click()
        })

        cy.get("ul.nav-tabs").should("be.visible")
        
    })

    it("should logout from the application", () => {
        cy.contains("username").click()
        cy.get("#logout_link").click()
        cy.url().should("include", "index.html")
    })

})