// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/

function bake(a, b, cb){
  console.log(cb(a,b));
  return cb(a,b);
};
let cake = function (ingredient, instructions){
  return `Take ${ingredient} and ${instructions} then you will have a cake!`;
};

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
let add = (num1, num2) => num1 + num2;
let multiply = (num1, num2) => num1 * num2;
let greeting = (first, last) => `Hello ${first} ${last}, nice to meet you!`

function consume(a, b, cb) {
  
  console.log(cb(a,b));
  return cb(a,b);
}
consume(1,21,add);
consume(2,13,multiply);

/* Step 3: Check your work by un-commenting the following calls to consume(): */
 console.log(consume(2, 2, add)); // 4
 console.log(consume(10, 16, multiply)); // 160
 console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation: The reason nested function can access the variable internal is because functions are able to look outside of themselves (to a scope higher up) for context. I believe this is called hoisting. Nested function should be able to access both internal and external. However if nestedFunction were on the same scope/level as myFunction the console.log would return undefined because it cannot look down into the scope of another function. The construct that is myFunction creates a barrier and protects all variables and other functions within its walls. This effect is what is referred to as closure.


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
