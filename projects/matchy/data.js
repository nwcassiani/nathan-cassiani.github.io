/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create empty object animal
var animal = {};
// add species property
animal.species = "Cat";
// add name property
animal['name'] = "Tiger";
// add noises property
animal.noises = [];
// log to console
// console.log(animal);
//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create noises variable
var noises = [];
// add value to noises using bracket notation
noises[0] = "growl";
// add another value with an array method
noises.push("hiss");
// add another value to front of array
noises.unshift("meow");
// add another value to end of array
noises[noises.length] = "roar";

// console.log(noises.length);
// console.log(noises[noises.length - 1]);
// console.log(noises);
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;
animal.noises.push("grr");
// console.log(animal);
/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
// push animal object to animals
animals.push(animal);

// log animal
// console.log(animals);

// create duck variable
var duck = {
  species: "duck",
  name: "Jerome",
  noises: ["quack", "honk", "sneeze", "woosh"]
};
animals.push(duck);
// log to console
// console.log (animals);
// create 2 more animals
var dog = {
  species: "dog",
  name: "Roxy",
  noises: ["woof", "whine", "growl"]
};

var bear = {
  species: "bear",
  name: "Otto",
  noises: ["growl", "roar"]
};

// push bear and dog to animals
animals.push(dog);
animals.push(bear);

// log to console
console.log(animals);
console.log(animals.length);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// use array for a list of friends, as arrays denote a list of values
var friends = [];

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}