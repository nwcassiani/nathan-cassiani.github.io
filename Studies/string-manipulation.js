
/**
 * STRING MANIPULATION:
 * 0. In Javascript, strings are immutable and help us to store text that includes characters, numbers, and
 * unicode. JavaScript includes many built-in functions for creating and manipulating strings in various 
 * ways.
 * 1. There are only two operators that JavaScript supports for modifying a string. These operators allow 
 * you to join one string to another easily. These operators are called “concatenate” (+) and “concatenate 
 * assignment“ (+=). These two operators allow you to join one string to another.
 * 2. JavaScript includes many built-in functions, or string methods, for creating and manipulating strings 
 * in various ways.
 */

// 1. With Operators
// the + operator, or the concatenate operator, can be used to join to strings together
let firstName = 'Nathan ';
let lastName = 'Cassiani';
let fullName = firstName + lastName;
console.log(fullName); // prints => Nathan Cassiani
// the += operator, or concatenate assignment operator, can be used to get the same result, with slightly 
// different syntax
let name = 'Nathan ';
name += lastName;
console.log(name); // prints => Nathan Cassiani

// 2. With string methods
// split() method
// The split() method divides a string into an array of two or more substrings and returns it, 
// depending on the pattern, divider, or delimiter provided.
console.log(fullName.split(' ')); // prints => ['Nathan ', 'Cassiani']
console.log(fullName.split('')); // prints => ['N', 'a', 't', 'h', 'a', 'n', ' ', 'C', 'a', 's', 's', 'i', 'a', 'n', 'i']

//from()
// allows us to make an array from a string value, similar to array.split('');
let nameChars = Array.from(fullName);
console.log(nameChars); // prints => ['N', 'a', 't', 'h', 'a', 'n', ' ', 'C', 'a', 's', 's', 'i', 'a', 'n', 'i']

//spread operator (...)
// another way to make an array from a string value, using the spread operator to the left of the variable name in brackets
let nameArray = [...fullName];
console.log(nameArray); // prints => ['N', 'a', 't', 'h', 'a', 'n', ' ', 'C', 'a', 's', 's', 'i', 'a', 'n', 'i']


// reverse
/* the array method reverse() returns an array of the input array's elements reversed. This can be used to
reverse a string by splitting the string into an array, reversing the elements, then joining the array back
into a string
*/
let reversedName = fullName.split('').reverse().join('');
console.log(reversedName); // prints => inaissaC nahtaN

// toUpperCase() and toLowerCase()
// will convert all characters to upper or lower case, respectively
console.log(fullName.toUpperCase()); // prints => NATHAN CASSIANI
console.log(fullName.toLowerCase()); // prints => nathan cassiani

// repeat()
// a string method, allows us to repeat a string a specified number of times
console.log(fullName.repeat(2)); // prints => Nathan CassianiNathan Cassiani

// replace()
// will replace all specified characters, between / and /g, with a given character in quotes, like so:
console.log(fullName.replace(/a/g, " ")); // prints => N th n C ssi ni
// has replaced all "a" characters with a blank space