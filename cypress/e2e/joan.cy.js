import { navigation } from '../helpers/navigation.ts'
import { basic } from '../helpers/basic.ts'

describe('basics', () => {
	beforeEach(() => {
		navigation.goToPage('joan', '/textinput')
	})

	it('check URL and title', () => {
		navigation.checkUrl('testingplayground')
		navigation.checkTitle('Text Input')
	})

	it('input & button challenge', () => {
		basic.typeIntoInput('test', 'MyButton')
	})
})
