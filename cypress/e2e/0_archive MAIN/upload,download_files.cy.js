// UPLOAD

// we need cypress-file-upload dependency from: "https://www.npmjs.com/package/cypress-file-upload"
// then we need to add: "import 'cypress-file-upload';" in "cypress/support/commands.js";
// and finally we add: "import './commands';" in "cypress/support/e2e.js";

describe.skip("UPLOADING A FILE", () => {

    beforeEach( () => {
        cy.visit("https://demoqa.com/upload-download")
    })

    // pobieramy "wybierz plik" (tutaj za pomocą xpatha); 
    // następnie symulujemy uplodowanie pliku z folderu fixtures za pomocą "attachFile" z pluginu
    // a na koniec assertujemy, czy pojawił się określony tekst z fejkową ścieżką do pliku
    it("uploading a file", () => {
        cy.xpath("//input[@id='uploadFile']").attachFile("./myFixtures/uploadFileExample.txt")
        cy.get("p#uploadedFilePath").should("contain", "uploadFileExample.txt")
    })

})

// DOWNLOAD

// we need cy-verify-downloads dependency from: "https://www.npmjs.com/package/cy-verify-downloads"
// then we need to add: "require('cy-verify-downloads').addCustomCommand();" in "cypress/support/e2e.js";

/* and finally we add (in "cypress.config.js"): 

const { verifyDownloadTasks } = require('cy-verify-downloads');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', verifyDownloadTasks);
    },
  },
});

*/


describe("DOWNLOADING A FILE", () => {

    beforeEach( () => {
        cy.visit("https://demoqa.com/upload-download")
    })

    // pobieramy "download" (tutaj za pomocą xpatha) i klikamy w niego; 
    // pobieramy w ten sposób jakiś samplowy jpeg, który możemy assertować
    // a na koniec assertujemy, czy pojawił się określony tekst z fejkową ścieżką do pliku
    it("downloading a file", () => {
        cy.xpath("//a[@id='downloadButton']").click()
        cy.verifyDownload("sampleFile.jpeg");
    })

})