//  1 -> What is Polymorphism in Javascript ?

/**
 * Polymorphism is one of the core concepts of object-oriented 
 * programming where @Poly means @many and @morphism means @transforming
 * that means transforming one form into another.
 * 
 * Polymorphism means the same function with different signatures 
 * is called many times
 */

class FirstClass {
    add() {
        console.log("ADD Method of First Class")
    }
    remove() {
        console.log("REMOVE Method of First Class")
    }
}

class SecondClass extends FirstClass {
    add() {
        console.log("ADD Method of Second Class")
    }
}

class ThirdClass extends SecondClass {
    add() {
        console.log("ADD Method of Third Class")
    }
}

const obj1 = new FirstClass()
const obj2 = new SecondClass()
const obj3 = new ThirdClass()

console.log("Function of First Class")
console.log(obj1.add())
console.log("Function of Second Class")
console.log(obj2.add())
console.log("Function of Third Class")
console.log(obj3.add())

console.log(obj1.remove())
console.log(obj2.remove())
console.log(obj3.remove())


/**
 * In the above code we can see the example of Polymerphism from one class to 
 * another 
 * 
 * But there is also another concept of Overriding
 * Like we can see that add function is override in class SecondClass() 
 * as well as ThirdClass()
 * 
 */