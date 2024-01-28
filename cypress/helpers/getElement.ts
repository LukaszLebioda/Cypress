class Basic {
	// /**
	//  * get element by id
	//  * @param id
	//  */
	// getElementById(id: string) {
	//     return cy.get(`#${id}`)
	// }
	// /**
	//  * get element by text
	//  * @param element
	//  * @param text
	//  */
	// getElementByText(element: string, text: string) {
	//     return cy.get(element)
	//         .should('be.visible')
	//         .and('contain', text)
	// }
	// /**
	//  * click element by id
	//  * @param id
	//  */
	// clickElementById(id: string) {
	//    return this.getElementById(id).click()
	// }
	// /**
	//  * type into element by id
	//  * @param id
	//  * @param text
	//  */
	// typeIntoElementById(id: string, text: string) {
	//     this.getElementById(id).click().clear().type(text)
	// }
}

export const basic = new Basic()
