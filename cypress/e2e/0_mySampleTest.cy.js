
describe("Browser actions", () => {
    beforeEach(() => {
        cy.visit("https://books.toscrape.com/", { timeout: 10000 })
        cy.url().should("include", "books")
    })
    it("should assert the page is loaded and contains h1", () => {
      cy.get("h1").contains("All products")
    })
    it("should click on 'Travel' category", () => {
      cy.get("a").contains("Travel").click()
      cy.get("h1").contains("Travel") // + .should("be.visible"?)
    })
    it("should display correct number of books", () => {
      cy.get(".product_pod").its("length").should("eq", 11)
    })
  })

//   describe('LOGIN TESTS - when navigate to the mountain weather page', () => {
//     let existsMountain = "Gerlach"
//     let noExistsMountain = "nieMaTakiejGóry"

//     function errorMessageShouldContain(text) { // funkcje przeniosłabym do innej 'klasy' ale na razie dla pokazania jest ok,ta funkcja nie jest w tescie wiec moga zniej korzystac wszytskie testy
//         cy.get("#flash_error").should('contain.text',
//             `'Sorry, we could not find a mountain by the '"${text} 'search string. Please try to use the lists above.'`)
//     }

//     beforeEach(() => {
//         // Arrange
//         cy.visit("https://www.mountain-forecast.com/")
//         cy.url().should("include", "mountain-forecast.com")
//     });

//     it.skip('and type mountain then should display forecast table content', () => {
//         // Act
//         cy.get('#location')
//             .clear()
//             .type(`${existsMountain} {Enter}`)

//         // Assert
//         cy.get('.forecast-table-graph')
//             .scrollIntoView()
//             .should("be.visible")
//         cy.get(':nth-child(1) > .forecast-table-elevation__link > .height').should("contain.text", 2655)
//     })

//     it('and type no exists mountain then should display message', () => {
//         // Act
//         cy.get('#location')
//             .clear()
//             .type(`"${noExistsMountain} {Enter}"`)

//         // Assert
//         errorMessageShouldContain(noExistsMountain)
//     })
// })

// // zobacz sobie
// //cypress   - wzorzec aaa
// // dont repeat myself - zasada dla kazdego jezyka programowania