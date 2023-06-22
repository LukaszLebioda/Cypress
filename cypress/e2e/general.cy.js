const button = 'SEND'

describe('grabbing the text of an element', () => {
    it('', () => {
        cy.visit("https://coding40.eu/html_mpjavascripts.html")
        cy.contains('button', 'SEND').then( (x) => {
            const buttonText = x.text()
            cy.log(buttonText.toLowerCase()); // output: 'send'
            expect(buttonText).to.eq(button)
            assert.equal(buttonText, button)
        })
    });
});