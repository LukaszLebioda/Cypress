// przykład od Automation Step by Step (bez "static") (odc. 2, od ok. 20 minuty)
// eksportujemy klasę "LoginPage" do naszego pliku, w tym przypadku do "13_abstraction with classes.cy.js";

// moglibyśmy stworzyć wewnątrz kasy jedną funkcję do obsługi inputa USERNAME, inputa PASSWORD i BUTTONA sumbitującego
// ale w naszym przykładzie stworzymy trzy odrębne funkcje
// wykorzystamy też parametry "username" i "password", które poślemy funkcji przy jej wywoływaniu w teście
// oraz przechowamy nasze locators w zmiennych
// zamiast używać hardcoded data jak w poniższych, zakomentowanych przykładach

export class LoginPage {

    username_textbox = "//input[@placeholder='Username']";
    password_textbox = "//input[@placeholder='Password']";
    login_button = "//button[normalize-space()='Login']";

    enterUsername(username) {
        cy.xpath(this.username_textbox).type(username);
    }
    enterPassword(password) {
        cy.xpath(this.password_textbox).type(password);
    }
    clickLoginButton() {
        cy.xpath(this.login_button).click();
    }

    // enterUsername(username) {
    //     cy.xpath("//input[@placeholder='Username']").type(username);
    // }
    // enterPassword(password) {
    //     cy.xpath("//input[@placeholder='Password']").type(password);
    // }
    // clickLoginButton() {
    //     cy.xpath("//button[normalize-space()='Login']").click();
    // }

    // it is better to use variables passed to the function:
    // enterUsername(username) {
    //     cy.xpath("//input[@placeholder='Username']").type(username);
    // }
    // enterPassword(password) {
    //     cy.xpath("//input[@placeholder='Password']").type(password);
    // }
    // clickLoginButton() {
    //     cy.xpath("//button[normalize-space()='Login']").click();
    // }

}