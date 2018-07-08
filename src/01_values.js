/**
 * A few different ways to write numbers in JavaScript
 */
console.log(55e2);
console.log(33);

/**
 * Let's try some integer division
 */
console.log(5/2); // This returns 2.5, so integer division is sensible in JS.

/**
 * Modulo
 */
console.log(10.5%3); // Returns 1.5, as expected. Precision is the same as division or multiplication.

/**
 * Some operations that result in NaN
 */
console.log(0/0); // Returns NaN
console.log(Infinity - Infinity); // Returns NaN
console.log(Infinity + (-Infinity)); // Returns NaN

/**
 * Strings
 */
console.log("Hello world!");
console.log('Hello world in single quotes');

/**
 * Concatenation using + operator
 */
console.log("con" + "cat" + "en" + "ate"); // Returns concatenate

/**
 * Unary operators
 *
 * typeof: returns a string describing the type of the operand
 */
console.log(typeof "foo"); // Returns "string"
console.log(typeof 10); // Returns "number"
console.log(typeof 4.4); // Also returns "number"
console.log(typeof false); // Returns "boolean"
console.log(typeof 3 > 2); // Returns "false"
console.log(typeof (3 > 2)); // Returns "boolean"

/**
 * String comparison using quantitative comparison operators
 * Based on unicode standard. TODO: Look into how this works.
 */

console.log("Andrew" > "Mimi"); // Returns false
console.log("Mimi" > "Andrew"); // Returns true
console.log("andrew" > "Mimi");
var foo = "foo";
var foo2 = "foo2"
console.log(foo == foo2); // Returns false
console.log("foo" == "foo"); // Returns true

/**
 * More on NaN:
 * NaN is the only value in JavaScript that is not equal to itself.
 * Keep in mind that NaN is supposed to denote the result of nonsensical arithmetic computations, and therefore
 * is not equal to the result of another or even the same nonsensical arithmetic computation.
 */
console.log(NaN == NaN); // Returns false
console.log((0/0) == (0/0)); // Returns false!

/**
 * Conditional operator
 * This is actually a ternary operator (takes 3 operands)
 */
console.log(true ? 1: 2); // Returns 1. You can think of this as "true? if yes then 1: else 2

/**
 * Undefined values:
 * There are two values in JavaScript which denote the absence of a meaningful value. These are:
 * null,
 * undefined.
 *
 * Many operations which lack meaningful return values return undefined simply because they need to return
 * something. An example of this is variable declaration, which returns undefined, or at least it appears this way
 * in the node console.
 */

/**
 * Type coercion:
 * JavaScript will try its best to produce meaningful output from strange expressions you feed it.
 */
console.log(8 * null); // Returns 0! null actually gets converted to 0
console.log(8 * undefined); // Returns NaN
console.log("5" - 3); // Returns 2 the number! "5" is converted to 5 the number.
console.log("5" + 3); // Returns the STRING "53". The 3 is converted to 3 the string and is appended to 5.
console.log(false == 0); // Returns true!
console.log(NaN + 1); // Any arithmetic operation on NaN produces NaN

/**
 * Comparisons on values of differing types:
 * When you compare values which have different types, JavaScript uses a complicated set of rules to determine equality.
 * In most cases, it just tries to convert one of the arguments to the other's type. However, if null or undefined occur
 * as any one of the operands, it produces true if and only if each side has one of either null or undefined.
 *
 * Remember that both null and undefined are values but neither carries any information
 * Comparing a value to null is useful to see if that value has a real value.
 */
console.log(null == undefined); // Returns true
console.log(undefined == null); // Returns true
console.log(null == 0); // Returns false, EVEN THOUGH null was converted to 0 when multiplying it by 8 earlier. This is because 0 is a real value.

/**
 * More precise comparison operators.
 * It makes sense to use tripple character comparision operators to make sure we are never caught off guard.
 */
console.log(false == 0); // 0 is converted to false. Returns true.
console.log(false === 0); // 0 is not converted to false. Returns false.
console.log(null === undefined); // Returns false
console.log(null == undefined); // Returns true


