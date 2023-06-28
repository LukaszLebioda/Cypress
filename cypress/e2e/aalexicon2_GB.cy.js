/*
DROPDOWN 1: The Text Of Each Element Starts With The Given String
INPUT 1: Find Input Element By The Current Value
*/

// DROPDOWN 1 ---------------------------------------------------------------------------------------------

/*
there is a dropdown to find US states
if we type 'mi' four states should appear starting with 'Mi'
we should confirm, that each state actually starts with 'Mi'
*/

/* 
<label>State name</label>
<input name="state" />
<ul id="search-results"></ul>
<script>
  document
    .querySelector('[name=state]')
    .addEventListener('input', (e) => {
      if (e.target.value === 'mi') {
        setTimeout(() => {
          document.getElementById('search-results').innerHTML = `
            <li>Michigan</li>
            <li>Minnesota</li>
            <li>Mississippi</li>
            <li>Missouri</li>
          `
        }, 1000)
      }
    })
</script>
*/

describe('DROPDOWN', () => {
    it('The Text Of Each Element Starts With The Given String', () => {
        cy.visit('http://127.0.0.1:5500/cypress/reports/html/index.html')

        cy.get('input[name="state"]').type('mi')
        cy.get('ul#search-results li')
            .should('exist')
            .each( (el, k) => {
                const text = el.text()
                expect(text, `state ${k + 1}`).to.match(/^mi/i)
            })
    });
});

// INPUT 1 ------------------------------------------------------------------------------------------------

/*
there are couple of inputs, some with static value, some with dynamic value
we want to find inputs with certain values or parts of values
*/

/*
<input id="first" value="Joe" readonly />
<input id="last" value="Black" readonly />
<input id="area" />
*/

describe('INPUT', () => {
  it('Find Input Element By The Current Value', () => {
      cy.visit('http://127.0.0.1:5500/cypress/reports/html/index.html')

      cy.get('input[value^="J"]').should('have.value', 'Joe')
      cy.get('input[value*="lac"]').should('have.value', 'Black')

      cy.get('input#area').type(404)
      cy.get('input')
          .filter( (k, input) => {
              return input.value.includes('404')
          })
          .should('have.value', '404')
  });
});