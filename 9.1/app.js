const profileDataArgs = process.argv.slice(2);

const printProfileData = profileDataArr => {
  // This...
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i]);
  }

  console.log('================');

  // Is the same as this...
  profileDataArr.forEach(profileItem => console.log(profileItem));
};

console.log("================")

printProfileData(profileDataArgs);

// ***************

// var message = 'Hello Node!';


// var sum = 5 + 3;


// console.log(message);

// console.log(sum);

// *********************

// var commandLineArgs = process.argv;

// console.log(commandLineArgs);
// first value is a file path to where Node.js is installed on your computer. 

// The second is the file path for the file you just executed.
// ****************

// var profileDataArgs = process.argv.slice(2); 
// console.log(profileDataArgs);
// slice() Method means removed method.
// ***************

// var profileDataArgs = process.argv.slice(2, process.argv.length);

// console.log(profileDataArgs);

// *************

// const message = 'Hello Node!';

// message = 'Goodbye Node!';


// const sum = 5 + 3;

// sum += 1;
// console.log(message);
// console.log(sum);

// If we were to run this code, we'd receive an error.

// Once we declare const, we can never reassign it.

// const animalArray = ['dog', 'cat', 'pig'];


// animalArray.push('cow');


// const personObj = {

//   name: 'Lernantino',

//   age: 99

// };

// personObj.age = 100;

// personObj.occupation = 'Developer';

// console.log(animalArray);
// console.log(personObj);

// But for arrays and objects, it(const) behaves differently.
// ********************
// const printProfileData = (profileDataArr) => {

//   console.log(profileDataArr);

// };

// printProfileData(printProfileDataArgs);
// Arrow functions are not direct replacements to the functions we all know .

// const addNums = function(numOne, numTwo) {

//   return numOne + numTwo;
// };
// Arrow functions are not direct replacements to the functions we all know.
// They don't need the function keyword.

// const addNums = (numOne, numTwo) => {
//   return numOne + numTwo;

// };

// const message = 'Hello Node!';


// if (true === true) {

//   const message = 'Hello ES6!';

//   let sum = 5;

//   sum += 10;

//   console.log(message);

//   console.log(sum);

// }


// console.log(message);

// console.log(sum);

// But why can't we just use var and const instead of let and const? Because let and const are block-scoped variables.
// ******************************

// // var is function-scoped, so redeclaring it in a block will cause its value outside the block to change as well:


// var one = 'one: declared outside the block';


// if (true === true) {

//   var one = 'one: declared inside the block'; // notice: we redeclare 'one' here

//   console.log(one); // prints 'one: declared inside the block'

// }


// console.log(one); // also prints 'one: declared inside the block', because the variable was redeclared in the 'if' block. The outer 'var' variable was therefore destroyed and replaced by inner var variable.

// **********************************
// // 'let' is block-scoped, so redeclaring a 'let' variable inside of a block creates a different 'let' variable with the same name whose scope is inside the block:


// let two = 'two: declared outside the block';


// if (true === true) {

//   let two = 'two: declared inside the block';

//   console.log(two); // prints 'two: declared inside the block'

// }


// console.log(two); // prints 'two: declared outside the block', because two declared inside the block is a separate variable. The 'let' variables are unrelated and therefore are unaffected by each other.
// ************************************

// // var is function-scoped, so changing its value in a block causes its value in the outer environment to change as well:


// var three = 'three: declared outside the block';


// if (true === true) {

//   three = 'three: changed inside the block'; // notice: we don't redeclare

//   console.log(three); // prints 'three: changed inside the block'

// }


// console.log(three); // also prints 'three: changed inside the block', because the variable has function scope. This means that the value change in the block is reflected throughout the function, i.e., outside the block.

// ***********************************

// // let is block-scoped, so changing its value in a block does change its value outside the block _if_ the variable is not redeclared in the block:


// let four = 'four: outside the block';


// if (true === true) {

//   four = 'four: inside the block'; // notice: we don't redeclare the variable

//   console.log(four); // prints 'four: inside the block'

// }


// console.log(four); // prints 'four: inside the block', because we didn't redeclare the variable inside the block. That meant we referenced the variable outside the block, and we therefore changed it.

// *************************************************



