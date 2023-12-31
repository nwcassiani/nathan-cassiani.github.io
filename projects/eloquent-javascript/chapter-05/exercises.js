// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
  // use reduce to access nested arrays
  return array.reduce(function(acc, current){
    // acc = []
    return acc.concat(current);
  }, []);

}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, test, update, body) {
  // start condition = value
  let start = value;
  // for loop
  for (start; test(value); value = update(value)){
    // pass value through body function
    body(value);
  }

}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
  // for loop through array
  for (let i = 0; i < array.length; i++){
    // if test returns false
    if(test(array[i]) === false){
      return false;
    }
  }
  return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(string) {
  // init empty ltr array
  let ltr = [];
  // init empty rtl array
  let rtl = [];

  // for loop through input string
  for (let i = 0; i < string.length; i++){
    // create variable script assigned to result of invoking characterScript on string[i]'s char code
    let script = characterScript(string.charCodeAt(i)); // returns object

    // determine if script is not equal to null
    if (script !== null){
      if(script.direction === "ltr"){
        ltr.push(script);
      } else if(script.direction === "rtl"){
        rtl.push(script);
      }
    }
  }
  // determine if there are more values in ltr array or rtl array
  if(ltr.length > rtl.length){
    return "ltr";
  } else {
    return "rtl";
  }


}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
