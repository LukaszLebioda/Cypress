// CHILD TABS

/* by default Cypress doesn't handle child tabs that open on a new tab (new window), 
so we have to by-pass this disfunctionality somehow
1) either by removing the attribute 'target="blank"' (cy.invoke);
2) or by capturing a-href value with a function and using cy.visit twice

*/

describe.skip("child tabs - approach 1 (removing target attribute)", () => {

    beforeEach( () => {
        cy.visit("https://demoqa.com/links")
    })

    it("should have href & target attributes with proper values", () => {
        // upewniamy się, że link a ma atrybut href i przede wszystkim target:_blank
        cy.get("a").contains("Home").should("have.attr", "href", "https://demoqa.com")
        cy.get("a").contains("Home").should("have.attr", "target", "_blank")
    });

    // i następnie usuwamy atrybut target, dzięki czemu strona nie otworzy się w nowym oknie
    // korzystamy z cy.invoke() => "Invoke a function on the previously yielded subject"
    // w naszym przykładzie (i najczęściej) jest to metoda jQuery (tutaj => removeAttr)
    it("approach 1 - should remove the 'target' attribute", () => {
        cy.get("a").contains("Home").invoke("removeAttr", "target").click()
        
        cy.url().should("eq", "https://demoqa.com/") // assertion 1a
        
        cy.url().then( url => {
            expect(url).to.eql("https://demoqa.com/") // assertion 1b
        })
        
        cy.get("div.card-up").should("be.visible").and("have.length", 6) // assertion 2

        cy.go("back") // cy.go("forward"), cy.go(-1), cy.go(1) // goes back to the initial tab
    });
});

describe("child tabs - approach 2 (capturing the 'href' attribute)", () => {

    // we use jQuery prop() method to get the value of a certain property = attribute
    it("handles child windows", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice")
        cy.get("a#opentab").then( (attr) => {
            let url = attr.prop("href")
            cy.log(url)
            cy.visit(url)
        })
    })

        // cy.go(-1)
        // same assertions as above (approach 1) can be applied

})

// ----------------------------------
// CHILD WINDOWS
// Cypress does not support child windows as well

describe.skip("handling child windows", () => {
  
    // we use jQuery prop() method to get the value of a certain property = attribute
    it("handles child windows", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice")
        cy.get("a#opentab").then( (attr) => {
            let url = attr.prop("href")
            cy.log(url)
            cy.visit(url)
        })
    })
  
});


// -----------------------------------

describe("Broken images", () => {

    beforeEach(() => {
        cy.visit("https://demoqa.com/broken")
    });

    it("image NOT broken - assertion", () => {
        cy.get("div > img[src='/images/Toolsqa.jpg']")
            .should("be.visible") 
            .and( ($img) => { // SHOULD + AND => expect assertions only, no cy.*() commands
                expect($img[0].naturalWidth).to.be.greaterThan(0)
            })
    });

    // broken image is also visible in the DOM, so should("be.visible") will bring false positive result
    // we have to acces the yielded image in the devtools instead (console) and get the naturalWidth property (which is 0 when a broken image is involved)
    it("image broken - assertion", () => {
        cy.get("div > img[src='/images/Toolsqa_1.jpg']")
            .should("be.visible") 
            .then( ($img) => { // THEN => there can be cy.*() commands involved
                cy.log("Yielded image: ", $img)
                expect($img[0].naturalWidth).to.be.greaterThan(0)
            }) 
    });
});