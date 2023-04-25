// POM - a separate object repository for storing web elements;
// in POM for every page (e.g. login page) we create a separate file (a class, a page object class);
// and each class file contains corresponding web page elements and actions;

// take a look at the test suite below; there are some code duplications (selectors); 
// and the updating could be problematic; that is why we use POM approach 
// to separately store web elements (e.g. selectors) outside the test file;
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

// create: ./Cypress/PageObjects folder => LoginPage.js file => class Login {......}
// and export this class as a new object of this class: "export const LoginPage = new Login(); ";

// then import the page object class with all the methods in the test suite file:
/* SDET 2022 */ import Login from "../PageObjects/LoginPage.js"
// Joan Media: import { LoginPage } from "../../cypress/PageObjects/LoginPage.js"

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


