// EXPLICIT ASSERTIONS: expect(), assert()

// expect - used in BDD approach ("Behaviour-driven development")
// assert - used in TDD approach ("Test-driven development")

// UDEMY:
describe("Explicit assertions (Udemy)", () => {
    it("should load the cypress playground page", () => {
        cy.visit("https://example.cypress.io/", { timeout: 10000 })
        cy.url().should("include", "cypress")
        cy.get("h1").contains("Kitchen Sink").should("be.visible")
    })
    it("EXPECT assertions 1", () => {
        expect(true).to.be.true;
        expect(false).to.be.false;
        expect(true).to.be.equal(true);
        expect(true).to.not.equal(false);
        // expect(true).to.be.true;
        // expect(false).to.be.false;
        // expect(true).to.be.a("string");
        // expect(true).to.be.null;
        // expect(true).to.exist;
        // expect(true).not.exist;
    })
    it("EXPECT assertions 2", () => {
        expect(true).to.equal(true)
        expect(5).to.equal(5)
    })
    it("ASSERT assertions", () => {
        assert.equal(4, 4, "not equal 1");
        assert.strictEqual(4, "4", "not equal 2");
        // assert.notEqual
        // assert.isAbove
        // assert.isBelow
        // assert.exists
        // assert.notExists
        // assert.true
        // assert.false
        // assert.isString
        // assert.isNotString
        // assert.isNumber
        // assert.isNotNumber
    })
})

// -----------------------------------------------------------

// SDET (odc. 5, 36:08 - "explicit assertions"):
describe("Implicit assertions (SDET)", () => {
    it("loading the page", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.url().should("contain", "orangehrm"); // contain, include or eq
    })
    it("providing username and password", () => {
        cy.get("input[placeholder='Username']").clear().type("Admin");
        cy.get("input[placeholder='Password']").clear().type("admin123");
        cy.get("button[type='submit']").click();

        // explicit assertions are not built in, they are customized and we can not use them directly; we have to crate a function to check, whether the username is displayed after having logged in succesfully
        // moreover the username will differ depending on the user that is logging in
        
        // so first we create a global variable (let expectedName = "xyz";);
        // then we capture a paragraph with a username (".oxd-userdropdown-name");
        // and then we pass this element as a parameter to a function (e.g. "userParagraph");
        // next within the function we create another variable (let actualName);
        // and set this variable equal to our parameter with a text method (userParagraph.text();
        // finally we compare actualName with expectedName;

        let expectedName = "xyz"; // actual username goes here
        cy.get(".oxd-userdropdown-name").then( (userParagraph) =>{

            let actualName = userParagraph.text();

            // BDD style assertions:
            expect(actualName).to.equal(expectedName);
            expect(actualName).to.not.equal(expectedName);

            // TDD style assertions:
            assert.equal(actualName, expectedName);
            assert.notEqual(actualName, expectedName);


        })


    })
})