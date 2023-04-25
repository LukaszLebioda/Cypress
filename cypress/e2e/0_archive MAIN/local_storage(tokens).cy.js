// SETTING AND GETTING ITEMS LOCAL STORAGE WITH CUSTOM COMMANDS
// we can set & get tokens (like in the example below, user id, email etc.)

/* CUSTOM COMMANDS USED (FROM LAMBDA):

// setting, so both key and value are needed

Cypress.Commands.add("setLocalStorage", (key, value) => {
    cy.window().then( (win) => {
        win.localStorage.setItem(key, value)
    })
})

// getting only by the item's key

Cypress.Commands.add("getLocalStorage", (key) => {
    cy.window().then( (win) => {
        win.localStorage.getItem(key)
    })
})

*/
const tokenValue = "abcd123";

describe.skip("LAMBDA - with custom commands", () => {

    before( () => {
        cy.visit("https://example.cypress.io/commands/actions")
    })

    it("sets and gets a token in/from local storage", () => {
        cy.setLocalStorage("token", tokenValue)
        cy.getLocalStorage("token").should("eq", tokenValue)
    });
    
});

describe("my try - no custom commands used", () => {
    it("sets & gets a token in / from local storage", () => {
        cy.visit("https://coding40.eu")
        cy.window().then( (wind) => {
            wind.localStorage.setItem("Lukash", 40)
        })
        cy.window().then( (wind) => {
            wind.localStorage.getItem("Lukash")
        })
    });

});