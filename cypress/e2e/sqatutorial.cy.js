
describe("handling child windows", () => {
  
    // we use jQuery prop() method to get the value of a certain property = attribute
    it("handles child windows", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice")
        cy.get("a#opentab").then( (attr) => {
            let url = attr.prop("href")
            cy.log(url)
            cy.visit(url)
        })
    })
  
});


describe.skip("LAMBDA", () => {

    // we can click on ITS("BODY") in the time-travel CY GUI and inspect it
    // to see the whole request and its body printed out
    before( () => {
        cy.request("https://api.spacexdata.com/v3/missions").its("body").should("have.length", 10)
    })

    it("pulls data from a fixture", () => {
        cy.visit("https://example.cypress.io/commands/actions")
        cy.fixture("lambda.json").then( (fix) => {
            cy.log("data: ", fix)
        })
    });
});




 