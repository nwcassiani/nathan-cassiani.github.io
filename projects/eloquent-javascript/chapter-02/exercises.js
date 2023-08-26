
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
  // write loop that makes seven calls to console
  // output is a triangle of hashtags
  var str = "#";
  for (var i = 1; i <= num; i++) {
    console.log(str.repeat(i));
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
    // print numbers 1 to 15 using for loop
    for (var i = 1; i <= 15; i++) {
      // prints fizz instead of number for multiples of 3 => conditional chain inside while loop
        if (i % 3 === 0 && i % 5 === 0) {
          console.log("fizzbuzz");
        } else if (i % 3 === 0) {
          console.log("fizz");
        } else if (i % 5 === 0) {
          console.log("buzz");
        } else {
          console.log(i);
        }
      // prints buzz instead of number for multipes of 5 
      // prints fizzbuzz for multiples of both
      }
  
  
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(size) {
  // write a program that creates a string that represents an 8X8 chess board
  // use newline characters to separate lines
  // define a binding size = 8
  // change the program that it works for any size (width/height)
  var string = "";

  // for loop that pushes hashtag character on every odd index?
  for (var i = 0; i < size; i++) { // x axis
    // nested loop for y axis
    for (var j = 0; j < size; j++) {
      if ((i + j) % 2 == 0) {
        string += " ";
      } else {
        string += "#";
      }
    }
    string += "\n";
  }

  console.log(string);

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
