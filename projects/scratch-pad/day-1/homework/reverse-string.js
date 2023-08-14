// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

/*
I: takes parameter of a string
o: returns new string of the characters of the input string in reverse
c: N/A?
e: 
*/

function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    // create storage array
    var storage = [];
    // use a for loop to loop through the string in reverse
    for (var i = input.length - 1; i >= 0; i--) {
    // push values of input[i] to storage array
      storage.push(input[i]);
    }
    // return array split into string
    return storage.join("");
    
    
    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}