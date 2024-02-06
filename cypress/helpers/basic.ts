class Basic {
	/**
	 * get input field by placeholder
	 * @param placeholder
	 */
	getInput(placeholder: string) {
		return cy.get(`input[placeholder="${placeholder}"]`)
	}
	/**
	 * type into input field
	 * @param text
	 */
	typeIntoInput(text: string, placeholder: string) {
		this.getInput(placeholder).type(text)
	}

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
