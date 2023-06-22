/* 
<!DOCTYPE html>
<head>
    
<script>
    setTimeout(() => {
    const el = document.querySelector("#name")
    el.classList.add('redClass')
    }, 2000);
</script>

or:

<script>
    setTimeout(() => {
    const el = document.querySelector("#name")
    el.style = "color: red"
    }, 2000);
</script>

<style>
    .redClass {
        color: red;
    }
</style>

</head>

<body>
    
    <div id="name">Joe</div>

</body>

</html>
*/

describe('', () => {
    before(() => {
      cy.visit('http://127.0.0.1:5500/cypress/reports/html/index.html')
    });
  
  it('', () => {
      cy.get('#name').should("have.css", "color", "rgb(255, 0, 0)") // "color", "red" won't work, rgb only
  });
  
  });