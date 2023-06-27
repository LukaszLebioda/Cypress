/*
ASSERT: expect(buttonText).to.eq(button) = assert.equal(buttonText, button) => BDD vs TDD assertion
AUTOSUGGESTIONS: /// <reference types="Cypress" /> => to get cypress suggestions (commands.js)
FILTER: cy.get(".price_color").filter(":contains('£36.94')").click(); // filtruje spośród wielu elementów
FORCE TRUE: cy.get("input#monday").check( {force: true} ) => if element has CSS 'display: none' property
MULTIPLE TRUE: cy.get("button").eq(-3).click({multiple: true}) => to click more elements at once
*/

/*
CHECKBOXES
CONTAINS (with regexp)
COOKIES
CYPRESS.$
DOM TRAVERSING 1 (first, last, eq, find, parent, within)
DOM TRAVERSING 2 (children, parent, prev, siblings)
EACH
HOOKS & GLOBAL HOOKS
NAVIGATION (history, go)
RADIO BUTTONS
RELOAD
SCRIPTS
SELECTORS (CSS)
SELECTORS (PSEUDO-SELECTORS)
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

// CONTAINS (with regexp) --------------------------------------------------------------
describe('contains', () => {

    beforeEach(() => {
        cy.visit('https://qaboxletstestcypresspracticesite.netlify.app/cygetcontains.html')
    });

    it('contains', () => {

        // yields the first element containing the text
        cy.contains('SPAN ONE').click()
        // yields all the buttons containing the text
        cy.get('tbody').contains('SPAN TWO').click()
        // yields all the spans containing the text
        cy.contains('span', 'FIND ME').click()
        cy.get('span:contains("FIND ME")').click()

        // with REGEXP
        cy.contains(/^add$/i) // ^ should start with 'a', $ should end with 'd', i - case insensitive
    });
});

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

// DOM TRAVERSING 1 ----------------------------------------------------------------------------------
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

// DOM TRAVERSING 2 ----------------------------------------------------------------------------
describe('', () => {

    beforeEach(() => {
        cy.visit('https://qaboxletstestcypresspracticesite.netlify.app/cygetcontains.html')
    });
    
        // CHILDREN - gets all the direct children of an element
        it('children', () => {
           cy.get('fieldset#GETCOMMAND').children().last().find(':checkbox').check({multiple: true})
        });
    
        // PARENT - gets the direct parent of an element
        // PREV - gets the previous sibling on an element
        it('parent + prev', () => {
            cy.get(':checkbox').parent().prev().find('button').first().click()
            cy.reload()
        });
    
        // SIBLINGS - get all the sibling of an element
        // we can specify what siblings we want to yield (e.g. :checkbox)
        it('siblings', () => {
            cy.get(':checkbox').eq(2).siblings(':checkbox').check( {multiple: true })
        });
    
    });

// EACH ----------------------------------------------------------------------------------------
// to perform an action on each element of the collection
it('simple example to hide the elements', () => {
    cy.get(':button').each( (btn) => {
     btn.hide()
    })
 });

 it('simple example to log the text of the elements', () => {
    cy.get('span').each( (span) => {
     cy.log(span.text())
    })
 });

// HOOKS & GLOBAL HOOKS ------------------------------------------------------------------------
describe('hooks and global hooks', () => {

    before(() => {
        cy.log('BEFORE')
    });

    beforeEach(() => {
        cy.log('BEFORE EACH')
    });

    after(() => {
        cy.log('AFTER')
    });

    afterEach(() => {
        cy.log('AFTER EACH')
    });

    //we can also write any hook directly in e2e.js file
    // and it will work as a GLOBAL HOOK for every test!
    // beforeEach( () => {
    //     cy.log("I'm a message that is coming from a global be hook!")
    // })

});

// NAVIGATION (history, go) --------------------------------------------------------------------
describe("page navigation", () => {

    before( () => {
        cy.visit("http://uitestingplayground.com/") 
    });

    it("page navigation - windows object commands", () => {

        cy.contains("AJAX Data").click()
        cy.window().should( (win) => {
            win.history.back() // or: win.history.go(-1)
        })
        cy.get("h3").should("be.visible") // to assert we went back

        cy.window().should( (win) => {
            win.history.forward() // win.history.go(1)
        })
        cy.get("h3").should("be.visible") // to assert we went forward
    });

    it("page navigation - direct cypress commands", () => {
        cy.visit("http://uitestingplayground.com/")
        cy.contains("AJAX Data").click()
        cy.go(-1) // cy.go("back")
        cy.get("h3").should("be.visible")
        cy.go(1) // cy.go("forward")
        cy.get("h3").should("be.visible")
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

// RELOAD ----------------------------------------------------------------------------------
describe("page reload", () => {

    before( () => {
        cy.visit("http://uitestingplayground.com/") 
    });

    it("page reload - windows object commands", () => {
        cy.window().should( (win) => {
            win.location.reload()
        })
    });

    it("page reload - direct cypress commands", () => {
        cy.reload()
    });
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

// SELECTORS (PSEUDO-SELECTORS) ------------------------------------------------------------------------
/*
:checkbox = 'input[type="checkbox"]'
:button = 'button'
:visible (h3:visible) - selects only visible elements;
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
