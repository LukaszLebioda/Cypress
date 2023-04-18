// FIXTURES

// {
//     "username": "invalid username",
//     "password": "invalid password"
// }

describe.skip("login with fixtures", () => {

    it("should load the login form", () => {
        cy.visit("http://zero.webappsecurity.com/login.html");
        cy.url().should("include", "login.html")
    })

    it("should try to login with invalid credentials", () => {
        cy.fixture("myFixtures/credentials.json").then( (whatever) => {
            let username = whatever.username;
            let password = whatever.password;

            cy.get("input#user_login").clear().type(username);
            cy.get("#user_password").clear().type(password);
            cy.get("input[type='submit']").click();
            // cy.contains("Login and/or password are wrong.");
            cy.get(".alert").should("contain", "Login and/or password are wrong.")
        })
    })

})

