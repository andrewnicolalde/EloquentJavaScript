/**
 * Bindings:
 *
 * Bindings allow JavaScript to maintain internal state.
 * A more common name for a binding is a variable.
 */

// Bindings are declared this way:
let foo = 5*5; // foo equals 25
console.log(foo);

// Defining multiple bindings at once
let one = 1, two = 2;
console.log(one);
console.log(two);

/**
 * We can also define bindings with var, though this is how it was done in pre 2015 javascript. It has some interesting
 * properties which will be explored later. It apparently does differ in an important way from "let".
 */
var bar = 10;

/**
 * Defining constants
 */
const constant = "This is constant"; // We can never assign another value to constant.
console.log(constant);

let $TEN = 10;
console.log($TEN); // Variable names with dollar signs are valid
let _UnDeRsCoRe44 = "_44";
console.log(_UnDeRsCoRe44); // Variable names with underscores and digits are valid.

console.log(Math.max(10, 40, 55, 50505050)); // Returns the largest argument

console.log(Number.isNaN(10));
console.log(Number.isNaN(0/0));

// Exercises

/**
 * Printing triangle
 */
let tier = "#";
for(let i = 0; i < 7; i++){
  console.log(tier);
  tier += "#";
}

/**
 * FizzBuzz
 */
for(let i = 0; i < 100; i++){
  let word = "";
  if(i % 3 == 0){
    word += "Fizz";
  }
  if(i % 5 == 0){
    word += "Buzz";
  }if(word != ""){
    console.log(word);
  } else{
    console.log(i);
  }
}

/**
 * Chessboard (not very efficient)
 */
let size = 20;
for(let i = 0; i < size; i++){ // Print each rows
  let row = "";
  for(let j = 0; j < size; j++){ // Build each row
    if(i % 2 == 0){ // For every row which starts with a space
      // Add a space first
      if(j % 2 == 0){
        row += " ";
      } else { // Add a hash second
        row += "#";
      }
    } else {
      if(i % 2 == 1){ // For every row which starts with a hash
        // Add a hash first
        if (j % 2 == 0){
          row += "#";
        } else { // Add a space second
          row += " ";
        }
      }
    }
  }
  console.log(row); // Print constructed row
}
