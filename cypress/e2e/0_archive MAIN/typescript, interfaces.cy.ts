describe("TypeScript in Cypress", () => {

    // TypeScript variable declaration
    let stringariable:string = "dfsfd";
    let numberVariable:number = 90;
    let booleanVariable:boolean = true;
    let anyVariable:any = false; // like JavaScript

    it("functions in TypeScript", () => {

        // number afrter parameters is optional
        // could be: void (don't return anything)
        function add (a:string, b:number):number { 
            return a + b;
        }
        cy.log(add(3,4))
    });

    // INTERFACE (it' like creating a new type)
    interface User {
        username:string;
        password:string;
    }

    function returningUserInformation(user:User):void {
        console.log("This is the user name" + user.username);
        console.log("This is the password" + user.password);
    }

});