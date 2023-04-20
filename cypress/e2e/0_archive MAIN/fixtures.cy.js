// FIXTURES

/*
{
    "validUsername": "username",
    "validPassword": "password",
    "invalidUsername": "fdkjndjfgbfbb",
    "invalidPassword": "457885440202"
}
*/

describe("login with fixtures", () => {

    beforeEach( () => {
        cy.visit("http://zero.webappsecurity.com/login.html")
    })

    it("logs json data from fixture", () => {
        cy.fixture("myFixtures/credentials").then( (loggedData) => {
            cy.log("Data: ", loggedData)
        })
    })

    it("updates json data from fixture", () => {
        cy.fixture("myFixtures/credentials").then( (loggedData) => {
            loggedData.invalidUsername = "buzzzzzzzzzz........."
            cy.log("Updated data: ", loggedData)
        })
    })

    it("tries to login with invalid credentials", () => {
        cy.fixture("myFixtures/credentials.json").then( (data) => {

            let username = data.invalidUsername;
            let password = data.invalidPassword;

            cy.get("input#user_login").clear().type(username);
            cy.get("#user_password").clear().type(password);
            cy.get("input[type='submit']").click();
            cy.get(".alert").should("contain", "Login and/or password are wrong.")
        })
    })

})