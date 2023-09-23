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
 * identity: Designed to take in any value
 * 
 * @param {value} value: any value
 * 
 * @returns {value}: Returns input value unchanged
 */

function identity(value) {
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: Designed to determine value type of input value
 * 
 * @param { value } any: The value which to evaulate
 * 
 * @returns { String }: Returns the type of input value as a string
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
 * first: Designed to take in an array and access the first <number> of values in the array
 * 
 * @param {Array} array: The array to draw values from
 * @param {Number} number: The number of values to return, starting from the first value of the input array
 * 
 * @returns {Array}: Returns an array of the first <number> values in the array, or returns an empty array if input array is not an array
 * @returns {Value}: Returns value at zero index of input array, if no input <number> or NaN is passed as an argument
 */

function first(array, number) {
    if (!(Array.isArray(array)) || number < 0) {
        return [];
    } else if (isNaN(number) || !number) {
        return array[0];
    } else {
        return array.slice(0, number);
    }
}
module.exports.first = first;

/**
 * last: Designed to access the last <number> of items in an array.
 * 
 * @param {Array} array: The array to draw values from
 * @param {Number} number: The number of values to return, starting from the last value of the input array
 * 
 * @returns {Array}: Returns an array of the last <number> values in the array, or returns an empty array if input array is not an array
 * @returns {Value}: Returns value at last index of input array, if no input <number> or NaN is passed as an argument
 */
function last(array, number) {
    if (!(Array.isArray(array)) || number < 0) {
        return [];
    } else if (isNaN(number) || !number) {
        return array[array.length-1];
    } else {
        return array.slice(-number);
    }
}
module.exports.last = last;

/**
 * indexOf: Designed to iterate over an array and find the index of a given value
 * 
 * @param {Array} array: The array over which to iterate
 * @param {Value} value: the value to find the index of, if array contains the value
 * 
 * @returns {Number}: Returns a number representing the index of the input value in the input array
 */

function indexOf(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
}
module.exports.indexOf = indexOf;

/**
 * contains: Designed to iterate over an array and determine if the input value is found in the array
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Value} value: the value to look for in the input array
 * 
 * @returns {Boolean}: Returns true if input value is found in the input array, returns false if not
 */
function contains(array, value) {
    let check = false;
    for (var i = 0; i < array.length; i++) {
        check = array[i] === value ? true : check;
    }
    return check;
}
module.exports.contains = contains;

/**
 * unique: Designed to loop over an array, and applies the index0f function to find first instance of an element from the input 
 * array
 * 
 * @param {Array} array: The array over which to iterate.
 * 
 * @returns {Array}: Returns a new array without any duplicate values
 */

function unique(array) {
    let output = [];
    for (var i = 0; i < array.length; i++) {
        if (_.indexOf(array, array[i]) === i) {
            output.push(array[i]);
        }
    }

    return output;
}

module.exports.unique = unique;

/**
 * filter: Designed to loop over an array, applying the action function to each value in the array
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Function} func: The function to be applied to each value in the array
 * 
 * @returns {Array}: Returns a new array for which the action function returned true.
 */
function filter(array, func) {
    let output = [];
    for (var i = 0; i < array.length; i++) {
        if(func(array[i], i, array) === true) {
            output.push(array[i]);
        }
    }
    return output;
}
module.exports.filter = filter;

/**
 * reject: Designed to loop over an array, applying the action function to each value in the array
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the array
 * 
 * @returns {Array}: Returns a new array of elements for which the action function returned false
 */
function reject(array, func) {
    let output = [];
    for (var i = 0; i < array.length; i++) {
        if (func(array[i], i, array) === false){
            output.push(array[i]);
        }
    }
    return output;
};

module.exports.reject = reject;

/**
 * partition: Designed to loop over an array, apply the function to each element in the array, and return an
 * array with 2 nested arrays: one for truthy values, and one for falsey values
 * 
 * @param {Array} array: The collection over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the 
 * array
 * 
 * @returns {Array}: Returns an array with 2 nested arrays: one filled with the elements for which the action function returned true,
 * and one filled with the elements for which the action function returned false
 * 
 */
function partition(array, func) {
    let truArr = [];
    let falseArr = [];
    for (var i = 0; i < array.length; i++) {
        if (func(array[i], i, array) === true) {
            truArr.push(array[i]);
        } else if (func(array[i], i, array) === false) {
            falseArr.push(array[i]);
        }
    }
    return [truArr, falseArr];
}
module.exports.partition = partition;

/**
 * map: Designed to loop over a collection, Array or Object, and applies the action Function to each value in the collection
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * 
 * @returns {Array}: Returns an array containing each value returned from the action function call
 */
function map(collection, func) {
    let output = [];
    if(Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            output.push(func(collection[i], i, collection));
        }
    } else if (typeof collection === 'object'){ 
        for (var key in collection) {
            output.push(func(collection[key], key, collection))
        }
    }
    return output;
}
module.exports.map = map;

