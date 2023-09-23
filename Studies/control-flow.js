/**
 * 
 * CONTROL FLOW
 * 0. Control Flow is the order in which statements are executed in a program. The default control flow is 
 * for statements to be read and executed in order from left-to-right, top-to-bottom in a program file. 
 * However, this flow can be changed if the program runs across structures that change it, such as
 * conditionals. Conditional structure, or <if...else> is used to direct the flow of our code: if a 
 * question resolves to true, our code will do one thing; if it resolves to false, it will do something else.
 * 1. If: To start a conditional block of code, you first use an if statement.
 * 2. Else If: After the if statement, you can chain together any number of <if..else> statements to direct
 * your code.
 * 3. Else: You can end your code with an else statement which functions as a default statement.
 * 4. Switch: A switch statement can be used as an alternative to if... else statements in some cases, where
 * it may result in cleaner code. 
 */

// if
let color = 'black';
let reaction; 
// if this condition resolves to true, the following code will run. If it resolves to false, following code will not run
if (color === 'white'){ // resolves to false
    reaction = 'bright'; // this code doesn't run
}

console.log(reaction); // prints => undefined

// else if
if (color === 'white'){ // false
    reaction = 'bright';
    // we can further direct our code by adding else if statements
    // else if: previous code resolved to false, check if the following condition is true
} else if (color === 'black'); // true
    reaction = 'dark'; // this code executes
    // You can add as many else if's as you'd like. They will only execute as long as previous conditions resolved to false
    // once a condition evaluates to true in your code, the immediate following code will be executed and following conditions will not be evaluated

console.log(reaction); // prints => dark

// else
color = 'red';
if (color === 'white'){ // false
    reaction = 'bright';
} else if (color === 'black'){ // false
    reaction = 'dark'; 
} else { // else: provides a default code; if all previous conditions resolve to false, following code will run:
    reaction = 'unclear';
}
console.log(reaction); // prints => unclear

// switch 
color = 'yellow';
/* switch statements will evaluate an input expression, match the expression to a case clause, and execute
statements associated with that case
*/
switch (color) {
    case 'red': 
    case 'blue':
    case 'yellow': // if red, or blue, or yellow
        console.log('This is a primary color'); // this code will run
        break; // break statement ends a case. Failure to include a break statement will cause following code to execute
    case 'orange':
    case 'green':
    case 'purple':
        console.log('This is a secondary color');
        break;
    default:
        console.log('Probably a tertiary color');
}