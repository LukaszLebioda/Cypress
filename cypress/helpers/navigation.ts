class Navigation {
	url = {
		joan: 'https://uitestingplayground.com',
		// qaBox: 'https://react-redux.realworld.io/#/login?_k=5jewux',
		// kanielUdemy: 'https://example.com/'
	}

	/**
	 * visits a website depending on params given
	 * @param url
	 * @param suburl
	 */
	goToPage(url: string, suburl: string = '/') {
		switch (url) {
			case 'joan':
				cy.visit(this.url.joan + suburl, { timeout: 30000 })
				break
			// case 'qabox':
			//     cy.visit(this.url.qaBox, {timeout: 30000})
			//     break;
			// case 'kaniel':
			//     cy.visit(this.url.kanielUdemy, {timeout: 30000})
		}
	}

	// /**
	//  * visits a website depending on param given
	//  * @param urlFragment
	//  */
	// checkUrl(urlFragment: string) {
	//     cy.url().should('contain', urlFragment).then(url => {
	//         cy.log(`URL: ${url}`)
	//     })
	// }

	// logIn(login: string, password: string) {
	//     cy.get('input:eq(0)').type(login)
	//     cy.get('input').eq(1).type(password)
	//     cy.get('button').click()
	// }
}

export const navigation = new Navigation()
