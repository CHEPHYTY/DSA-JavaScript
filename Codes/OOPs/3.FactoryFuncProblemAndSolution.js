/**
 * Now it have a problem of memory consumption such that it 
 * consume lot of due to redundant call for the getAreYear each 
 * time i create the new object using factory function
 */

function createUser(firstName, lastName, age) {
    const user = {
        firstName,
        lastName,
        age,
        getBirthYear: createUser.commonMethods.getBirthYear

    }
    return user
}

createUser.commonMethods = {
    getBirthYear() {
        return new Date().getFullYear() - this.age;
    }
}


const user1 = createUser("Soumya", "Hembram", 23)
const user2 = createUser("Soumya", "Sanat", 22)
console.log(user1)
console.log(user2)