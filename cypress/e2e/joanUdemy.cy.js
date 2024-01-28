import { navigation } from '../helpers/navigation.ts'

describe('basics', () => {
	it('visit', () => {
		navigation.goToPage('joan', '/textinput')
		cy.url().then(url => cy.log(url))
	})
})
