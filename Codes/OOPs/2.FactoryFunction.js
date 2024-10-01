
// 1 -> What isFactory Function ?

/**
 * In JavaScript, a factory function is a function that returns an
 *  object. It is a way of creating and returning objects in a more
 *  controlled and customizable manner. Factory functions are a
 * form of design pattern that enables the creation of objects with
 * specific properties and behaviors.
 */


// 2 -> Why it is Useful ?

/**
 * If we have complex logic, and we have to create multiple objects 
 * again and again that have the same logic, we can write the logic
 * once in a function and use that function as a factory to create 
 * our objects. It’s the same as a real-world factory producing 
 * products.
 */

// 3 -> Example:

function createUser(firstName, lastName, age) {
    const user = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        getAgeYear: function () {
            return new Date().getFullYear() - user.age
        }
    }

    return user
}

const user1 = createUser("Soumya", "Hembram", 23)
console.log(user1)
console.log(user1.getAgeYear())