// TABLES & PAGINATION (with EACH())

// EACH() => "Iterate through an array like structure (arrays or objects with a length property)""
// so it iterates through DOM elements' collection
// SDET 2022; Part 12: Interacting with Elements - Handling Tables; 26:12 - 36:11;

describe("tables", () => {

    beforeEach( () => {
        // szukamy stronki z normalną tabelą z tagiem <table>
        cy.visit("jakaś strona z tabelą w html")
    })

    // zakładamy, strona posiada paginację i jeśli każda ze stron ma taką samą ilość wierszy i kolumn
    // czyli na każdej stronie jest taka sama tabela, tylko z innymi danymi
    // to wystarczy jeden test żeby sprawdzić ilośc wierszy <tr> i ilość kolumn <td>
    it("check number of rows and columns", () => {
        cy.get("table[class='table-bordered'] > tbody > tr").should("have.length", 10)
        cy.get("table[class='table-bordered'] > thead > tr > td").should("have.length", 7)
    })

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

    // UNFINISHED!!!!
    it("pagination", () => {
        // first we need to capture total number of pages (559)
        // e.g. from the text: "Showing 1 to 10 of 5581 (559 pages)"
        let totalPages;
        cy.get("css selector of a text 'Showing 1 to 10 of 5581 (559 pages)'")
            .then( (el) => {
                let mytext = el.text()
                totalPages = mytext.substring(mytext.indexOf("(" +1), mytext.indexOf("Pages" -1))
                cy.log("Total number of pages" + totalPages)
            })

    })

})