/**
 * 
 * VARIABLES
 * 
 * 0: Variables are named identifiers that can point to a value of a particular type, such as strings, numbers, Booleans, 
 * arrays, objects, and other data types. We use variables to hold values in memory during the lifecycle of our program. 
 * You can assign data to variables and then refer to the data simply by naming the variable. Variables are called so 
 * because we can change the value (and type of value) to which they point. 
 * 
 * 1: Declaration and assignment: To declare a variable we use a keyword (var, let or const) followed by an identifier, 
 * or name. We use an assignment operator to assign value to our variable.
 * 
 * 2: var, let, const: When Javascript was initially created, var was the only keyword you could use to declare variables.
 * To remedy some problems with the var keyword, Javascript introduced the keywords let and const.
 * 
 * 3: Hoisting: Hoisting is Javascript's default behavior of moving declarations to the top of the current scope. 
 * Variables defined with var are hoisted to the top of their scope.
 */

// 1. Declaration and Assignment
// At the declaration phase, the variable is undefined because we have not initialized (assigned value) it to anything
var myName;
console.log(myName); // prints => undefined

// Initialization is another way of saying we've assigned the created variable to a value
myName = "nathan"; // since myName has already been declared, we do not need to use var keyword at assignment
console.log(myName); // prints => nathan

// Declaration and assignment can be done at the same time
var firstName = "nathan";
console.log(firstName); // prints => nathan

// Once initialized, variables can be reassigned to new values
firstName = "william";
console.log(firstName); // prints => william

// 2. var, let and const
// var: as shown above, var variables can be reassigned, and can be initialized as undefined.
// var can also be redeclared (which is a problem, can result in confusing code)
var myName = "william"; // this declaration is hoisted and overrides the previous declaration of myName
console.log(myName); // prints => william 

// let: like var, let variables can be reassigned and can be initialized as undefined.
// However, they cannot be redeclared; their declarations are not hoisted like var variables
let lastName = "cassiani";
// let lastName = "william" => I have this redeclaration commented out as it is throwing an error in my code
// let is naturally block scoped

// const: like let, const variables are naturally block-scoped,they cannot be initialized as undefined, or redeclared
// However, they cannot be reassigned. If const is used on an object, though, it's properties can be added, updated, or removed
// const names; // this is commented out for throwing an error in my code
// console.log(names); // SyntaxError: Missing initializer in const declaration

const firstNames = [];
firstNames.push("Nathan"); // this is okay, values can be added to const arrays and const objects
console.log(firstNames); // prints => [ 'Nathan' ]

/* var is function scoped; let and const are block scoped. This means that var variables will be stuck in the scope of
a function, but not in the scope of if/else statements, or loops. let and const will be stuck in scope of any code 
block (block scoped)
*/
if (true) {
    var x = 10;
    let y = 20;
    const c = 30;
}
console.log(x); // prints => 10
console.log(y, z); // prints => Reference Error; y and z not defined

function someFunc() {
    var x = 10;
}

someFunc();
console.log(x); // will throw error, x is not defined

// 3. Hoisting
// Variable declarations are hoisted to the top of their scope, but not initialization

console.log(fullName); // prints => undefined

var fullName = 'Nathan Cassiani';

console.log(fullName); // prints => Nathan Cassiani

// let and const variables are not hoisted. You will get a reference error if you try referencing them before declaration
console.log(city); // will throw reference error; though the system can see the initialization, you won't be able to access the variable
console.log(job); // will throw reference error; same as above

let city = 'New Orleans';
const job = 'musician';