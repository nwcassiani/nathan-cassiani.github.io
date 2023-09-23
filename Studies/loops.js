/**
 * LOOPS
 * 0. Loops offer a quick and easy way to repeat an action in our code a certain number of times. The various
 * loop mechanisms offer different ways to determine the start and end points of the loop. There are various 
 * situations that are more easily served by one type of loop over the others.
 * 1. A while loop loops through a block of code as long as a specified
 * condition is true. For loops loop over a block of code until a specified condtion evaluates to false. For
 * in loops are designed to loop over objects. 
 * 2. The various loop mechanisms offer different ways to determine the start and end points of the loop. 
 * 3. We can use for loops to loop over arrays, forwards and backwards.
 * 4. We can use a for in loop to loop over objects.
 */

// 1. 
// While loops
let count = 0; // count declaration creates a starting value for out while loop
while(count < 10){ // (condition) while true, following code will execute
  console.log(count); // will execute until count = 10, so will print numbers 0-9 to console
  count++; // how much our code will increment each iteration, here by 1
}

// for Loops
// following code produces same results as while loop above
//   (  start :  stop ; increment)
for (let i = 0; i < 10; i++){
    console.log(i); // code to execute; will print => 0 1 2 3 4 5 6 7 8 9 
}
// start: at what point our loop will begin iterating. Here, starting at zero, and will iterate while i is less than 10
// stop: at what point our loop will stop iterating. Here, when i = 10, the following code will not execute and iterations will stop
// increment: the rate at which the value of i will increase (or decrease). Here, i will be reassigned in increment by 1 on each iteration

// we can decrement instead of increment, and change the amount by which we increment/decrement
// here the start value is the upper limit, and stopping point is 0
for (let i = 10; i >= 0; i -= 2){
    console.log(i); // will print => 10 8 6 4 2 0 to console
}

// We can use for loops to iterate over arrays
let arr = [1, 2, 3, 4, 5];
for (let i = arr.length - 1; i >= 0; i--){ // starting point needs to be array.length - 1 
  console.log(arr[i]); // prints => 5 4 3 2 1
}
for (let i = 0; i < arr.length; i++){ // stop value needs to be < arr.length or <= arr.length - 1
  console.log(arr[i]); // prints => 1 2 3 4 5
}

// For in Loops: Looping over an object
const obj = { a: 1, b: 2, c: 3 };
/*
for (variable in object){
  statement
}
variable: receives a string property name on each iteration 
object: the object to be iterated over
statement: statement to be executed on each iteration
*/
for (let key in obj){
  console.log(key); // prints keys
  console.log(obj[key]); // prints values
} // prints => a 1 b 2 c 3 