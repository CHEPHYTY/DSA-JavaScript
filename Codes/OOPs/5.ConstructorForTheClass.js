/**
 * solution for the memory for the redundancy problem is 
 * using constructor
 */


class CreateUser {

    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    getBirthYear() {
        return new Date().getFullYear() - this.age
    }

    getFullName() {
        return (this.firstNaem + " " + this.lastName)
    }
}