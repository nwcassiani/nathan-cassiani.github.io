// #!/usr/bin/env node

'use strict';

const { mapValues } = require('lodash');
var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *      type => cd ..
 *
 *    npm start --prefix ./nathan-cassiani.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    let males = _.filter(array, function(customer) {
        return customer.gender === 'male';
    });
    return males.length;
};

var femaleCount = function(array) {
    // use reduce to return # of female customers
    let females = _.reduce(array, function(accumulator, current){
        if (current.gender === 'female'){
            accumulator += 1;
        }
        return accumulator;
    }, 0);

    return females;
};

var oldestCustomer = function(array) {
    // use reduce to return the oldest customer object in the array
    let oldest = _.reduce(array, function(accumulator, current){
        // is the current customer in the array OLDER than the accumulator
        if (current.age > accumulator) {
            return current.name;
        } else {
            return accumulator;
        }
            // return current
        // else
            // return accumulator
    }); // NO SEED => result = array[0] // {Adele Mullin}
    return oldest;
    // return oldest customer's name

};

var youngestCustomer = function(array){
    // loop through array
    // find youngest customers age
    // return name of that customer

};

var averageBalance; // skip til next week

var firstLetterCount = function(array, letter){
    // loop through array
    // if array[i].name[0] === letter, push name to storage array
    // return storage array.length
    // init storage array
    let storage = [];
    for (let i = 0; i < array.length; i++){
        if (array[i].name[0].toLowerCase() === letter.toLowerCase()){
            storage.push(array[i].name);
        }
    }
    return storage.length;
};


var friendFirstLetterCount = function(array, customer, letter){
    // loop through array
    // 
    // return storage array.length
    // init storage array
    let storage = [];
    for (let i = 0; i < array.length; i++){
        if (array[i].name[0].toLowerCase() === letter.toLowerCase()){
            storage.push(array[i].name);
        }
    }
    return storage.length;
};

var friendsCount = function(array, name){
    // use map?
    // return an array with all the customers that have the given name in their friends list
    // friends is an array of objects, which have a friends key
    var output = [];
    // loop through array
    for (var i = 0; i < array.length; i++){
        if (array[i].friends.includes(name)) {
            output.push(array[i].name);
        }
    }
    return output;
};


var topThreeTags; // !!

var genderCount; // !!

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
