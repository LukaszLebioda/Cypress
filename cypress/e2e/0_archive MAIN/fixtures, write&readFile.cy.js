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
        cy.fixture("myFixtures/credentials.json").then((credentials) => {
            let username = credentials.username;
            let password = credentials.password;

            cy.get("input#user_login").clear().type(username);
            cy.get("#user_password").clear().type(password);
            cy.get("input[type='submit']").click();
            // cy.contains("Login and/or password are wrong.");
            cy.get(".alert").should("contain", "Login and/or password are wrong.")
        })
    })

})

// READ FILE & WRITE FILE

describe.skip("Write / Read data into JSON file / txt file", () => {

    it("should write data into JSON file", () => {
        cy.writeFile("test.json", { name: "Mike", age: 25 })
    })

    it("should read & verify data from JSON file", () => {
        cy.readFile("test.json").its("age").should("eq", 25);
    })

    it("should write data into text file", () => {
        cy.writeFile("test.txt", "Hello World!");
    })

    it("should read & verify data from txt file", () => {
        cy.readFile("test.txt").should("eq", "Hello World!");
    })

})