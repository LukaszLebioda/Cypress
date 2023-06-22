describe('', () => {

beforeEach(() => {
    cy.visit('https://qaboxletstestcypresspracticesite.netlify.app/cygetcontains.html')
});

    it('', () => {
       cy.get('#GETCOMMAND').children().last().find(':checkbox').check({multiple: true})
    });
});