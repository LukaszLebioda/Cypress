// FIXTURES

/*
{
    "validUsername": "username",
    "validPassword": "password",
    "invalidUsername": "fdkjndjfgbfbb",
    "invalidPassword": "457885440202"
}
*/

describe("login with fixtures", () => {

    beforeEach( () => {
        cy.visit("http://zero.webappsecurity.com/login.html")
    })

    //domyślna ścieżka to "fixtures", więc jeśli nie mamy żadnego podkatalogu, 
    // wystarczy jako parametr podać nazwę pliku, nawet bez rozszerzenia .json
    it("logs json data from fixture", () => {
        cy.fixture("myFixtures/credentials").then( (loggedData) => {
            cy.log("Data: ", loggedData)
        })
    })

    it("updates json data from fixture", () => {
        cy.fixture("myFixtures/credentials").then( (loggedData) => {
            loggedData.invalidUsername = "buzzzzzzzzzz........."
            cy.log("Updated data: ", loggedData)
        })
    })

    it("tries to login with invalid credentials", () => {
        cy.fixture("myFixtures/credentials.json").then( (data) => {

            let username = data.invalidUsername;
            let password = data.invalidPassword;

            cy.get("input#user_login").clear().type(username);
            cy.get("#user_password").clear().type(password);
            cy.get("input[type='submit']").click();
            cy.get(".alert").should("contain", "Login and/or password are wrong.")
        })
    })

})

// LAMBDA EXAMPLE

/*
{
    "name": "Using fixtures to represent data",
    "email": "hello@cypress.io",
    "body": "Fixtures are great way to mock data for responses to routes"
}
*/

describe('sdcsdf', () => {
    it("sets a token in local", () => {
        cy.visit("https://example.cypress.io/commands/actions")
        cy.fixture("lambda.json").then( (fix) => {
            cy.log("data: ", fix)
        })
    });
});

// Joan Media ADVANCED EXAMPLES:
// FIXTURES - advanced

describe("fixtures with aliases", () => {

    // fixtures with more complicated json
    it("fixtures with more complicated json", () => {
        cy.fixture("./myFixtures/testingdata.json").then( (data) => {
            cy.log(data.users[1].haselko)
        })
    })

    // fixtures with aliases
    it("fixtures with aliases", () => {
        cy.fixture("./myFixtures/testingdata.json").as("myfix")
        
        cy.get("@myfix").then( (data) => {
            cy.log(data)
        })
    })

    // fixtures with ITS and if-valid-construcion (see json above)
    it("fixtures with ITS", () => {
        cy.fixture("./myFixtures/testingdata.json")
            .its("users")
            .then( (users) => {

                // tylko wyświetlanie danych
                cy.log(users)
                cy.log(users.imionko) 
                cy.log(users.haselko)

                // logowanie, jeśli VALID
                users.forEach(user => {
                    cy.visit("https://demoqa.com/login")
                    if(user.valid)
                    {
                        cy.mylogin("test", "Test1234*")
                        cy.url().should("include", "login")
                    }
                    /* no "else" is necessary, but we could do this:
                    // else {
                        cy.url().should("include, "profile")
                    }
                    */

                    cy.clearCookies()
                    cy.clearLocalStorage()

                })
        })
    })

});


// --------------------------------------------------------

// example from SQA Rahul Shetty
// fixture should not be part of test suite, they should be laded in the BEFORE hook
/*
{
    "users": [
        {
            "valid": true,
            "username": "username",
            "password": "password",
            "stronka": ""
        },
        {
            "valid": false,
            "imionkusername": "badusername",
            "password": "badpassword",
            "stronka": ""  
        }
    ],
    "users2": 
    {
       "imionko": "wrong",
       "haselko": "",
       "email": "",
       "gender": "Male"
    }
}
*/

// only old function notation can be used here with THIS
describe("just some more fixtures", () => {

    // fixtures should be part of before hook
    before( function() {
        cy.fixture("./myFixtures/testingdata.json").then( function(data) {
            // but we normally can't acces data outside the scope of this block later on
            // so we need to use this.data to expand the scope to the entire class (document)
            this.data = data;
        })
    })


    it("fixtures", function() {
        cy.visit("https://rahulshettyacademy.com/angularpractice/", { timeout: 30000 })
        
            // some exaplmes of data driven test with fixtures' data
            cy.get("input[name='name']").first().type(this.data.users2.imionko)
            cy.get("select#exampleFormControlSelect1").select(this.data.users2.gender)

            // some validations (value + minlength)
            cy.get("input[name='name']")
                .first()
                .should("have.value", this.data.users2.imionko)
                .and("have.attr", "minlength", "2") // 2 or "2", both work

            // same as above (value only) (but with jQuery text() $ prop)() methods)
            cy.get("input[name='name']").first().then( ($txt) => {
                let text = $txt.val()
                expect(text).to.be.equal(this.data.users2.imionko)
            })
            cy.get("input[name='name']").first().then( ($txt) => {
                let text = $txt.prop("value")
                expect(text).to.be.equal(this.data.users2.imionko)
            })
    })

})
