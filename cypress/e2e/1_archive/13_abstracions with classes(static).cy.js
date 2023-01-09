// ABSTRACTION WITH CLASSES

// creating classes (normally stored in separate folders) for selectors, functions etc.
// so we create a class and inside we create a static function (static means we don't need to initialaze an object)
class BasePage {
    static loadHomePage() {
        cy.visit("https://devexpress.github.io/testcafe/example/")
    }
    static wait(number) {
        cy.wait(number)
    }
}

// and now the second class with static function
// we're using inheritance - HomePage will have acces to BasePage
// for this there's a special keyword: extends;
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

