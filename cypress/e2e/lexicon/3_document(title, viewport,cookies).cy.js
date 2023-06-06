// window.document; this.document; document (in the console)

describe("get title / width and height with jQuery + viewport", () => {

    before( () => {
        cy.visit("http://uitestingplayground.com/")
    })

    // to get the title
    it("getting title with document object", () => {
        cy.document().should( (doc) => {
            const titleText = doc.title
            expect(titleText).to.eq("UI Test Automation Playground")
        })
    })
    it("getting title with cypress command", () => {
        cy.title().should("equal", "UI Test Automation Playground")

        cy.title().then( (titleText) => {
            expect(titleText).to.eq("UI Test Automation Playground")
        })
    })


    // to get width and height of the document 
    // we use jQuery (cypress has no commands to get width and heigth of the document)
    it("get width and height with jQuery", () => {
        cy.document().then( (doc) => {
            
            const jQueryObject = Cypress.$(doc)
            const height = jQueryObject.height()
            const width = jQueryObject.width()

            console.log("HEIGHT: ", height);
            console.log("WIDTH: ", width);
            
        })
    });
    it("With CY commands we can only set viewport", () => {
        cy.viewport("ipad-2", "landscape") // or "portrait" (optional)
        cy.viewport(2000, 850, "portrait") // or "landscape" (optional)
    })


    it("set css for body with jQuery", () => {
        cy.document().should( (doc) => {
         let cssBody = Cypress.$(doc.body)
         cssBody.css("background-color", "red")
        })
     });

});

describe.only("handling cookies", () => {

    before( () => {
        cy.visit("http://zero.webappsecurity.com/login.html")
    })

    it.only("handling cookies with document object commands", () => {

       // we can first create a cookie with SHOULD (no cy command used)
        // (same as: console => document.cookie = "username=Lookash")
        // then see: console => document.cookie
        cy.document().should( (doc) => {
            doc.cookie = "username=Łukasz"
        })
        // or with THEN (because we use cy.log)
        cy.document().then( (doc) => {
        doc.cookie = "username=Łukasz"
        // we can read cookie 
        cy.log(doc.cookie)
        console.log(doc.cookie)
        // we can update cookie
        doc.cookie = "username=LookashUpdated"
        cy.log(doc.cookie)
        console.log(doc.cookie)
        // we can delete (clear) cookie
        doc.cookie = "username="
       })
    });

    it("handling coockies with direct cypress commands", () => {
        // create
        cy.setCookie("password", "buzzy123")
        // read
        cy.getCookie("password") // visible in the cypress gui devtools; cy.getCookies() to get all the cookies
        // update
        cy.setCookie("password", "buzzy1234567")
        cy.getCookie("password")
        // delete
        cy.clearCookie("password") // visible in the cypress gui devtools; cy.clearCookies() to clear all the cookies

     });
});