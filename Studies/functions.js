/**
 * 
 * FUNCTIONS
 * 
 * 0. Functions allow us to encapsulate a block of code, pass around this block of code in our program, and execute
 * this block of code whenever and however many times we want. Functions should take some input and return an output 
 * where there is some obvious relationship between the input and the output. To use a function, you must define it 
 * somewhere in the scope from which you wish to call it.
 * 1. There are two phases to using a function: First, the declaration or defintion, which creates the function, and
 * second, the calling or invocation of a function, which executes or uses the function.
 * 2. Functions take inputs, which we call parameters. They can take as many parameters as we want, or they can take
 * no parameters. Arguments are the values which our functions take in when we invoke functions. So, parameters are
 * like placeholders for arguments.
 * 3. The syntax for a named function starts with the keyword function followed by a name for the function, then 
 * parentheses which contain the parameters, then curly braces which contain the code block.
 * 4. To assign a function to a variable, called a function expression, we declare a variable with keyword and name 
 * and assign to it the value of a function defintion. Since the name of the variable is the name of the function,
 * here the name is not include between the keyword function and parameters in parenthesis.
 * 5. We specify our functions inputs as the functions parameters. Functions can optionally take inputs. Our
 * functions' output is determined by what our function returns. Once again this is optional.
 * 6. Functions can see and modify variables in parent or global scope. However outer scoped variables cannot do the 
 * same to variables in inner scopes.
 * 7. A closure is when a function references variables from an outer scope and keeps them alive. Nested functions,
 * or functions within functions, form a closure: the inner function can use the arguments and variables of the outer
 * function, while the outer function cannot use the arguments and variables of the inner function.
 */

// 1. Declaration
function add(x, y){
    return x + y;
}

// Invocation
add(1, 2); 

// 2. Parameters & Arguments
function add(x, y){ // x and y are the parameters
    return x + y; 
}
add(2, 3); // 2 and 3 are the arguments

// 3. Named function syntax
function add(x, y){ // function keyword, followed by function name, followed by parameters in parenthesis, curly brace
    return x + y; // code block to execute, output to return
} // closed curly brace

// 4. Function expression

const subtract = function(x, y){ // like a regular variable declaration and assignment, but assigned to a function declaration
    return x - y; // code to execute
}; // semicolon after closed curly brace

// 5. Inputs and Outputs
function add(x, y){ // this function takes two inputs
    return x + y; // and returns the sum of the two inputs
} // the return keyword will explicitly return the value to the right of it

function sayHi(){ // this function takes no inputs
    console.log("Hi!"); // this function returns no value
}

sayHi(); // calling the function will print "Hi!" to the console

// 6. Scope
var myNum = 30; // declared in global scope

function changeNum(){
    myNum += 1; // can access outer scoped variables
}

changeNum(); // invoking the function will reassign value of myNum
console.log(myNum); // prints => 31

// Variables declared within a function have local scope, cannot be accessed directly in global scope
function logThis(){
    var x = "this"; // variable declared in function scope
    console.log(x);
}

logThis(); // invoking function will print "this" to console
console.log(x); // this will print Reference Error: x is not defined. x is only available inside the function it is declared in

// 7. Closure
function sayHello(){
    function waveGoodbye(){
        var bye = "Goodbye"; // variable defined inside nested function
    }
    waveGoodbye();
    console.log(bye); // will not be able to access bye in this scope
}

sayHello(); // throws Reference Error: bye is not defined

function sayHi(){
    var greeting = "Hi";
    function waveGoodbye(){
        greeting = "Goodbye"; // can access outer scoped variable greeting
    }
    waveGoodbye(); // invoking inner function will reassign value to greeting
    console.log(greeting); // prints value to console upon invocation of sayHi
}

sayHi(); // prints => Goodbye