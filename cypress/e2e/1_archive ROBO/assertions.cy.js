// IMPLICIT ASSERTIONS (in-build assetions): should(), and()

describe("Implicit assertions", () => {
    it("should load the cypress playground page", () => {
        cy.visit("https://example.cypress.io/", { timeout: 10000 })

        cy.url().should("include", "cypress")
                .and("eq", "https://example.cypress.io/")
                .and("contain", "cypress.io")

        cy.title().should("not.include", "okawango")
                .and("not.eq", "bajobongo")

        cy.get("h1").contains("Kitchen Sink").should("be.visible")
        cy.get("h1").contains("Kitchen Sink").should("exist")

        cy.xpath("//ul").xpath("./li").should("have.length", 4)
    })
    it("should click on 'get' category", () => {
        cy.contains('get').click()
    })
    it("should click on button1", () => {
        cy.get('#query-btn')
            .should("contain", "Button")
            .and("have.class", "query-btn btn btn-primary")
            // .should("have.attr")
            // .should("have.text")
            // .should("have.html")
            .and("be.visible")
            .and("be.enabled")
            // .should("have.length", 2)
            // .should("be.disabled")
            // .should("be.selected")
            // .should("be.focused")
            // .should("have.focus")
            // .should("be.empty")
    })
})

// ---------------------------------------

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
        expect(true).to.equal(true)
        expect(5).to.equal(5)
        expect(true).to.be.equal(true);
        expect(true).to.not.equal(false);
        // expect(true).to.be.true;
        // expect(false).to.be.false;
        // expect(true).to.be.a("string");
        // expect(true).to.be.null;
        // expect(true).to.exist;
        // expect(true).not.exist;
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

// SDET 2022:
// if we want to make EXPLICIT assertions, first we have to
// capture an element and store in into a variable
// then() we can work with it
describe("Implicit assertions (SDET)", () => {
    it("loading the page", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.url().should("contain", "orangehrm"); 
    })
    it("providing username and password", () => {
        cy.get("input[placeholder='Username']").clear().type("Admin");
        cy.get("input[placeholder='Password']").clear().type("admin123");
        cy.get("button[type='submit']").click();

        // a function to check username display
        let expectedName = "xyz"; 
        cy.get(".oxd-userdropdown-name").then( (x) =>{

            let actualName = x.text();

            // BDD style assertions:
            expect(actualName).to.equal(expectedName);
            expect(actualName).to.not.equal(expectedName);

            // TDD style assertions:
            assert.equal(actualName, expectedName);
            assert.notEqual(actualName, expectedName);


        })


    })
})