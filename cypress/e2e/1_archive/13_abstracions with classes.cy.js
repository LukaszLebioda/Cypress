// ABSTRACTION WITH CLASSES

// used in POM approach (Page Object Model)
// it means creating classes (or any other reusable element) and storing them in separate folders (like CSS files)
// so we can use them for maultiple tests and in case of a change, we change this class only, not every test it applies to

// ---------------------------------------------------------------------------

// przykład od Automation Step by Step
// najpierw tworzymy odrębny folder i plik do zapisania klasy "LoginPage" (np. ./2_classes/myClasses.js) 
// i z tamtego pliku "myClasses.js" eksportujemy tę klasę, a do tego pliku ją importujemy

// jako przykład wykorzystamy stronkę z logowaniem (2 inputy, 1 submit button)
// a zatem importujemy klasę "LoginPage" i tworzymy zmienną, do której przypisujemy zainicjowany obiekt z tą klasą
// (w przykładzie z Udemy poniżej wykorzystujemy funkcję typu STATIC, dlatego nie musimy inicjalizować obiektu)

// czyli funkcje stworzone w klasie LoginPage (w odrębnym pliku) stały się tutaj metodami obiektu, który zainicjowaliśmy
// (innymi słowy stworzyliśmy obiekt pewnej klasy, czyli instancję tej klasy)
// a do tych metod posyłamy jako argument jakieś hasło i jakiegoś usera
// np. loginPage.enterUsername("Admin");

import { LoginPage } from "./2_classes/myClasses";
const loginPage = new LoginPage()

describe("Page Object Model practice", function () {
it("POM demo", () => {

   cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

   loginPage.enterUsername("Admin");
   loginPage.enterPassword("admin123");
   loginPage.clickLoginButton();

   // a tych funkcji zatem już nie potrzebujemy: 
   // cy.xpath("//input[@placeholder='Username']").type("Admin");
   // cy.xpath("//input[@placeholder='Password']").type("admin123");
   // cy.xpath("//button[normalize-space()='Login']").click();
})
})

// ------------------------------------------------------------------------------------------

// przykład od Udemy, bardziej skomlikowany, bo używa "extends"
// a klasa jest tutaj stworzona w tym samym skrypcie (z powodów demonstracyjnych), a nie tam, gdzie powinna, czyli w odrębnym pliku

// Udemy korzysta z funkcji typu "static", która nie wymaga inicjalizacji obiektu

// tworzymy klasę "BasePage" z funkcją ładowania strony i czekania 
class BasePage {
   static loadHomePage() {
       cy.visit("https://devexpress.github.io/testcafe/example/")
   }
   static wait(number) {
       cy.wait(number)
   }
}

// a teraz tworzymy drugą klasę, "HomePage", i za pomocą słówka kluczowego EXTENDS sprawiamy,
// że klasa ta będzie miała dostęp do funkcji określonych w klasie "BasePage" 

class HomePage extends BasePage {
   static scrollToBottom() {
       cy.get("#submit-button").scrollIntoView()
   }
   static scrollToTop() {
       cy.get("header").scrollIntoView()
   }

}

describe("Abstraction with classes", () => {
   it("should scroll the page up and down", () => {
       HomePage.loadHomePage()
       HomePage.scrollToBottom()
       HomePage.wait(5000)
       HomePage.scrollToTop()
       HomePage.wait(3000)
   })
})
