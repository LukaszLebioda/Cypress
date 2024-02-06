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
	goToPage(url: string, suburl: string = '') {
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

	/**
	 * asseses and logs the URL of visited website
	 * @param urlFragment
	 */
	checkUrl(urlFragment: string) {
		cy.url()
			.should('contain', urlFragment)
			.then(url => {
				cy.log(`URL: ${url}`)
			})
	}

	/**
	 * asseses and logs the title of visited website
	 * @param titleFragment
	 */
	checkTitle(titleFragment: string) {
		cy.title().then(title => {
			cy.log(`title: ${title}`)
			expect(title).to.contains(titleFragment)
		})
	}
}

export const navigation = new Navigation()
