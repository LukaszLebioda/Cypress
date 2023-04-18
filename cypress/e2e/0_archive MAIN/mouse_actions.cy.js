// there is no such thing as cy.hover() in Cypress
// there are workarounds however:
// cy.get('.menu-item').trigger('mouseover') => triggers a js event (if there is any)
// cy.get('.hidden').invoke('show').click() => invokes a jQuery function on the yielded element
describe.skip("Mouseover actions", () => {
    it("Hover - Cypress workarounds", () => {
        cy.visit("http://uitestingplayground.com/mouseover")
        cy.xpath("//div//a[@title='Click me']").trigger("mouseover")
        cy.xpath("//div//a[@title='Click me']").invoke("show").click()
    });
    it("Cypress-real-events plugin", () => {
        cy.visit("http://uitestingplayground.com/mouseover")
        cy.contains("Click me").realHover();
    })
});

describe.skip("TOOLTIPS", () => {

    beforeEach(() => {
        cy.visit("https://demoqa.com/tool-tips")
    });

    it("tooltips1 - pieces of info displayed when hovered", () => {
        cy.get("button#toolTipButton").realHover()
        cy.get("div[role='tooltip']") // this is only to see, that the tooltip has ".tooltip-inner" class (we see in in the Cypress GUI console) 
        cy.get("div.tooltip-inner").should("have.text", "You hovered over the Button")
    });
});

describe("MENU (thad expands downwards when hovered)", () => {

    beforeEach(() => {
        cy.visit("https://demoqa.com/menu")
    });

    it("menu", () => {
        cy.get("ul > li > a").contains("Main Item 2").realHover() // one way to use cy.contains()
        cy.contains("li", "SUB SUB LIST »").realHover() // other way to use cy.contains()
        cy.contains("ul", "li", "Sub Sub Item 1").realHover() // and another one
    });
});