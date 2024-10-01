/**
 * OOP and Factory functionFour PIllars of Object Oriented Programming
 *
 *  - Encapsulation
 *  - Abstraction
 *  - Inheritance
 *  - Polymorphism
 */

// Creating a Object

const user = {
    firstName: 'Soumya',
    lastName: 'Hembram',
    age: 22,
    getAgeYear: function () {
        return new Date().getFullYear() - this.age
    }
}