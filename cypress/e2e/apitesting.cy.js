// cy.request(url) = fetch(url)

describe.skip("API - basic http requests' testing", () => {

    it("GET request", () => {
        cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1").then( (res) => {
            cy.log("response: ", res)
            expect(res.status).to.equal(200)
            expect(res.statusText).to.equal("OK")
        })
    })

    it("POST request", () => {
        cy.request("POST", "https://jsonplaceholder.typicode.com/posts", {
            "userId": 1,
            "id": 1,
            "title": "my first cypress post",
            "completed": false
        }).then( (res) => {
            cy.log("response: ", res)
            expect(res.status).to.equal(201)
            expect(res.statusText).to.equal("Created")
        })
    })

    it("PUT request", () => {
        cy.request("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
            "userId": 1,
            "id": 1,
            "title": "my second cypress post",
            "completed": false
        }).then( (res) => {
            cy.log("response: ", res)
            expect(res.status).to.equal(200)
            expect(res.statusText).to.equal("OK")
        })
    })

    it("DELETE request", () => {
        cy.request("DELETE", "https://jsonplaceholder.typicode.com/posts/1").then( (res) => {
            cy.log("response: ", res)
            expect(res.status).to.equal(200)
            expect(res.statusText).to.equal("OK")
        })
    })

})

// ---------------------------------------

describe("advanced API testing scenario from JoanMedia", () => {
    it('', () => {
        
    });
});