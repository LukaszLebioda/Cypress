describe("when navigate to the mountain weather page", () => {

    let mountainName = "Gerlach";

    it("should visit the page and make sure it loaded", () => {
        cy.visit("https://www.mountain-forecast.com/", {timeout:10000});
        cy.title("include", "Mountain Weather");
        cy.url().should("include", "mountain-forecast")
                .and("eq", "https://www.mountain-forecast.com/")
                .and("contain", "mountain-forecast.com");
    })
    it("should make sure it loaded even more", () => {
        cy.get("img[alt='Mountain-Forecast']").should("be.visible");
        cy.get("a.active").should("exist");
    })
    it("should click on 'Weather maps' button", () => {
        cy.get("a").contains("Weather maps").click({force:true});
        cy.get("div#MM_search").should("be.visible");
    })
    it("should type in mountain name and display forecast table", () => {
        cy.get("#location").as("myFirstAlias")
        cy.get("@myFirstAlias").clear();
        cy.get("@myFirstAlias").type(`${mountainName} {Enter}`, {delay:100});
    })
    it("should scroll down to weather forecast table", () => {
        cy.get(".forecast-table-graph")
            .scrollIntoView()
            .should("be.visible");
    })
    it("should display the weather table on my mobile resolution", () => {
        cy.viewport(393, 851)
    })
   
})


// // working with inputs (with delay option):

// describe("Working with inputs", () => {
//     it("should fill username", () => {
//         cy.get("#user_login").clear()
//         cy.get("#user_login").type("Invalid name", { delay: 100 })
//     })
//     // // alias version
//     // it("should fill password", () => {
//     //     cy.get("#user_login").as("username")
//     //     cy.get("@username").clear()
//     //     cy.get("@username").type("Invalid password", { delay: 100 })
//     it("should fill password", () => {
//         cy.get("#user_password").clear()
//         cy.get("#user_password").type("Invalid password", { delay: 100 })
//     })
//     // // alias version
//     // it("should fill password", () => {
//     //     cy.get("#user_password").as("password")
//     //     cy.get("@password").clear()
//     //     cy.get("@password").type("Invalid password", { delay: 100 })
//     // })
//     it("should mark the 'Keep me signed in' checkbox", () => {
//         cy.get("input[type='checkbox']").click()
//     })
//     it("should submit the login form", () => {
//         cy.contains("Sign in").click()
//     })
//     it("should display error message", () => {
//         cy.get(".alert").should("be.visible")
//             .and("contain", "Login and/or password are wrong")
//     })
// })