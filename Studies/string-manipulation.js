
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

//spread operator

// reverse

// toUpperCase and toLowerCase

// repeat

// replace