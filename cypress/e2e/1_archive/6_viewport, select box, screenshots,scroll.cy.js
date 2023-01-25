
// ---------------------------------

// Select Box:
describe("Select Box", () => {
    it("should load website with select box", () => {
        cy.visit("https://devexpress.github.io/testcafe/example/")
    })
    it("should select an option from select box", () => {
        cy.get("#preferred-interface").select("Both")
        cy.get("#preferred-interface").should("have.value", "Both")
        
        cy.get("#preferred-interface").select("JavaScript API")
        cy.get("#preferred-interface").should("have.value", "JavaScript API")
    })
})

// ---------------------------------

// Screenshots

describe("Screenshots", () => {
    it("full page screenshot", () => {
        cy.visit("https://devexpress.github.io/testcafe/example/")
        // cy.wait - optional; makes sure all the images and animations are laded
        cy.screenshot ({capture: "fullPage"})
    })
    it("single screenshot", () => {
        cy.get("header").screenshot()
        cy.get("#populate").screenshot()
    })
})

// ---------------------------------

// scrollIntoView()

describe("Scroll on the page", () => {
    it("should scroll down and up on the page", () => {
        cy.visit("https://devexpress.github.io/testcafe/example/")
        cy.wait(3000)
        cy.get("#submit-button").scrollIntoView()
        cy.wait(3000)
        cy.get("header").scrollIntoView()
    })
})
