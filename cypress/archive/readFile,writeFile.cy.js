// WRITE, READ, VERIFY

// WRITE DATA

// 1st IT creates JSON file in the main catalogue
// 2nd IT creates txt file in the main catalogue

describe("Write data to JSON or text file", () => {
    it("should write data into JSON", () => {
        cy.writeFile("log.json", {name: "Mike", age: 25})
    })
    it("should write data into JSON", () => {
        cy.writeFile("log.txt", "Hello World")
    })
})

// ---------------------------------------------

// READ DATA + ASSERTION

describe("Read data from JSON or text file", () => {
    it("should read and verify data from JSON", () => {
        cy.readFile("log.json").its("age").should("eq", 25)
    })
    it("should read and verify data from text file", () => {
        cy.readFile("log.txt").should("eq", "Hello World")
    })
})

// ---------------------------------------------

// VERIFY DATA + ASSERTION
describe("verifying browser document content", () => {
    it("should read and verify browser document content", () => {
        cy.visit("https://example.com")
        cy.wait(2000) // cypess issue to fix, otherwise it might not work
        cy.document().its("contentType").should("eq", "text/html")
        cy.document().should("have.property", "charset").and("eq", "UTF-8")
    })
})
