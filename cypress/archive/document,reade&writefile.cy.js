// DOCUMENT
describe("title, contentType, charset", () => {

    before( () => {
        cy.visit("http://uitestingplayground.com/")
    })

    it("contentType + charset assertions", () => {
        cy.document().its("contentType").should("equal", "text/html");
        cy.document().should("have.property", "charset").and("equal", "UTF-8");
    });

    // if expect is used => should() or then()
    // if cy command is used => only then()
    it("title - with document object commands", () => {
        cy.document().then( (doc) => {
            cy.log(doc)
        })
        cy.document().should(doc => {
            const titleContent = doc.title;
            expect(titleContent).to.equal("UI Test Automation Playground")
        })
    });
    it("title - with direct cypress commands", () => {
        cy.title().then(titleText => {
            expect(titleText).to.eql("UI Test Automation Playground")
        })
        // or just:
        cy.title().should("eq", "UI Test Automation Playground")
    });
});


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