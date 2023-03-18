// FIXTURES

// {
//     "validUsername": "username",
//     "validPassword": "password",
//     "invalidUsername": "invalid username",
//     "invalidPassword": "invalid password"
// }

// contain.text?
// assertion url / location / pathname?
// readfile, writefile

describe("login with fixtures", () => {

    beforeEach( () => {
        cy.visit("http://zero.webappsecurity.com/login.html");
        cy.url().should("include", "login.html");
    })

    it("should try to login with valid credentials", () => {
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

