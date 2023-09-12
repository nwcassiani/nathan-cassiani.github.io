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
  console.log(count); // will execute until count = 10
  count++; // how much our code will increment each iteration, here by 1
}

// For loops