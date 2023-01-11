// alert
// find
// intercept

// ------------------------------------------

// alert (unfinished)

// cy.on("windows.alert", (txt) => {
//     expect(txt).to.be.equal("message")
// })

// ------------------------------------------

// non-working example from BITFUMES!!!

// find / intercept
// "find" is added when we want to get(find) an element within another element (for instance when we want to find some posts)
// "intercept" is used when we want to mock an api, e.g. to return number of posts (wich can change of course when another posts are added)
// with "intercept" we are saying, that Cypress shouldn't reaaly access any database with posts

// describe("finding an element within another element", () => {
//     it("finding and intercepting", () => {

//         cy.visit("https://books.toscrape.com/")
//         cy.get("div.page_inner").find("ul.breadcrumb").should("be.visible")

//         cy.intercept("get", "https://someadress.com/api.posts", {
//           body: {
//             posts: {
//                 {
//                     "userId": 1,
//                     "id": 1,
//                     "title": "delectus aut autem",
//                     "completed": false
//                   },
//                   {
//                     "userId": 2,
//                     "id": 2,
//                     "title": "delectus aut autem",
//                     "completed": false
//                   },
//                   {
//                     "userId": 2,
//                     "id": 2,
//                     "title": "delectus aut autem",
//                     "completed": false
//                   }
//             }
//           }  
//         })

//     })
// })

