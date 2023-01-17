/* 
cy.visit 
cy.url 
cy.title 

cy.reload()
cy.log()
cy.pause()
cy.wait()

cy.get()
cy.xpath()
*/

describe("login and password inputs", () => {

    it("should load the page and assert it loaded", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", {timeout: 10000})

        // cy.reload()
        // cy.log("After reload the test is continued")
        // cy.pause()
        // cy.wait(2000)

        cy.url().should("include", "orangehrm")
        cy.title().should("eq", "OrangeHRM") 
    })

    it("should grab elements on the page with css selectors and xpath selectors", () => {
        cy.get("h5").should("be.visible").contains("Login")

        cy.xpath("//h5").should("be.visible").and("have.length", 1)
        cy.xpath("//label[@class='oxd-label']").should("have.length", 2)
    })


})




  



