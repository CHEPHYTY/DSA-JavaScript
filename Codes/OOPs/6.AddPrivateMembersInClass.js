/**
 * There is a way to create private member function and data member.
 * and on top of that it is quite tedious 
 */

class CreateUser {
    //Creating Private Data memeber
    #age
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    getBirthYear() {
        console.log(this.#getFullName())
        return new Date().getFullYear() - this.#age
    }
    // Craeting Private function in the Class
    #getFullName() {
        return this.firstName + " " + this.lastName
    }
}

const user1 = new CreateUser("soumya", "ranjan", 22)
const user2 = new CreateUser("soumya", "hembram", 22)

// console.log(user1.getFullName())
console.log(user2.getBirthYear())