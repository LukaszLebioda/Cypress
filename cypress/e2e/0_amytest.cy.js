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
  
  