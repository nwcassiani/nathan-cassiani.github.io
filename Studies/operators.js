/**
 * OPERATORS
 * 
 * 0. In Javascript, operators are special symbols used to perform operations on operands (values and variables). Putting an
 * operator between two values will apply it to those values and produce new values. Operators are used to assign values, 
 * perform arithmetic operations, compare values, and more. Binary operators are the most common, operating on two values to the right and 
 * left of the operator. However there are also unary operators and the ternary operator.
 * 
 * 1. Assignment operators are used to assign value to variables. The "=" operator is called the assignment operator; using it 
 * assigns value to a variable.
 * 
 * 2. Arithmetic operators are used to perfrom arithmetic on values. Most commonly we would think of using arithmetic operators 
 * on Number values, but we can also use the + operator to concatenate strings.
 * 
 * 3. Comparison operators are used in logical statements to determine equality or difference between values and variables, and are one way
 * to produce Boolean values. They can be used in conditional statements to compare values and take action depending on the result.
 * 
 * 4. Logical operators are used to determine the logic between variables or values, and are typically used with Boolean values. Javascript
 * supports three logical operators: && (and), || (or) and ! (not, also called the bang operator).
 * 
 * 5. A unary operator operates on only one value.
 * 
 * 6. The ternary operator, or conditional operator, assigns a value to a variable based on some condition. This is the
 * only operator in Javascript that takes on three operands: a condition followed by a ?, then an expression to execute if the 
 * condition is truthy followed by a :, and finally the expression to execute if the condition is falsey. This operator is 
 * frequently used as an alternative to an <if...else> statement.
 */

// 1. Assignment Operators
// Using <=> assigns a value to the right of the operator to a variable on the left of it
var myVar = "hello"; // the = operator assigns the string value of “hello” to the variable myVar; 

// Javascript has compound assignment operators, which combine = with arithmetic operators. 
// Addition assignment operator
x += y // x = x + y
// Subtraction assignment operator
x -= y // x = x - y
// Multiplication assignment operator
x *= y // x = x * y
// Division assignment operator
x /= y // x = x / y
// Remainder assignment operator
x %= y // x = x % y
// Exponential assignment operator
x **= y // x = x ** y

// 2. Arithmetic Operators
// Perform arithmetic on values
// Addition + 
var x = 5 + 2; // x = 7
// Subtraction -
x = 5 - 2; // x = 3
// Multiplication *
x = 5 * 2; // x = 10
// Division	/
x = 5 / 2; // x = 2.5
// Exponentiation ** 
x = 5 ** 2; // x = 25
// Remainder %
x = 5 % 2; // x = 1
// Increment ++
x++; // x = x + 1
// Decrement -- 
x--; // x = x - 1

// Concatenation Operator: the + operator is also used to concatenate string values
var firstName = "Nathan"; 
var lastName = "Cassiani";
console.log(firstName +  " " + lastName); // prints “Nathan Cassiani”

// 3. Comparison Operators
// < == > Loose Equality: Will compare two values and force type coercion
console.log("3" == 3); // string value of 3 is "loosely equal" to number value of 3, so this will print => true

// < === > Strict Equality: Will compare to values but will not force type coercion
console.log("3" === 3); // will print => false

// > : Greater than
// >=  Greater than or equal to
// < : Less than
// <= : Less than or equal to 
console.log(100 > 200); // prints => false

// We can use comparison operators to produce Boolean values, which will influence how our code runs
if (200 >= 100) { // if true... which it is
    // code here will execute
    console.log("Very True");
}

// 4. Logical Operators
// The and (&&) operator results in true only if both values given to it are true
console.log(true && true); // prints => true
console.log(true && false); // prints => false

// The or (||) operator results true if either of the values given to it are true
console.log(true || false); // prints => true

// The not (!) operator (also called bang operator) flips the value given to it. 
console.log(!true); // prints => false 
console.log(!false); // prints => true
// The ! operator is also an example of a unary operator

// 5. Unary Operators
// the delete operator deletes a property from an object
var myObj = {
    name: "Nathan",
    age: 37
};
delete myObj.age;
console.log(myObj); // prints { name: "Nathan" } to console, age property has been removed

// typeof operator 
// the typeof operator returns a string indicating the type of value passed to the operator
console.log(typeof myObj.name); // prints => string

// The unary negation (-) operator precedes it's operand and negates it
let x = 4;
let y = -x;
console.log(y); // prints => -4

// 6. Ternary Operator
// Syntax: condition ? exprIfTrue : exprIfFalse
// condition: an expression whose value is used as a condition
// exprIfTrue: an expression which is executed if the condition evaluates to a truthy value
// exprIfFalse: an expression which is executed if the condtion evaluates to a falsey value
var myAge = 37;
var drink = myAge >= 21 ? "Wine" : "Water";
console.log(drink); // prints "Wine" to console
// Can also be chained similar to an if...else chain