import { basic } from '../support/basic'

describe('kjj', () => {

beforeEach(function() {
    cy.visit('https://reqres.in')
});

    it('dffsdf', function() {
        cy.intercept('GET', '**/api/users/2').as('user')
        cy.get('[data-key="try-link"]').eq(1).click()
        cy.wait('@user').then(res => {
            console.log(res)
            const email = res.response.body.data.email
            expect(email).to.eq('michael.lawson@reqres.in')
        })
    })

})