/**
 * pluck: Designed to loop over an array, and applies the map function to the array to find the value stored
 * at the input prop for each element in the array.
 * 
 * @param {Array} array: The collection over which to iterate.
 * @param {Property} prop: The property from which to return value to the output array
 * 
 * @returns {Array}: Return an array containing the value at <prop> for each element in <array>
 */

function pluck(array, prop) {
    return _.map(array, function(array){
        return array[prop];
    });

}
module.exports.pluck = pluck;

/**
 * every: Designed to loop over a collection, Array or Object, and applies the 
 * Function to each value in the collection
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the 
 * collection
 * 
 * @returns {Boolean}:  Returns true when action function returns true for every element in input collection. Returns false if action
 * function returns false for any element in input collection. If no input function is passed as an argument, return true if every
 * element in input collection is truthy, or return false if otherwise.
 */
function every(collection, func) {
    if (Array.isArray(collection)) {
        if (func === undefined) {
            for (let i = 0; i < collection.length; i++) {
                if (collection[i] === false) {
                    return false; 
                }
            }
            return true; 
        } else {
            for (var i = 0; i < collection.length; i++) {
                if (func(collection[i], i, collection) === false) {
                    return false; 
                } 
            }
        }
    
    } else if (typeof collection === 'object') {
        if (func === undefined) {
            for (var key in collection) {
                if (collection[key] === false) {
                    return false;
                }
            }
            return true;
        }
        for (var key in collection) {
            if(func(collection[key], key, collection) === false) {
                return false;
            }
        }
    }
     return true;
}
module.exports.every = every;

/**
 * some: Designed to loop over a collection, Array or Object, and applies the action 
 * Function to each value in the collection
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the 
 * collection
 * 
 * @returns {Boolean}:  Returns true when action function returns true for just one element in input collection. Returns false only
 * if function call returns false for all elements in input collection. If input function is not provided return true if at least one 
 * element is truthy, otherwise return false.
 */
function some(collection, func) {
    if (Array.isArray(collection)) {
        if (func === undefined) {
            for (let i = 0; i < collection.length; i++){
                if (collection[i] === true) {
                    return true;
                }
            }
            return false;
        } else {
            for (var i = 0; i < collection.length; i++) {
                if (func(collection[i], i, collection) === true) {
                    return true; 
                }
            }
            return false;
        }
    } else if (typeof collection === 'object') {
        if (func === undefined) {
            for (var key in collection) {
                if (collection[key] === true) {
                    return true;
                }
            }
            return false;
        }
        for (var key in collection) {
            if(func(collection[key], key, collection) === true) {
                return true;
            }
        }
    }
     return false;

}
module.exports.some = some;

/**
 * reduce: Designed to loop over an array and applies the input function to each value in the collection, passing the arguments to the
 * input function: previous result, element, index
 * 
 * @param {Array} array: The collection over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the 
 * collection
 * @param {Value} seed: A value to which accumulator is initialized the first time the callback is called. If no seed is passed as an
 * argument, the accumulator defaults to the value stored at the 0 index of the input array.
 * 
 * @returns {Value}: Returns a single value of the accumulated result
 */
function reduce(array, func, seed) {
    let result;
    if (seed === undefined){
        result = array[0];
        for (let i = 1; i < array.length; i++) {
            result = func(result, array[i], i);
        }
    } else { 
        result = seed;
        for (let i = 0; i < array.length; i++) {
            result = func(result, array[i], i); 
        }
    }
    return result;
}
module.exports.reduce = reduce;

/**
 * extend: Designed to copy a second objects or more objects properties into the initial input object.
 * 
 * @param {Object} obj1: The initial input object to be copied into
 * @param {Object} obj2: The object to copy from into the initial input object
 * @param {Object} moreObjs: Any subsequent objects to copy properties from into the initial input object
 * 
 * @returns {Object}: Returns the updated object
 */
function extend(obj1, obj2, ...moreObjs) {
    Object.assign(obj1, obj2);
    const args = [...moreObjs];
    for (let i = 0; i < args.length; i++) {
        Object.assign(obj1, args[i]);
    }
    return obj1;

}
module.exports.extend = extend;