// POM approach - creating a separate object repository for storing web elements used u=int the test;
// in POM for every page (e.g. login page, adding to cart page) we create a separate file 
// (a class, a page object class) and each file (class) contains corresponding web elements and actions;

// take a look at the test suite below; there are some code duplications (selectors); 
// and the updating & maintaining could be problematic; that is why we use POM approach 
// to separately store web elements (e.g. selectors) outside the test file to handle them;
describe.skip("no POM involved", () => {

    beforeEach(() => {
        cy.visit("https://demoqa.com/login")
    });

    it("success login scenario", () => {
        cy.get("#userName").type("test");
        cy.get("#password").type("Test1234*");
        cy.get("#login").click();

        cy.url().should("contain", "profile");
        cy.get("div[class='main-header']").should("have.text", "Profile");
        cy.get("#userName-value").should("have.text", "test");
    });

    it("failure login scenario", () => {
        cy.get("#userName").type("wrongUser");
        cy.get("#password").type("wrongPassword");
        cy.get("#login").click();

        cy.url().should("contain", "profile");
        cy.get("div[class='main-header']").should("have.text", "Profile");
        cy.get("#userName-value").should("have.text", "test");
    });

});

/* 
1) create a folder, e.g.: ./Cypress/PageObjects; 
2) create a file, e.g.: LoginPage.js (for one specific page); 
3) in this file create one class, e.g.: Login {......}
*/

/* 
4a) Udemy JoanMedia approach:
- export this class as a new object of this class;
- and store it into variable: "export const LoginPage = new Login()";
- this is the way to instantiate the new object right away;
- finally import this class at the top of Your test suite:
- import { LoginPage } from " '../../cypress/PageObjects/LoginPage.js' ";
*/

/*
4b) however another approach is possible (Youtube SDET 2022, Youtube SQA Step By Step);
- "export default Login" only (no variables, no instantiated objects);
- and then: "import Login from '../PageObjects/LoginPage.js' ";
- but then we have to instantiate the object within the test suite: 
- like this: "const LoginPage = new Login();"
*/

import Login from "../PageObjects/LoginPage.js"

describe("with POM", () => {

    beforeEach(() => {
        LoginPage.visitMethod()
    });

    const LoginPage = new Login();

    it("success login scenario", () => {
        LoginPage.setUsername("test");
        LoginPage.setPassword("Test1234*");
        LoginPage.clickButton();
        LoginPage.verifyLogin();
    });

    it.skip("failure login scenario", () => {
        LoginPage.setUsername("test");
        LoginPage.setPassword("Test1234*");
        LoginPage.clickButton();

        cy.url().should("contain", "profile");
        cy.get("div[class='main-header']").should("have.text", "Profile");
        cy.get("#userName-value").should("have.text", "test");
    });

});


