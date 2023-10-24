/*
///////////////////////////////////////////////////
////////////////////////////////////////
////////////////////////////
//Lecture 1 (ffunction basics)

function sayHello() {
  /// we are declaring the fucntion
  console.log('hello world');
}

sayHello(); // we are calling the function

function add(num1, num2) {
  console.log(num1 + num2);
}

add(5, 10);

function subtract(num1, num2) {
  return num1 - num2; // after return no other line of the content of function works

  console.log('After the return');
}

const result = subtract(10, 2);
  
console.log(result, subtract(20, 5));
*/
/*


//Default Params
function registerUser(user = 'Bot') {
  // ES6 we can do like above
  // if(!user) {
  //  user = 'Bot'; Pre ES , deafult parameter
  //}

  return user + ' is registered';
}

console.log(registerUser());

//Rest Params
function sum(...numbers) {
  let total = 0;

  for (const num of numbers) {
    total += num;
  }

  return total;
}

console.log(sum(1, 2, 3));

// Objects as params
function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
  id: 1,
  name: 'John',
};

console.log(loginUser(user));
console.log(loginUser({ id: 2, name: 'Sara' }));

//Arrays as params
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];

  console.log(item);
}

getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
 */
/*
///////////////////////////////////////////////////
////////////////////////////////////////
////////////////////////////
//Lecture 3 (Global & Function scope)

const x = 100; // this variable is created in global scope

console.log(x, 'in global');

function run() {
  console.log(window.innerHeight);
  console.log(x, 'in function'); //can access x since x in global scope
}

run();

if (true) {
  console.log(x, 'in block');
}

function add() {
  const x = 1;
  const y = 50; // function scope
  console.log(x, y);
}

// console.log(y); // cant access since y is not created in global scope

add();

*/
/*
///////////////////////////////////////////////////
////////////////////////////////////////
////////////////////////////
//Lecture 4 (block scope)

const x = 100;

if (true) {
  const y = 200;
  console.log(x + y);
}

// console.log(x + y); // y block scope can access it outside of its block
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// console.log(i); //same reason as above

if (true) {
  const a = 500;
  let b = 600;
  var c = 700; // we can access var out side of block , var is not block scoped
}

console.log(c);

function run() {
  var d = 100;
  console.log(d);
}

run();

console.log(d); // but here, var is funciton scoped , so cant access
*/
/*
///////////////////////////////////////////////////
////////////////////////////////////////
////////////////////////////
//Lecture 5 (Nested Scope)

function first() {
  const x = 100;

  function second() {
    const y = 200;
    console.log(x + y); // this scope can work with parent scope i.e. the first()
  }

  //  console.log(y); // here the other way around not works, first scope can't access second scope

  second();
}

first();

if (true) {
  const x = 100;

  if (x === 100) {
    const y = 200;
    console.log(x + y);
  }
  console.log(y); //same reason as in function above
}
*/
/*
///////////////////////////////////////////////////
////////////////////////////////////////
////////////////////////////
//Lecture 7 (function declaration)

console.log(addDollarSign(100)); // because of hoisting

function addDollarSign(value) {
  return '$' + value;
}

// console.log(addDollarSign(100));

//Function Expression

// console.log(addPlusSign(200));//hoisting not works

const addPlusSign = function (value) {
  return '+' + value;
};

console.log(addPlusSign(200));
*/
/*
///////////////////////////////////////////////////
////////////////////////////////////////
////////////////////////////
//Lecture 8 (arrow functions)

//Arrow function syntax
const add = (a, b) => {
  return a + b;
};

//Implicit return
const subtract = (a, b) => a - b;

//can leave off () is single param
const double = (a) => a * 2;

//returing an object
const createObj = () => ({
  name: 'Brad',
});

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (n) {
  console.log(n);
});

//Use case for =>

//Arrow function in a callback
numbers.forEach((n) => console.log(n));

console.log(add(1, 2));
console.log(subtract(1, 2));
console.log(double(4));
console.log(createObj(10));

*/
/*
///////////////////////////////////////////////////
////////////////////////////////////////
////////////////////////////
//Lecture 9 (IIFE - Imediately invoked function expression)

(function () {
  const user = 'John';
  console.log(user);
  const hello = () => console.log('Hello from the IIFE');
  hello();
})();

(function (name) {
  console.log('Hello ' + name);
})('Shawn');

(function hello() {
  console.log('Hello');
})();

 */
/*
///////////////////////////////////////////////////
////////////////////////////////////////
////////////////////////////
//Lecture 10 (function challenge)

//1. Fahrenheit to celsius

const getCelsius = (f) => {
  return ((f - 32) * 5) / 9;
};

console.log(getCelsius(32));

console.log(`The temperature is ${getCelsius(41)}\xB0C`);

//2. min & max value of an array

const minMax = (arr) => {
  return { max: Math.max(...arr), min: Math.min(...arr) };
};

console.log(minMax([1, 2, 3, 4, 5]));

//3. IIFE

(function (length, width) {
  console.log(
    `The area of a rectange with a ${length} and a ${width} is ${
      length * width
    }.`
  );
})(10, 2);
 
*/
/*
///////////////////////////////////////////////////
////////////////////////////////////////
////////////////////////////
//Lecture 11 (EC in Browser)
const x = 100;
const y = 50;

function getSum(n1, n2) {
  const sum = n1 + n2;
  return sum;
}

const sum1 = getSum(x, y);
const sum2 = getSum(10, 5);

console.log(sum1, sum2);
*/
