'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: Designed to take in any value, and return that value unchanged
 * 
 * @param {value} value: any value
 */

function identity(value) {
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: Designed to determine value type of input value
 * 
 * @param { value } any: The value which to evaulate
 */

function typeOf(value) {
    if (Array.isArray(value)) {
        return "array";
    } else if (value === null) {
        return "null";
    } else {
        return typeof value;
    }
    
}

module.exports.typeOf = typeOf;

/**
 * last: Designed to return the last <number> of items in an array.
 * 
 * @param {Array} array: The array to draw values from
 * @param {Number} number: The number of values to return, starting from the last value of the input array
 */
function last(array, number) {
    // if array is not an array, return []
    if (!(Array.isArray(array)) || number < 0) {
        return [];
        // if number is not given or NaN, return first element in array
    } else if (isNaN(number) || !number) {
        return array[array.length-1];
    } else {
        // return last <number> elements in array
        return array.slice(-number);
    }
}
module.exports.last = last;