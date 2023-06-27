

// overwriting default cypress confuguration in a test
// Cypress.config('defaultCommandTimeout', 10000)

describe("list of basic commands", () => {

  it("BASIC", () => {

    
})



    // PAUSE, WAIT
    cy.pause(); // used for debugging; can be chained;
    cy.debug(); // used for debugging; can be chained;
    cy.wait(3000);
  })

  
  it("VARIA", () => {

    cy.screenshot( { capture: "fullPage"} );
    cy.get("h1").contains("Travel").screenshot();

    cy.get("a").contains("Crime").scrollIntoView();
    cy.wait(2000); 
    cy.get("a").contains("Travel").scrollIntoView();
    
    cy.viewport(550,750) // 2 arguments for the resolution, "portrait" mode is default
    cy.viewport("iphone-6", "landscape") // preset examples of the mobile devices, with "landscape" mode

  });

  it("EACH", () => {

    cy.get(".products").as("prods")
        

    cy.get("@prods").find(".product").each( ($el, index, $elements) => {
          let elementText = $el.find("h4.product-name").text()
          if(elementText.includes("Capsicum")){
              $el.find("button").click()
          }
    })
    
  })

})
