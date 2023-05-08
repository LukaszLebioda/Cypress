class LoginSQA {

    // we could use variables for selectors to use them in the methods below:
    // usernameSelector = "input[name='name']";
    // genderSelector = "select#exampleFormControlSelect1";
    // disabledRadioButtonSelector = "input#inlineRadio3";

    getName() {
        return cy.get("input[name='name']").first();
    }

    getGender() {
        return cy.get("select#exampleFormControlSelect1");
    }

    checkRadioButton() {
        return cy.get("input#inlineRadio3");
    }

    clickShop() {
        return cy.contains("a", "Shop").click();
    }

}

export default LoginSQA;