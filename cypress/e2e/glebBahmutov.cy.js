describe('', () => {

    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/cypress/reports/html/index.html')
    });

    it('', () => {

        // <body>
        //     <input type="text" value="Lucas" readonly>
        //     <input type="text" value="Mike">
        //     <input type="text" id="idic">
        // </body>

        // STATIC VALUE
        cy.get('input[value="Lucas"]') // if we know the whole value
        cy.get('input[value^="L"]') // if we know how the value begins
        cy.get('input[value*="ucas"]').should('have.value', 'Lucas') // if we know a fragment of the value 

        // DYNAMIC VALUE
        cy.get('input#idic').type('404').should('have.value', '404') // this will work
        // cy.get('input[value*="0"]').should('have.value', '404') // this won't work
        cy.get('input').filter( (k, el) => { return el.value.includes('0') }).should('have.value', '404') // this will work (k stands for index)
        
    });
});
