// session storage - znikają po zamknięciu przeglądarki;
// local storage - zostają po zamknięciu przeglądarki;
describe.only("local storage / session storage", () => {

    before( () => {
        cy.visit("http://uitestingplayground.com/") 
    });

    it("local storage / session storage - windows object commands", () => {
        cy.window().should ( win => {
            expect(win.localStorage.length, "chyba lepsza asercja").to.eql(0) // console => window.localStorage (length will be there)
            expect(win.localStorage, "chyba gorsza asercja").to.have.length(0)
            win.localStorage.setItem("Name", 'QA Box Let\'s Test') // setting both key & value
            expect(win.localStorage.getItem("Name")).to.eql("QA Box Let's Test") // getting key only, then we can check its value; devtools in cypress gui => application => Local Storage => key + value will be there
        })
    });

    it("local storage - direct cypress commands", () => {
        cy.clearLocalStorage() // clears what we have set in the "it" above
    });
});