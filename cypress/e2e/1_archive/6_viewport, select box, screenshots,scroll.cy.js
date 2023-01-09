// albo with & heigth
// albo device name

describe("Viewport test", () => {
    it("720p (HD)", () => {
        cy.viewport(1280, 720) // width and height of HD resolution
        cy.visit("http://www.example.com")
        cy.wait(3000)
    })
    it("1080p (Full HD)", () => {
        cy.viewport(1980, 1080) // of Full HD
        cy.visit("http://www.example.com")
        cy.wait(3000)
    })
    it("iPhone X", () => {
        cy.viewport("iphone-x")
        cy.visit("http://www.example.com")
        cy.wait(3000)
    })
    it("Macbook 15", () => {
        cy.viewport("macbook-15")
        cy.visit("http://www.example.com")
        cy.wait(3000)
    })
})

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
