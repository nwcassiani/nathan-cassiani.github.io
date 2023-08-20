/**
 * OPERATORS
 * 
 * 0. In Javascript, operators are special symbols used to perform operations on operands (values and variables). Operators 
 * are used to assign values, perform arithmetic operations, compare values, and more. 
 * 
 * 1. Assignment operators are used to assign value to variables. The "=" operator is called the assignment operator; using it 
 * assigns value to a variable.
 * 
 * 2. Arithmetic operators are used to perfrom arithmetic on values. Most commonly we would think of using arithmetic operators 
 * on Number values, but we can also use the + operator to concatenate strings.
 * 
 * 3. Comparison operators are used in logical statements to determine equality or difference between values and variables. They  
 * can be used in conditional statements to compare values and take action depending on the result.
 * 
 * 4. Logical operators are used to determine the logic between variables or values
 * 
 * 5. A unary operation is an operation with only one operand.
 * 
 * 6. The ternary operator, or conditional operator, assigns a value to a variable based on some condition. This is the
 * only operator in Javascript that takes on three operands: a condition followed by a ?, then an expression to execute if the 
 * condition is truthy followed by a :, and finally the expression to execute if the condition is falsey. This operator is 
 * frequently used as an alternative to an if...else statement.
 */

// 6. Ternary Operator
// Syntax: condition ? exprIfTrue : exprIfFalse
// condition: an expression whose value is used as a condition
// exprIfTrue: an expression which is executed if the condition evaluates to a truthy value
// exprIfFalse: an expression which is executed if the condtion evaluates to a falsey value
var myAge = 37;
var drink = myAge >= 21 ? "Wine" : "Water";
console.log(drink); // prints "Wine" to console
// Can also be chained similar to an if...else chain