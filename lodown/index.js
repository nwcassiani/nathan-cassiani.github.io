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
 * contains: Designed to loop over an array and return a Boolean value depending on whether the input array
 * contains the input value.
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Value} value: the value to look for in the input array
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
 * unique: Designed to loop over an array, and applies the 
 * index0f function to find first instance of an element from the input array, and return a new array without
 * any duplicate values.
 * 
 * @param {Array} array: The array over which to iterate.
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
 * filter: Designed to loop over an array, applying the function to each value in the array, and returning
 * a new array for which the function returned true.
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the array
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
 * reject: Designed to loop over an array, applying the function to each value in the array, and returning
 * a new array of elements for which the function returned false.
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the array
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
 * map: Designed to loop over a collection, Array or Object, and applies the 
 * Function to each value in the collection, saving the return value of each function call in a new array.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
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
 */
function pluck(array, prop) {
    return _.map(array, function(array){
        return array[prop];
    });

}
module.exports.pluck = pluck;

/**
 * every: Designed to loop over a collection, Array or Object, and applies the 
 * Function to each value in the collection to return true when function returns true for every element in 
 * input collection
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the 
 * collection
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
 * some: Designed to loop over a collection, Array or Object, and applies the 
 * Function to each value in the collection to return true when function returns true for just one element in 
 * input collection
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the 
 * collection
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
 * reduce: Designed to loop over an array and applies the 
 * function to each value in the collection, and returns a single value of the accumulated result.
 * 
 * @param {Array} array: The collection over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the 
 * collection
 * @param {Number} seed: 
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