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
        if (current.age > accumulator.age) {
            return current;
        } else {
            return accumulator;
        }
            // return current
        // else
            // return accumulator
    }); // NO SEED => result = array[0] // {Adele Mullin}
    return oldest.name;
    // return oldest customer's name

};

var youngestCustomer = function(array){
    // use reduce to return the youngest customer object in the array
    let youngest = _.reduce(array, function(accumulator, current){
        // is the current customer in the array younger than the accumulator
        if (current.age < accumulator.age) {
            return current;
        } else {
            return accumulator;
        }
            // return current
        // else
            // return accumulator
    }); // NO SEED => result = array[0] // {Adele Mullin}
    return youngest.name;
    // return youngest customer's name
};

var averageBalance = function(array){
    // output number
    let total = 0;
    // for loop
    for (let i = 0; i < array.length; i++){
        // access balance value, replace chars, add to total
        total += parseFloat(array[i].balance.replace(/[$,]/g, ""));
    }
    return total / array.length;

    // return total divided by array.length
}; 
    // loop through customers array, add balances together, divide by total number of customers
    // need to remove dollar signs and commas from balance string, then can parseFloat

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
    // customer is a string 
    // Find how many friends of a given customer have names that start with a given letter
    // init total variable
    let total = 0;
    // loop through input array, push friends array to output
    for (let i = 0; i < array.length; i++){
        if (array[i].name === customer){
            var output = array[i].friends;
        }
    }
    // loop through output and compare names[0] with letter input
    for (let i = 0; i < output.length; i++){
      if (output[i].name[0].toLowerCase() === letter.toLowerCase()){
        total += 1;
      }
    }


    // return total
    return total;
};

var friendsCount = function(array, name){
    // use reduce?
    // return an array
    // Find the customers' names that have a given customer's name in their friends list
    var output = [];
    for(var i = 0; i < array.length; i++){
      for(var j = 0; j < array[i].friends.length; j++){
        if(Object.values(array[i].friends[j]).includes(name)){
          output.push(array[i].name);
        }
      }
    }
  return output;
      
};


var topThreeTags = function(array){
    // Find the three most common tags among all customers' associated tags
    // output an array with top three tags
    // customers is an array of objects
    // each customer obj has a key called tags with an array of tags
    // loop through customers and push values from tags into output array
    
}; 

var genderCount = function(array){
    // want to return an obj
    // use reduce with empty obj as seed
    let genderObj = _.reduce(array, function(acc, current){
        // acc = {}
        // determine if current gender already exists as akey
        if (acc[current.gender] === undefined){
            acc[current.gender] = 1;
        } else {
            acc[current.gender] += 1;
        }
    return acc;

    }, {});

    return genderObj;
}; // !!

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
