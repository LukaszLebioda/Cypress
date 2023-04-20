// TABLES with EACH() - od SQA CYPRESS TUTORIAL
describe("handling tables in Cypress", () => {

    beforeEach( () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    })

    it("check the number of rows and columns", () => {
        cy.get("table#product[name='courses'] > tbody > tr").should("have.length", 11)
        cy.get("table#product[name='courses'] > tbody > tr > th").should("have.length", 3)
    })

    // sprawdzamy, czy rekordowi "Master Selenium Automation in simple Python Language"
    // w kolumnie "Course" odpowiada cena "25" w kolumnie "Price"
    // robimy to dynamicznie, bo wiersz, który nas interesuje, może zmieniać miejsce w tabeli
    it("iterates through table to find a certain row", () => {
            // najpierw robimy taki selektor, który obejmie interesującą nas kolumnę "Course"
        cy.get("table#product[name='courses'] tr td:nth-child(2)").each( ($record, index, $records) => {
            // potem pobieramy każdy rekord z tej tabeli do zmiennej i szukamy konkretnego rekordu
            if($record.text() === "Master Selenium Automation in simple Python Language") {
            // następnie używamy metody next() (wg dokumentacji cypressowej nie chodzi o metodę jQuery,
            // tylko o komendę następującą po cy.get()) oraz wykorzystujemy zmienną "index"
            // która przechowuje informację o numerze iteracji pętli each(), żeby znaleźć właściwy wiersz
                cy.get("table#product[name='courses'] tr td:nth-child(2)").next().eq(index).should("have.text", "25")
                // oprócz powyższej linijki możemy też zrobić tak:
                // cy.get("table#product[name='courses'] tr td:nth-child(2)").next().eq(index).then( (price) => {expect(price.text()).to.be.equal("25")})
                // i w ten sposób możemy "resolve the promise"
            }
        })
    })

})

// PRZYKŁADY OD SDET2022
describe('', () => {
    
    // a teraz sprawdzamy wartość z konkretnego rekordu (komórki)
    // np. mamy tabelę klientów i sprawdzamy adres mailowy jednego z nich
    // i ten adres jest np. w 5 wierszu i 3 kolumnie
    it("check data from a particular cell", () => {
        // tr:first-child, tr:last-child, tr:nth-child(number)
        cy.get("table[class='table-bordered'] > tbody > tr:nth-child(5) > td:nth-child(3)").contains("lukasz@gmail.com")
    })

    // a teraz sprawdzamy dane ze wszystkich komórek, czyli z całej tabeli widocznej na jednej podstronie
    // wpierw musimy dostać się do każdego wiersza po kolei, a w tym wierszu musimy dostać się do każdej kolumny
    it("check data from every row and column (from the whole table)", () => {
        // żeby to zrobić, pobieramy każdy wiersz, i używamy each(), który ma callbacka, 
        // który iteruje po tablicy złożonej z elementów DOM ("Iterate over an array of DOM elements")
        // a jako parametry przekazujemy value ($row), index (indeks każdego z rows licząc od zera) oraz collection ($rows => wszystkie rzędy)
        cy.get("table[class='table-bordered'] > tbody > tr").each( ($row, index, $rows) => {

            cy.wrap($row).within( () => {

                cy.get("td").each( ($col, index, $cols) => {

                    cy.log($col.text())

                })

            })

        })
    })
});

