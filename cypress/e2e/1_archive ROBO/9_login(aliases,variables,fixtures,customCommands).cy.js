// login with NORMAL DATA:
describe("Login with normal data", () => {
    it("should load the page", () => {
        cy.visit("http://zero.webappsecurity.com/login.html", { timeout: 10000 })
        cy.url().should("include", "login.html")
        cy.get("h3").contains("Log in to ZeroBank").should("be.visible")
    })
    it("should fill username", () => {
        cy.get("#user_login").clear()
        cy.get("#user_login").type("Invalid name", { delay: 100 })
    })
    it("should fill password", () => {
        cy.get("#user_password").clear()
        cy.get("#user_password").type("Invalid password", { delay: 100 })
    })
    it("should mark the 'Keep me signed in' checkbox", () => {
        cy.get("input[type='checkbox']").click()
    })
    it("should submit the login form", () => {
        cy.contains("Sign in").click()
    })
    it("should display error message", () => {
        cy.get(".alert")
            .should("be.visible")
            .and("contain", "wrong")
    })
})

// login with ALIASES:
describe("Login with aliases", () => {
    it("should load the page", () => {
        cy.visit("http://zero.webappsecurity.com/login.html", { timeout: 10000 })
        cy.url().should("include", "login.html")
        cy.get("h3").contains("Log in to ZeroBank").should("be.visible")
    })
    it("should fill username", () => {
        cy.get("#user_login").as("username")
        cy.get("@username").clear()
        cy.get("@username").type("ghcghch", { delay: 100 })
    })
    it("should fill password", () => {
        cy.get("#user_password").as("password")
        cy.get("@password").clear()
        cy.get("@password").type("sdgdfhfghgfhnvbjh", { delay: 100 })
    })
    it("should mark the 'Keep me signed in' checkbox", () => {
        cy.get("input[type='checkbox']").click()
    })
    it("should submit the login form", () => {
        cy.contains("Sign in").click()
    })
    it("should display error message", () => {
        cy.get(".alert")
            .should("be.visible")
            .and("contain", "wrong")
    })
})

// login with VARIABLES:
describe("Login with variables", () => {
    it("should load the page", () => {
        cy.visit("http://zero.webappsecurity.com/login.html", { timeout: 10000 })
        cy.url().should("include", "login.html")
        cy.get("h3").contains("Log in to ZeroBank").should("be.visible")
    })

    const username = "#user_login"
    const password = "#user_password"

    it("should fill username", () => {
        cy.get(username).clear()
        cy.get(username).type("ghcghch", { delay: 100 })
    })
    it("should fill password", () => {
        cy.get(password).clear()
        cy.get(password).type("sdgdfhfghgfhnvbjh", { delay: 100 })
    })
    it("should mark the 'Keep me signed in' checkbox", () => {

        const checkBox = cy.get("input[type='checkbox']")
        checkBox.click()
    })
    it("should submit the login form", () => {
        cy.contains("Sign in").click()
    })
    it("should display error message", () => {
        cy.get(".alert")
            .should("be.visible")
            .and("contain", "wrong")
    })
})

// Login with FIXTURES (see: ../fixtures/user.json):
describe("login with fixtures", () => {
    it("should load the page", () => {
        cy.visit("http://zero.webappsecurity.com/login.html", { timeout: 10000 })
        cy.url().should("include", "login.html")
        cy.get("h3").contains("Log in to ZeroBank").should("be.visible")
    })
    it("should try to login using fixtures", () => {
        cy.fixture("user").then((user) => {
            const username = user.username;
            const password = user.password;

            cy.get("#user_login").clear()
            cy.get("#user_login").type(username, {delay:100})
            cy.get("#user_password").clear()
            cy.get("#user_password").type(password, {delay:100})
            cy.get("input[type='checkbox']").click()
            cy.get("input").contains("Sign in").click()
        }) 
    })
})

// Login with CUSTOM COMMAND "LOGIN" (see: ../support/command.js):
// cy.login is from Udemy
// cy.myvisit I created myself
describe("Login with custom command", () => {
    it("should load the page", () => {
        cy.myvisit("http://zero.webappsecurity.com/login.html", "login.html", "h3")
    })
    it("should login", () => {
        cy.login("assdfsdf", "jkhkhjkhjk")
    })
})


