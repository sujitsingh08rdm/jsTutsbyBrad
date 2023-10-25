/*
////////////////////////////////////////////////////////////////
//////////////////////////////////////
//////////////////////////
//Lecture 1 (if statements)

console.log('test');

if (true) {
  console.log('This is true');
}

if (false) {
  console.log('This is not true');
}

const x = 10;
const y = 5;

if (x >= y) {
  console.log(`${x} is greater than or equal to ${y}`);
}

if (x === y) {
  console.log(`${x} is equal to ${y}`);
} else {
  console.log(`${x} is NOT equal to ${y}`);
}

if (x !== y) {
  var z = 20;
  console.log(`${z} is 20`);
}
*/
/*
////////////////////////////////////////////////////////////////
//////////////////////////////////////
//////////////////////////
//Lecture 2 (if else & nesting)

const d = new Date(10, 30, 2022, 14, 0, 0);
const hour = d.getHours();

console.log(hour);
if (hour < 12) {
  console.log('Good morning');
} else if (hour < 18) {
  console.log('Good afternoon');
} else {
  console.log('Good night');
}

// Nested If
if (hour < 12) {
  console.log('Good morning');
  if (hour === 6) {
    console.log('Wake up!');
  }
} else if (hour < 18) {
  console.log('good afternoon');
} else {
  console.log('Good night');
  if (hour >= 20) {
    console.log('Zzz');
  }
}

if (hour >= 7 && hour < 15) {
  console.log('It is work time!');
}

if (hour === 6 || hour === 20) {
  console.log('Brush Yo teeth');
}
*/
/*
////////////////////////////////////////////////////////////////
//////////////////////////////////////
//////////////////////////
//Lecture 3 (switches)

const d = new Date(2022, 5, 10, 19, 0, 0);
const month = d.getMonth();
const hour = d.getHours();

switch (month) {
  case 1:
    console.log('It is January');
    break;
  case 2:
    console.log('It is February');
    break;
  case 3:
    console.log('It is March');
    break;
  default:
    console.log('It is not Jan, Feb, or March');
}

switch (true) {
  case hour < 12:
    console.log('Good morning');
    break;
  case hour < 18:
    console.log('Good afternoon');
    break;
  default:
    console.log('Good Night');
}
/*
 */
/*
///////////////////////////////////////////////////////////
//////////////////////////////////////
////////////////////////
//Lecture 4 (Calculator challenge)

function calculator(num1, num2, operator) {
  if (operator == '+') {
    console.log(num1 + num2);
  } else if (operator == '-') {
    console.log(num1 - num2);
  } else if (operator == '*') {
    console.log(num1 * num2);
  } else if (operator == '/') {
    console.log(num1 / num2);
  } else {
    console.log('please enter valid operator');
  }
}

calculator(1, 2, '+');

*/
/*
///////////////////////////////////////////////////////////
//////////////////////////////////////
////////////////////////
//Lecture 5 (Truthy & Falsy)

//Falsy values: false, 0, "" , null, undefined, NaN
//Truthy values: Everything else that is not falsy. true, '0', [], {}, function() {}

const x = 'Me';

if (x) {
  console.log('This is truthy');
} else {
  console.log('This is falsy');
}

// Truthy and falsy caveats
const children = 0;

if (!isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter number of children');
}

//Checking for empty arrays
const posts = [];

if (posts.length > 0) {
  console.log('List Posts');
} else {
  console.log('No Posts To List');
}

//Checking for empty objects
const user = {
  name: 'Brad',
};

if (Object.keys(user).length > 0) {
  console.log('List users');
} else {
  console.log('No User');
}

//Loose equality (==)
console.log(false == 0);
console.log(null == undefined);
*/
/*
///////////////////////////////////////////////////////////
//////////////////////////////////////
////////////////////////
//Lecture 6 (Logical Operator)

console.log(10 < 20 && 30 > 15 && 40 > 30); // && will return true if all the condition are true
console.log(10 > 20 || 30 < 15); // || will return true if one condition is true

//&& - will return first falsy value  or the last value
a = 1 && 10 && 20 && 301;
a = 1 && 0 && 20 && 301; //0
a = 1 && 10 && 20 && 301; //301

console.log(a);

const posts = ['postOne'];

posts.length > 0 && console.log(posts[0]);

// || - will return first truthy value  or the last value

let b;

b = 10 || 20;
b = 0 || 20;
b = 0 || null || '' || undefined; // return the last i.e undefined

console.log(b);

// Nullish coelesing  ?? - Return the right side opeerand when the left is null or undefined

let c;

c = 10 ?? 20; // left side ie 10
c = null ?? 20; // right side since left is null
c = undefined ?? 30; // right side since left is undef
c = 0 ?? 30; // left side since left is 0(not null or undef)
c = '' ?? 30; //

console.log(c);
*/
/*
///////////////////////////////////////////////////////////
//////////////////////////////////////
////////////////////////
//Lecture 7 (Logical Assignment)

// ||= assigns the right side value only if the left is a falsy value

let a = false;

if (!a) {
  a = 10;
}

a = a || 10; // we can do like this also
a ||= 10;
console.log(a);

// &&= assigns the right side value only if the left is a true value

let b = 20;

if (!b) {
  b = 30;
}

b = b && 30;

b &&= 30;

console.log(b);

// ??= assigns the right side value only if the left is null or undefined

let c = null;

if (c === null || c === undefined) {
  c = 20;
}

c = c ?? 20;

c ??= 20;

console.log(c);
*/
/*
///////////////////////////////////////////////////////////
//////////////////////////////////////
////////////////////////
//Lecture 8 (Ternary operator)

const age = 19;

//Using an if statement
if (age >= 18) {
  console.log('You can Vote!');
} else {
  console.log('you cannot vote');
}

//Using a ternary operator
age >= 18 ? console.log('You can vote!!') : console.log('You cannot vote');

// Assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can Vote!!' : 'You cannot Vote';

console.log(canVote);
console.log(canVote2);

//Multiple statements

const auth = false;
//et redirect
// if (auth) {
//   alert('Welcome to the dashboard');
//   redirect = '/dashboard';
// } else {
//   alert('Access Denied');
//   redirect = '/login';
// }

// const redirect = auth
//   ? (alert('Welcome to the dashboard'), '/dashboard')
//   : (alert('Access denied'), '/login');

// console.log(redirect);

auth ? console.log('Welcome to the dashboard') : null;
*/
