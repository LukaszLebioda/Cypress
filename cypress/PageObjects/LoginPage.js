// Page Object Class:
class Login {

    // variables for selectors used in methods below
    usernameSelector = "input#userName";
    passwordSelector = "input#password";
    loginButtonSelector = "button#login";
    invalidLoginMessageSelector = "p#name";

    visitMethod() {
        cy.visit("https://demoqa.com/login")
    }

    // seperated methods
    setUsername(username) {
        cy.get(this.usernameSelector).clear().type(username)
    }
    setPassword(password) {
        cy.get(this.passwordSelector).clear().type(password)
    }
    clickButton() {
        cy.get(this.loginButtonSelector).click()
    }

    /* but we could do this (1 method only):
    setLoginData(username, password) {
        cy.get(this.usernameSelector).clear().type(username)
        cy.get(this.passwordSelector).clear().type(password)
        cy.get(this.loginButtonSelector).click()
    }
    */

    verifyLogin() {
        cy.url().should("contain", "profile");
        cy.get("div[class='main-header']").should("have.text", "Profile");
        // cy.get("#userName-value").should("have.text", "test");
    }

}
/* SDET 2022, SQA Step By Ste */ export default Login;
/* JoanMedia */ // export const LoginPage = new Login(); 
