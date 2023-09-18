/**
 * DATA TYPES
 * 
 * 0. Data types are how we categorize different types of data in Javascript. They have some unique and 
 * shared properties between them, and allow for the Javascript interpreter to work with different kinds of
 * data.
 * 1. Number refers to numeric data.
 * 2. String refers to textual or character data. The position of a character in a string is the character's
 * index.
 * 3. A Boolean is a logical data type and has two values: true or false.
 * 4. An array is a zero-indexed list of values stored inside brackets. They can store different data types.
 * It is a type of object, and is therefore a complex data type.
 * 5. An object is a collection of key/value pairs, called properties, stored inside curly braces. The values
 * in an object are stored at specific keys.
 * 6. A function is a set of statements that performs a task or calculates a value. A function should take 
 * some sort of input and return some output, with some type of relationship between the input and output.
 * 7. undefined refers to a value that has no value, or is not initialized.
 * 8. The null data type refers to a value that is intentionally nullified by the programmer, and has one
 * value: null. <null> indicates the absence of an object, as opposed to the absence of a value.
 * 9. NaN refers to not-a-number. It is a special kind of number value that's typically encountered when the 
 * result of an arithmetic operation cannot be expressed as a number. It is the only value in Javascript that
 * is not equal to itself.
 * 10. Infinity is a numeric value representing infinity. The value of (positive) Infinity is greater than any
 * other number. -Infinity is the same as the negative value of infinity.
 * 11. Simple or primitive data is atomic and immutable. They do not hold, collect, or aggregate other 
 * values. Operations on simple values return new values, they do not alter the original value. Complex 
 * values aggregate other values and therefore are of indefinite size
 * 
 * 12. Primitive data types are copied by value; they are copied from one variable to the next when
 * assigning or passing. Complex data types are copied by reference; they are passed by reference when 
 * assigning or passing.
 */

// 1. Number
// Numbers are commonly represented in literal form
let num = 19; // nineteen

// 2. String
var myStr = "stringy";
console.log(myStr[0]); // prints => s; the character at the zero index

// 3. Boolean
// a truth value: true or false
var myBool = true;
// if statements will resolve to a boolean value
if (myBool === false){ // this is false
    // therefore code here will not execute
}

// 4. Array
const myArray = [2, "nathan", true]; // values stored between brackets, can store different data types
console.log(myArray[1]); // prints => nathan 

// 5. Object
const myObj = {
    name: "Nathan",
    age: 37,
    isStudent: true,
    location: "New Orleans"
}; // values stored inside curly braces; values stored at specific keys
console.log(myObj.name); // can access values by using dot notation and key name, prints => Nathan
console.log(myObj['name']); // can also use bracket notation, prints same value as above

// 6. Function
function add(num1, num2) { // function takes some input, like num1 and num2 here which represent number values
    return num1 + num2; // and uses those inputs to return some output, here adding the two numbers together
}
console.log(add(1, 2)); // prints => 3

// 7. undefined
let someValue; // someValue has been declared but no value assigned
console.log(someValue); // trying to print to console will return undefined, as a result

// 8. null
// written as a literal: null
var none = null; // variable none is known to exist but has no type or value

// 9. NaN
// a failed number conversion will return NaN
console.log(parseInt("blahblah")); // prints => NaN

// 10. Infinity
console.log(10 ** 1000); // prints => Infinity; trying to access any number beyond the upper limit for 
// floating point numbers will return Infinity
//-Infinity
let x = -1.797693134862316E+308;
console.log(x); // prints => -Infinity; trying to access a number that exceeds the lower limit for floating
// point numbers will return -Infinity

// 11. Simple Data Types: copy by value
let num1 = 7;
num1 += 1;
console.log(num1); // prints => 8; you can't change a number value; you can't change the value 7 to the value 8
// Rather, you can add 1 to 7 to change the value of the variable num1
let num2 = num1;
num2 -= 1;
console.log(num1); // still prints => 8; while the value stored in num1 was copied into num2, changing the value
// of num2 will not affect the value stored in num1;
// Complex Data Types: Copy by reference
var obj1 = { one: "hello"};
var obj2 = obj1; // value stored in obj2 is a reference to the value stored in obj1 ,they both point to same object
obj2.one = "hello world";
console.log(obj1); // prints => { one: 'hello world' }
// changing the value at obj2 changes obj1 because obj2 points to the reference in memory where obj1 is stored
// obj1 === obj2


