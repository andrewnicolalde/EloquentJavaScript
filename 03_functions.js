/**
 * Defining a simple function
 */
const square = function(x){ // This function has a return value. Not all need to. Some need only produce side effects.
  return x * x;
};

console.log(square(8)); // Prints 64

/**
 * This is a function without a return value. It only produces the side effect of writing "Pling!" to the console.
 * Functions without explicit return values return undefined.
 */
const makeNoise = function(){
  console.log("Pling!");
};

makeNoise();

console.log(makeNoise()); // Prints "undefined" (and also calling makeNoise creates a side effect of also printing Pling)

/**
 * Scope:
 * Works similarly to Java. Bindings declared with let and const are limited only to the block in which they are
 * declared.
 *
 * Bindings declared with var are visible to the ENTIRE function they are declared in regardless of what inferior block
 * they are declared in.
 *
 * The only time we can't look out is when a binding in an interior scope block shares the name of a binding in one of
 * its exterior scope blocks. In this case, the interior binding is referenced.
 *
 * All scopes can see the global scope.
 *
 * Each local scope can see all local scopes which contain it. This is known as "lexical scoping."
 */
const scopes = function () {
  const foo = 10;
  if(true){
    let bar = 5;
    var baz = 33;
    console.log(foo + bar) // This does work because we can always^ 'look out' from any block and see all higher scope
  }
  // console.log(foo + bar); // This wouldn't work because y is not visible from outside its block
  console.log(foo + baz); // This works because variables declared with var are visible to the entire function.
};

scopes();

/**
 * Nested scope:
 * JavaScript supports declaring functions inside other functions.
 */
