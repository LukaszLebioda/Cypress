// LOGIN EXAMPLE

/* test sites:
https://opensource-demo.orangehrmlive.com/web/index.php/auth/login 
https://react-redux.realworld.io/#/login?_k=5jewux (qaboxletstest@gmail.com; password123)
*/

/* 
cy.visit 
cy.url 
cy.title 

    cy.reload()
    cy.log("After reload the test is continued")
    cy.pause()
    cy.wait(2000)
    cy.clearCookies({log: true})
    cy.clearLocalStorage("your item", {log: true})

cy.get()
cy.xpath()
*/

describe("login and password inputs", () => {

    before( () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", {timeout: 10000});
    })

    // 3 shoulds: eq = equal, include, contain
    it("should load the page and assert it loaded", () => {
        cy.url().should("include", "orangehrm")
        cy.url().should("contain", "hrm")
        cy.title().should("equal", "OrangeHRM") 
    })

    it("should grab elements on the page with css selectors and xpath selectors", () => {
        cy.get("h5").should("be.visible").contains("Login")
        // cy.xpath("//h5").should("be.visible").and("have.length", 1)
        // cy.xpath("//label[@class='oxd-label']").should("have.length", 2)
    })
    it("should type valid username and password", () => {
        cy.get("input[name='username']").clear().type("Admin", {delay: 100}) // ("Admin {Enter}")
        cy.get("input[name='password']").clear().type("admin123", {delay: 100}) // ("Password {Enter}")
        cy.get("button[type='submit']").click() // albo: cy.contains("Login").click()
        cy.get("img[alt='profile picture']").should("be.visible")
    })
})



  



