/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// declare search function
function search(animals, name) {
    // looks through animals array 
    for (var i = 0; i < animals.length; i++) {
        // if name of animal exists 
        if (name === animals[i].name) {
            // return animals object
            return animals[i];
            // if name not found return null
        } 
    }
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// declare replace function
function replace(animals, name, replacement) {
    // loop through animals array
    for (var i = 0; i < animals.length; i++) {
        // if name exists within array
        if (name === animals[i].name) {
            // replace object with replacement
            animals[i] = replacement;
        }
    }
    // otherwise do nothing
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// declare remove function
function remove(animals, name) {
    // // loop through animals
    for (var i = 0; i < animals.length; i++) {
    //     // if name exists
         if (name === animals[i].name) {
             return animals.splice(animals[i], 1);
         }
     }

}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// declare add function
function add(animals, animal) {
    // loop through animals array
    // checks that animal object has a name property with length > 0
    // checks that animal object has a species property with length > 0
    // checks that animal object has a unique name
    // add new animal to animals only if all these conditions pass
    for (var i = 0; i < animals.length; i++) {
        if (animal.name.length > 0 && animal.species.length > 0 && animal.name.toLowerCase() !== animals[i].name.toLowerCase()) {
            return animals.push(animal);
        } else if (animal.name.toLowerCase() === animals[i].name.toLowerCase()) {
            return false;
        }
    }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
