/*
ASSERT: expect(buttonText).to.eq(button) = assert.equal(buttonText, button) => BDD vs TDD assertion
AUTOSUGGESTIONS: /// <reference types="Cypress" /> => to get cypress suggestions (commands.js)
FILTER: cy.get(".price_color").filter(":contains('£36.94')").click(); // filtruje spośród wielu elementów
FORCE TRUE: cy.get("input#monday").check( {force: true} ) => if element has CSS 'display: none' property
MULTIPLE TRUE: cy.get("button").eq(-3).click({multiple: true})
*/

/*
CHECKBOXES
COOKIES
CYPRESS.$
DOM TRAVERSING (first, last, eq, find, parent, within)
INPUTS (value) GB
RADIO BUTTONS
SCRIPTS
SELECTORS (CSS)
TEXT()
WINDOW (hash, location, title, url)
XPATH
*/

// CHECKBOXES --------------------------------------------------------------------------
describe.skip("checkboxes", () => {

    beforeEach( ()=> {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
    })

    it("checkboxes", () => {
        //sprawdzanie widoczności wszystkich checkboxów
        cy.get("input#friday").should("be.visible")
        cy.get("input#saturday").should("be.visible")
        cy.get("input#sunday").should("be.visible")

        // wybieramy konkretny checkbox (check = click)
        cy.get("input#monday").check().should("be.checked") 
        // odznaczamy ten sam checkbox (uncheck = click)
        cy.get("input#monday").uncheck().should("not.be.checked")

        // zaznaczamy i odznaczamy wszystkie checkboxy 
        cy.get("input.form-check-input[type='checkbox']").check().should("be.checked")
        cy.get("input.form-check-input[type='checkbox']").uncheck().should("not.be.checked")

    })

})

// COOKIES -----------------------------------------------------------------------------
describe('', () => {
    it('handling cookies', () => {
        // create cookie
        cy.setCookie('myCookie', 'notSoMuchOfACookie')
        // read cookie
        cy.getCookie('myCookie')
        // update cookie
        cy.setCookie('myCookie', 'aMuchBetterCookie')
        cy.getCookie('myCookie')
        // clear cookie
        cy.clearCookie('myCookie')
    });
});

// CYPRESS.$ --------------------------------------------------------------------------
describe('', () => {
    it('Cypress.$() to get access to jQuery methods', () => {
        cy.visit('http://uitestingplayground.com/')
        cy.document().then( (doc) => {
            // put element into Cypress.$(...) and store it into variable
            // to get access to jQuery methods that can be used on this element
            const jQueryObject = Cypress.$(doc) 
            const height = jQueryObject.height()
            const width = jQueryObject.width()
            console.log(`Heigth is ${height} and width is ${width}`);
            Cypress.$(doc.body).css('background-color', 'red')
        })
    });
});

// DOM TRAVERSING ----------------------------------------------------------------------------------
describe('dom traversing methods - basics', () => {
    it('', () => {
        // FIRST, LAST, EQ()
    cy.get("button").first().click(); // first position in an array of buttons
    cy.get("button").eq(1).click(); // second position in an array of buttons (etc.)
    cy.get("button").eq(-1).click(); // eq can go minus
    cy.get("button").last().click(); // last position in an array of buttons

    // PARENT
    cy.get("ul").parent().should("have.class", "side_categories"); // finds parents of elements

    // FIND
    cy.get(".products > .product").should("have.length", 4) // without find()
    cy.get("products").find("product").last().should("be.visible"); // with find()
    
    // WITHIN
    cy.get("div").find("h1").should("exist") // finds all h1's in the div (acts on 1 element only)
    cy.get("div").within( () => { // "within" narrows the scope to the parent element (acts on multiple els)
            cy.get("h1").should("exist")
            cy.get("p").should("exist")
        });
    });

})

