// ACCORDIONS
describe("ACCORDIONS", () => {

    beforeEach( () => {
        cy.visit("https://demoqa.com/accordian")
    })

    it("accordions", () => {

        // upewniamy się, że kliknięty accordion element jest otwarty 
        cy.get("#section2Heading").click().next()
            .should("have.class", "show") 
            .and("have.css", "display", "block")

        cy.get("#section1Heading").next().should("have.class", "collapse") // upewniamy się, że pierwszy accordion element jest zamknięty

        cy.get("#section3Heading").next().should("have.css", "display", "none") // upewniamy się, że trzeci accordion element jest zamknięty
    })

})

// DATE PICKER
describe("DATE PICKER", () => {

    beforeEach(() => {
        cy.visit("https://demoqa.com/date-picker")
    });

    it("date picker", () => {
        cy.get("input#datePickerMonthYearInput").click() 
        cy.get("select.react-datepicker__month-select").select("7") // or .select("August")
        cy.get("select.react-datepicker__year-select").select("1982") 
        cy.get("div.react-datepicker__month").find("div").contains("19").click() 

        /*
        jako że cy.contains("19") nie zadziała dobrze, bo szuka też np. roku 1919:
        another approach to click on a certain day suggested by JoanMedia
        is to download a library from: "https://testing-library.com/docs/cypress-testing-library/intro/" to get acces to new commands, such as:

        cy.findByText("19")

        */

        cy.get("input#datePickerMonthYearInput").should("have.value", "08/19/1982")
    });
});

