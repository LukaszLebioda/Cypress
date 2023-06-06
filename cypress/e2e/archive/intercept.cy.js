/* API INTERCEPTION

- enter URL; in devtools - network => click recording button + preserve log checkbox; inspect headers;
- cy.intercept() zaraz pod cy.visit(); 2 params: http method (optional) + request url (devtools - network)
- establish an ALIAS for the intercepted API => e.g. linkStatus;
- get DOM element which triggers the request (button or link) and click it;
- cy.wait("@linkStatus") => it's going to wait until GET is sent and server response is intercepted;
- ROUTE appears in the test log (before TEST BODY)
- use cy.log(req) to inspect devtools - console in Cypress GUI; it returns req as an Object;
- this req-object with some properties, including RESPONSE, we can interact with and assert
*/

describe.skip("Intercepting (spying) API requests", () => {

    beforeEach( () => {
        cy.visit("https://demoqa.com/links")
        cy.intercept("GET", "https://demoqa.com/created").as("linkStatus")
    })

    it("intercepting API after clicking a link", () => {
        cy.get("a#created").click()
        cy.wait("@linkStatus").then( (req) => {
            cy.log("Intercepted request: ", req)
            expect(req.response.statusCode).to.eq(201)
            expect(req.response.statusMessage).to.be.equal("Created")
        })
    });

})