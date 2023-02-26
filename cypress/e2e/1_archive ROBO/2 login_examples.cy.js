// LOGIN EXAMPLE

/* test sites:
https://opensource-demo.orangehrmlive.com/web/index.php/auth/login 
https://react-redux.realworld.io/#/login?_k=5jewux (qaboxletstest@gmail.com; password123)
http://zero.webappsecurity.com/login.html
*/

// LOGIN (variables, aliases, fixtures)

/* FIXTURES Used (./fixtures/credentials.json):
{
    "username_ID": "username",
    "password_ID": "password"
}
*/

describe("Login / Logout test 1", () => {

    let invalidUsername = "some username";
    let invalidPassword = "some password";
    const errorMessage = "Login and/or password are wrong.";
    
    before( () => {
        cy.visit("http://zero.webappsecurity.com/index.html")
        // 3 shoulds do wyboru: eq = equal, include, contain
        cy.url().should("include", "index.html")
        cy.url().should("contain", "index.html")
        cy.title().should("equal", "Zero - Personal Banking - Loans - Credit Cards") 
        cy.get("#signin_button").click()
    })


    it("should try to login with invalid data", () => {
        cy.get("#login_form").should("be.visible")
        cy.get("#user_login").clear().type(invalidUsername, {delay: 100})
        cy.get("#user_password").clear().type(invalidPassword, {delay: 100})
        cy.get("#user_remember_me").check() // optional checkbox
        cy.get("input[name='submit']").click()

    })

    it("should display error message", () => {
        cy.get(".alert-error")
            .should("exist")
            .and("contain", errorMessage)
    })

    it("should log in to the application", () => {

        // fixtures
        cy.fixture("credentials").then(credentials => {
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

describe.skip("Login / Logout test 1", () => {

    let username = "wrong_username";
    // let password = "wrong_password";

    before( () => {
        cy.visit("http://zero.webappsecurity.com/login.html", { timeout: 10000 });
        cy.url().should("include", "webappsecurity.com");
    } )

    after ( () => {
            cy.clearCookies( { log: true } );
            cy.clearLocalStorage("your item",  { log: true } );
    })

    it("should login to the bank account - username", () => {
        // alias example
        cy.get("#user_login").as("whateveraliaswewant");
        cy.get("@whateveraliaswewant").clear().type(username, { delay: 100 });
    })
    it("should login to the bank account - password", () => {
        cy.get("#user_password").clear().type("some password", { delay: 100 });
    })
    it("should login to the bank account - checkbox", () => {
        cy.get("#user_remember_me").click();
    })
    it("should login to the bank account - submit button", () => {
        cy.get("input[type='submit']").click(); // cy.contains("Sign in").click();
    })
    it("should login to the bank account - error message", () => {
        cy.get(".alert-error")
            .should("be.visible")
            .and("contain", "Login and/or password are wrong.");
    })

})
  



