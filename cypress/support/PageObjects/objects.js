// OBIEKT zawiera pary klucz: wartość oraz funkcje (czyli metody);
// syntax + console.log()

const newUser = {
    name: "Lucas",
    age: 40,
    favTeam: "Red Bull",
    ifDriver: false,
    car: {
        brand: "Ferrari",
        color: "red",
        sound() {
            console.log("Wrrrrrrrr.....!");
        }
        // sound: function() { console.log("wrrrrrrrr!") }
        // sound: () => { console.log("wrrrrrrrr!") }
    },
}

// console.log(newUser);
// console.log(newUser.favTeam);
// console.log(newUser.car.brand);
// console.log(`${newUser.name} drives ${newUser.car.brand}`);

// newUser.car.sound();

// zmiana wartości klucza w obiekcie:
newUser.age = 44;

// dodawanie pary klucz-wartość do obiektu:
newUser.country = "Poland";

//-----------------------------------------------

// PĘTLA FOR IN (FOR OF - pętle, FOR IN - obiekty)

// // możemy wyświetlić klucze
// for(const key in newUser) {
//     console.log(key);
// }

// // możemy wyświetlać wartości
// for(const value in newUser) {
//     console.log(newUser[value]);
// }

// // możemy wyświetlić całe pary:
// for(const keyValue in newUser) {
//     console.log(keyValue + ": " + newUser[keyValue]);
// }

// -----------------------------------------------

// THIS - zwraca nam obiekt, w którym się znajdujemy

const person = {
    name: "Lukash",
    age: 40,
    printName() {
        console.log(this);
        console.log(this.name); 
        // console.log(name) => patrz niżej;
        // cpnsole.log(person.name) => patrz niżej;
    }
}

// person.printName();

// gdybyśmy w funkcji printName użyli: console.log(name) => to skrypt szukałby zmiennej globalnej o nazwie "name"
// a gdybyśmy użyli: console.log(person.name) => to skrypt szukałby właściwości "name" w jakimkolwiek obiekcie o nazwie "person";
// nazwy obiektów mogą się jednak zmienić, albo możemy wykorzystać te same metody w wielu obiektach
// więc zamiast hardkodować nazwę obiektu, używamy this

// -----------------------------------------

// KONSTRUKTOR - to taka funkcja do tworzenia obiektu
// (konstruktory i klasy piszemy z wielkiej litery)
// this w konstruktorze wskazuje na obiekt stworzony na podstawie tego konstruktora

function User(namex, agex) {

    this.name = namex;
    this.age = agex;
    this.hello = function() {
        console.log(`Hello ${this.name}!`);
    }

}

const newUser1 = new User("Lucas", 40);
const newUser2 = new User("Kasia", 31);
// console.log(newUser1, newUser2);
// newUser1.hello();

// -----------------------------------

// PROTOTYP:
// czyli sposób na dodanie tej samej funkcji lub właściwości do wszystkich obiektów stworzonych na bazie tego samego konstruktora
// możemy sobie taki prototyp podejrzeć w konsoli przy danym obiekcie; 
User.prototype.hello2 = function() {
    console.log(`Hello ${this.name}.toUpperCase`);
}
User.prototype.country = "Polska";

// -----------------------------------------------

// obecnie korzysta się z KLAS, nie z KONSTRUKTORÓW
// a więc KONSTRUKTOR jeszcze raz:
function Car(brand, model, color) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.hello = function() {
        console.log(`Hello ${this.brand} ${this.model}!`);
    }
}
const newCar = new Car("opel", "astra", "silver") 
// newCar.hello()

// a teraz PROTOTYP:
Car.prototype.sayColor = function() {
    console.log(`You're ${this.color}`);
}
// newCar.sayColor()

// no i wreszcie KLASA (taka nakładka na konstruktor)
// w klasie mamy osobno konstruktor i osobno metody (zamiast prototypu)
class Animal {

    constructor(name, age, sound) {
        this.name = name;
        this.age = age;
        this.sound = sound;
    }

    makeSound() {
        console.log(`Animal goes ${this.sound}`);
    }
    
}

// EXTENDS
// klasa DOG dziedziczy w ten sposób po klasie ANIMAL
class Dog extends Animal {}
const dog = new Dog("Azor", 7, "hau");
console.log(dog);
console.log(dog.makeSound());