// INPUTS (value) ----------------------------------------------------------------------------------
// GB - Find Input Element By The Current Value
describe('', () => {

    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/cypress/reports/html/index.html')
    });

    it('handling inputs with value', () => {

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

// RADIO BUTTONS -------------------------------------------------------------------------------
describe('radio buttons', () => {

        it("radiobuttons", () => {

            // sprawdzamy widoczność wszystkich radiobuttonów 
            cy.get("input#female").should("be.visible")
            cy.get("input#male").should("be.visible")
    
            // wybieramy konkretny radiobutton (check = click)
            // drugi radiobutton nie może być zaznaczony
            cy.get("input#female").check().should("be.checked")
            cy.get("input#male").should("not.be.checked")
    
            // i w drugą stronę
            cy.get("input#male").check().should("be.checked")
            cy.get("input#female").should("not.be.checked")
        })

});

// SCRIPTS ---------------------------------------------------------------------------------
/*
Cypress by default opens with: npx cypress open
but we can customize opening scripts and use: npm run {script name}
e.g. npm run cy:open 
/*
"scripts": {
    "cy:open1": cypress open (just goes to node modules and opens cypress)
    "cy:open2": "cypress open --e2e --browser chrome", (opens cypress in headed mode with chrome)
    "cy:run": "cypress run", (runs all the tests in headless mode)

    "cy:openBaseUrl": "cypress open --config baseUrl=http://uitestingplayground.com",
    "cy:runOne": "cypress run --spec 'cypress/e2e/apitesting.cy.js'",
    "cy:runOneHeaded": "cypress run --headed --spec 'cypress/e2e/apitesting.cy.js'",
    "cy:runOneEnv": "cypress run --spec 'cypress/e2e/apitesting.cy.js' --env urlTerminalEnv=https://google.com"
  },
  */

// SELECTORS (CSS) ---------------------------------------------------------------------------
/*
cy.get('h1') - tag
cy.get('#id') - id
cy.get('h1#id') - tag with id
cy.get('.class') - class
cy.get('h1.class') - tag with class
cy.get('[attribute='value']') - attribute with value
cy.get('h1[attribute='value']') - tag with attribute with value
cy.get('.class[attribute="value"]') - class witg attribute with value
cy.get("input.class[attribute='value'") - tag with class with attribute with value
*/

// TEXT() ------------------------------------------------------------------------------------
const header = 'CODING 40'

describe('grabbing the text of an element', () => {
    it('', () => {
        cy.visit("https://coding40.eu/html_mpjavascripts.html")
        cy.contains('button', 'SEND').then( (el) => {
            const buttonText = el.text()
            cy.log(buttonText.toLowerCase()); // output: 'send'
            expect(header).to.eq(el)
        })
    });
});

// WINDOW (hash, location, title, url) -------------------------------------------------------
// we can access window properties (browser global object properties) 
// directly or via cypress commands

describe("location - hash, host, pathname, protocol", () => {

    beforeEach( () => {
        cy.visit("http://uitestingplayground.com/") 
    });

    it('title & url assertions', () => {
        cy.title().should('equals', 'UI Test Automation Playground') // eq = equal = equals
        cy.url().should('contains', 'playground') // contains = contain
        cy.url().should('includes', 'playground') // includes = include
    })

    it("hash, host, pathname, protocol - windows object commands", () => {

        cy.window().should( (win) => {
            expect(win.location.hash).to.eq("")
            expect(win.location.host).to.eq("uitestingplayground.com") // host = hostname
            expect(win.location.pathname).to.eq("/") // eq = eql, equal; contains = include
            expect(win.location.protocol).to.eq("http:")
        })
    });

    it("hash, host, pathname, protocol - direct cypress commands", () => {
        cy.hash().should("eq", "")
        cy.location("host").should("eq", "uitestingplayground.com")
        cy.location("pathname").should("eq", "/") // often used when page is redirected
        cy.location("protocol").should("eq", "http:")
    });
});

// XPATH -------------------------------------------------------------------
/*
installation:
0) find XPath plugin: "https://github.com/cypress-io/cypress/tree/develop/npm/xpath"
1) install XPath plugin: npm install -D @cypress/xpath
2) e2e.js: require('@cypress/xpath');
3) https://selectorshub.com/: install XPath selector hub for Chrome;
4) xpath in the console summary: "https://quickref.me/xpath.html";

syntax example:
cy.xpath("//h5").should("be.visible").and("exist")
cy.xpath("//input[@class='someInput']").should("have.value", "Admin")
cy.xpath("//ul[@id='someID']/li") = cy.xpath("//ul[@id='someID']").xpath("./li")

in the console:
jQuery: $("h3")
xpath: Sx("//h3")
*/
