describe("when navigate to the mountain weather page on my mobile, viewport: 393 x 851", () => {

    let mountainName = "Gerlach";

    it("should visit the page and make sure it loaded", () => {
        cy.pause()
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
        cy.get('.forecast-table__table-wrapper')
            .scrollIntoView()
            .should("be.visible")
    })
})