const hummus = function (multiplier) {
  const ingredient = function (amount, unit, name) {
    let ingredientAmmount = amount * multiplier;
    if(ingredientAmmount > 1){
      unit += "s";
    }
    console.log(`${ingredientAmmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};

hummus(10);

/**
 * Functions as values:
 *
 * Function bindings are just bindings that point at functions (specific pieces of the program).
 * Note however that the bindings are NOT the functions themselves. A function value can do all the things that other
 * values can do. You can use it in arbitrary expressions, not just call it. You can do things like storing a function
 * value in a binding and then pass that function (via the binding) to another function as a parameter.
 * If a function binding is not a constant, it can be assigned another value just like any other binding.
 *
 * We will explore passing functions to other functions.
 */
//picle(); // This will not work, see following paragraph
let safeMode = false;
let pickle = function () { // Non-constant binding for a function value
  console.log("Away");
};
if(safeMode){
  pickle = function () {}; // Do nothing
}
pickle();

/**
 * Declaration notation:
 * There is a shorthand way of declaring a function binding. It works as follows.
 */

/*
* The interesting thing about this form of function declaration is that we don't have to declare the function above the
* code which invokes it.
*/

foo(); // This works only with the shorthand declaration.

function foo() {
  console.log("foo");
} // No semicolon required

/**
 * Arrow functions:
 * There isn't a very deep reason as to why a language should have arrow functions instead of just declaring them with
 * the function keyword.
 *
 * There is a minor difference between arrow functions and the function keyword way of declaring fucntions, which will
 * be expanded upon later.
 *
 * The primary reason this way of declaring functions was added to JavaScript was to make it
 * possible to write small functions in a less verbose way.
 */

const arrowFunction = (param) => {
  console.log("Parameter to this arrow function: " + param);
};
arrowFunction(30);

/**
 * The call stack:
 * In order to resume flow of execution in the correct place after a function call, computers need to remember the
 * context from which the call happened.
 */

/**
 * Optional arguments:
 * JavaScript ignores extra parameters that were not declared in the function definition. The function executes as
 * normal, and JS will NOT tell you you have extra arguments.
 *
 * In fact, if you pass too few arguments to the function, JavaScript will just set the ones you have not specified
 * values for to undefined.
 * We can leverage this behavior to make functions behave differently based on the number of arguments we pass them.
 *
 * We can also set default values for arguments in the event their value is not provided in the function invocation.
 */
function baz (x){
  return x * x;
}
console.log(baz(10)); // Returns 100
console.log(baz(10, "asdf", "fooooo")); // Returns 100
console.log(baz()); // Returns NaN because undefined * undefined = NaN

function minus(x, y){
  if (y === undefined){ // If we don't have a second argument
    return -x; // Return the inverse of x
  }
  return x - y; // Otherwise return the result of subtracting y from x.
}
console.log(minus(3)); // Returns -3
console.log(minus(3, 1)); // Returns 2

// Default values
function plus(x, y = 4){
  return x + y;
}
console.log(plus(6)); // Returns 10
console.log(plus(6, 11)); // Returns 17

/**
 * It is also possible for functions to accept an arbitrary number of arguments. An example of this behavior is the
 * console.log() function. It prints each argument it is fed for an arbitrary number of arguments.
 */
console.log("I", "want", "coffee", 10, undefined, NaN); // Prints "I want coffee 10 undefined NaN"

/**
 * Closures:
 * Remember that we are able to treat functions themselves as values. Also remember that a function's local bindings are
 * re-created every time that function is called (nothing new). This allows us to use an interesting technique called a
 * closure. What happens to bindings created by a function when the function that created them is no longer active?
 *
 * Here we create a function that creates a local binding and returns a function which accesses and returns that local
 * binding.
 */
function wrapValue(n){
  let local = n; // Don't actually need to call it local since n is already a local binding.
  return () => local; // Return a function that takes no parameters and returns local. This function is our closure.
  // We could also write this:
  // return n => n;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1); // Returns [Function]
console.log(wrap1()); // Returns 1;
console.log(wrap2); // Returns [Function]
console.log(wrap2()); // Returns 2
console.log(wrapValue(10)); // Returns [Function]
console.log(wrapValue(10)()); // Returns 10

/**
 * Note that the value of the local binding is still accessible even after the function that created it has finished
 * running! Note also that different calls have no side effects on the values of 'local' in other function calls.
 *
 * The name for the feature that allows you to reference specific instances of local bindings from an enclosing scope is
 * called 'closure'.
 *
 * The name for the function that references bindings from local scopes around it is called a 'closure'.
 */

/**
 * Here's a function that allows us to multiply a number by an arbitrary factor.
 */
function multiplier(factor){
  /*
  Remember that we do not need to include parentheses around the set of parameters to an arrow function if there is only
  one parameter. Number in this case is a parameter to an anonymous function, not the identifier of the function.
   */
  return number => number * factor; // Returns a FUNCTION whose return value is equal to number * factor
}
let twice = multiplier(2); // twice is a FUNCTION
console.log(twice(10)); // Returns 20
console.log(twice(30)); // Returns 60
/**
 * A good mental model for thinking about functions as values is that function values contain both the code in their
 * body as well as the environment in which they were created. When called, the function value sees the environment
 * in which it was created, not the environment in which it was called.
 */

/**
 * Recursion, a review
 */
function power(base, exponent){
  if(exponent == 0){ // Base case
    return 1;
  }
  return base * power(base, exponent - 1); // Recursive call
}
console.log(power(3, 5)); // Returns 243

/**
 * A recursive solution for finding a set of operations (either adding 5 or multiplying by 3) which results in
 * the target.
 */
function findAdditions(target){
  function find(currentNumber, history){
    if(currentNumber == target){
      return history; // If we have successfully created a history set that adds up to our target, return the history
    }
    if(currentNumber > target){
      return null; // If we have overshot our target, return null (which evaluates as false in boolean operations)
    }
    return find(currentNumber + 5, `(${history} + 5)`) || find(currentNumber * 3, `(${history} * 3)`);
  }
  return find(1, "1");
}

console.log(findAdditions(24)); // Returns "(((1 * 3) + 5) * 3)"

/**
 * There exists a type of function called a pure function. This is a function that produces no side effects and whose
 * return value doesn't depend on any side effects such as global variables (whose value may change over time).
 *
 * In other words, we could substitute a particular invocation of a pure function with its return value and the semantics
 * of the code would not change at all.
 */

/**
 * Exercises
 */
function minimum(a, b) {
  if(a < b){
    return a;
  }
  return b;
}
console.log(minimum(10, -1));

/**
 * This function is being made as recursive for the purposes of this exercise
 * Horribly inefficient I know.
 */
function isEven(number){
  if(number == 0){
    return true;
  } else if (number == 1){
    return false;
  }
  return isEven(number - 2);
}
console.log(isEven(10));
console.log(isEven(11));

function countChar(string, char){
  let count = 0;
  for(let i = 0; i < string.length; i++){
    if(string[i] == char){
      count++;
    }
  }
  return count;
}

function countBs(string){
  return countChar(string, "B");
}

console.log(countBs("BBABBfbbb"));
