/*
<div id="name">HEllO WOrld</div>
*/

describe('', () => {


    before(() => {
        cy.visit('http://127.0.0.1:5500/cypress/reports/html/index.html')
    });

    it('', () => {
        cy.contains('HEllO WOrld') // sam tekst, case sensitive
        cy.contains('#name', 'HEllO WOrld') // selektor + tekst, case sensitive
        cy.contains('#name', 'Hello World', {matchCase: false}) // case insensitive with option

        cy.contains('#name', /^hello/i) // case insensitive with regexp (no quotes!)
        // ^ - informujemy, że szukana fraza ma być na początku tekstu;
        // i - oznacza, że szukana fraza ma być case insensitive;

        const value = "Hello World"
        const regexp = new RegExp('^' + value, 'i') // case insensitive with RegExp constructor;
        cy.contains('#name', regexp)
        // używamy, kiedy np. nie znamy frazy, ale wiemy, że ba być na początku oraz że ma być case insensitive (nie znamy, bo fraza pochodzi skądś inąd i znamy tylko nazwę zmiennej)
    });
});