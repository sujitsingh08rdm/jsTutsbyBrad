//////////////////////////
////////////////////
//Lecture one basics

/*
console.log(100);
console.log('Hello World');
console.log(20, 'hello', true);
const x = 100;
console.log(x);
console.error('Alert');
console.warn('Warning');
console.table({ name: 'Sujit', email: 'sujit@gmail.com' });

console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd;

const styles = 'padding: 10px; background-color: white; color: green';
console.log('%cHello World', styles);
*/
/*
//////////////////////////
////////////////////
//Lecture two (variables)

let firstName = 'Sujit';
let lastName = 'Singh';

console.log(firstName, lastName);
let age = 30;
console.log(age);

//Naming conventions
// -Only letters, numbers, underscores and dollar signs
// -can't start with a number

//Multi-word formatting
// firstName = camelCase   use this only
// FirstName == Pascalcase   when we use certain Framework

// Re-assigning variables
age = 31;
console.log(age);

let score;
score = 1;

console.log(score);

if (true) {
  score = score + 1;
}

console.log(score);

const x = 100;
//x = 200; // can't change the value post-declaration
//const score1;  //const decalation must be initailized

const arr = [1, 2, 3, 4, 5];
//arr = [66, 7, 8];//cant do this, see line 60
//but we can use methods to manipulate the array, see below
arr.push(6);
console.log(arr);

//Similarlary for objects
const person = {
  name: 'Sujit',
};

person.name = 'Pooja';
person.email = 'Pooja.Kunjappa@cognizant.com';

console.log(person);

//declare multiplae vaalues at once
let a, b, c;

const d = 10,
  e = 20;
*/
/*
//////////////////////////
////////////////////
//Lecture three (datatypes)

////Primitive types

//String - sequence of characters must be be quotes or backticks
//Number - Integers as well as floating point numbers
//boolean - logical entity / true or false
//null - intentional absence of any object value
//undefined - A vaiable that has not yet been defined/assigned
//Symbol - build-in object whose constructor returns unique symbol
//Bigint - numbers that are greater than the actual "Number" type

////Reference types(object)

// Reference types or Objects are non primitive value when assigned to a variable,
// the variable is given a reference to that value
// Object literals, arrays and fucntions are all reference types

////Static typing vs dynamic typing
// Javascript is a dynamically typed language. this means we do not explicity define that types for our vaiables.
// Other languageds like java and C and C++ statically typed which mean we have to define data type to variables

//String
const firstName = 'John';
//Number
const age = 23;
const temp = 98.5;
//Boolean
const hasKids = true;
//Null
const aptNumber = null;
//undefined
//let score;
const score = undefined;
//Symbol
const id = Symbol('id');
//BigInt
const n = 900002301481239471n;

//Reference types
const numbers = [112, 213, 124, 4415, 2151];
const person = {
  name: 'Brad',
};

function sayHello() {
  console.log('hello');
}

const output = sayHello;

console.log(output, typeof output);

*/
/*
//////////////////////////
////////////////////
//Lecture four (primitive vs reference types)

//Primitive daatya stypes stored directly in the "stack" where it is accessed from.
//Reference types are stored in heap and acessed by ref

//values are stored in stack
const name = 'John';
const age = 30;

//Reference values are stored on the heap
const person = {
  name: 'Aavya',
  age: 3,
};

let newName = name;
newName = 'Nitin';

let newPerson = person;
newPerson.name = 'Brad';

console.log(name, newName);
console.log(person, newPerson);
console.log(newPerson);
*/
/*
//////////////////////////
////////////////////
//Lecture five (type conversion)

//string to number
// let amount = 'Hello';
// amount = parseInt(amount); // convert to number
// amount = +amount;
//amount = Number(amount); //number here is constructor

//Change number to string
// amount = amount.toString();
// amount = String(amount);

//Change string to decimal
// amount = parseFloat(amount);

//change number to boolean
//amount = Boolean(amount); //0 is falsy number so false is returned
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('Foo' / 3);

//console.log(amount, typeof amount);
*/

/*
//////////////////////////
////////////////////
//Lecture six (Arithmetic operator)

let x;

x = 5 + 5;
x = 5 - 5;
x = 5 * 5;
x = 5 / 5;
x = 7 % 5;

//Concatenate
x = 'hello' + ' world';

//Exponent
x = 2 ** 3;

//Increment
x = 1;
x = x + 1;
x++;

//Decrement
x--;

//Assignment operator
x = 10;
x += 5;
x *= 5;
x /= 5;
x %= 5;
x **= 5;

//Comparison operator

x = 2 == '2'; //== is comparison operator, dont evaluate the type
x = 2 === '2'; // === also evalaute the type
x = 2 != 3; // not equal
x = 2 !== '2'; // also check the type

x = 10 > 5;
x = 10 < 5;
x = 10 >= 5;
x = 10 <= 5;

console.log(x);
*/
/*
//////////////////////////
////////////////////
//Lecture seven (type coersion)

let x;

x = 5 + '5'; //55 + makes them concat
x = 5 + Number('5'); // 10
x = 5 * '5'; // 25
x = 5 + null; // null gets coersed into 0 see below example
x = Number(null); // 0
x = Number(true); //1
x = Number(false); // 0
x = 5 + true; //6
x = 5 + false;
x = 5 + undefined; //NaN

console.log(x, typeof x);
*/
/*
//////////////////////////
////////////////////
//Lecture eight (working  with string)
let x;

const name = 'John';
const age = 30;

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

//Template Literals
x = `Hello, my name is ${name} and i am ${age} years old`;

// String Properties and method

const s = new String('Hello World');

x = typeof s;

x = s.length; // here length is property

//Access value by key
x = s[1];
x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();
x = s.charAt(0);
x = s.indexOf('e');

x = s.substring(2, 5);
x = s.substring(2);

x = s.slice(-11, -6); //can start at negative also
x = s.trim(); // trim the string

x = s.replace('World', 'John');
x = s.includes('Hell');
x = s.valueOf(); // give true primitve value

x = s.split(''); //  returns arrays with excludede the delimiter

console.log(x);
*/
/*
//////////////////////////
////////////////////
//Lecture nine (Capitalize challenge - capitalize first letter of string)

const myString = 'developer';
let myNewString = `${myString.charAt(0).toUpperCase()}${myString.substring(1)}`;

console.log(myNewString);
*/
/*
//////////////////////////
////////////////////
//Lecture ten (working  with Numbers)
let x;

const num = new Number(3);

x = num.toString();
x = num.toString().length;

x = num.toFixed(2); // return 3.00 fixed upto the input argument
x = num.toPrecision(2); // return 3.0
x = num.toExponential(2);
x = num.toLocaleString('en-UK');
x = num.valueOf();

x = Number.MAX_VALUE;
x = Number.MIN_VALUE;

console.log(x);
*/
/*

//////////////////////////
////////////////////
//Lecture eleven (Math Object)

let x;
x = Math.sqrt(3);
x = Math.abs(5); //5
x = Math.round(4.4); //4
x = Math.ceil(4.2); //5
x = Math.floor(4.9); // 4
x = Math.pow(2, 3); //return 8
x = Math.random(); // returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1

console.log(x);
*/

/*
//////////////////////////
////////////////////
//Lecture twelve (Number challenge)

const x = Math.round(Math.random() * 100) + 1;
const y = Math.round(Math.random() * 50) + 1;

console.log(`${x} +  ${y} =  ${x + y}`);
console.log(`${x} - ${y} =  ${x - y}`);
console.log(`${x} *  ${y} =  ${x * y}`);
console.log(`${x} %  ${y} =  ${x % y}`);
console.log(`${x} /  ${y} =  ${x / y}`);
*/
/*
//////////////////////////
////////////////////
//Lecture thirteenth (Dates and Times)

let d;

d = new Date(); //returns current date with same timezone as com, reutrns a object type
d = d.toString();
d = new Date(2021, 6, 14, 12, 30, 0); // set date (year, mm, dd, hr, mi) mm is zero based
d = new Date('2021-09-14T12:30:00'); // here not zero based
d = new Date('07/10/2021 12:30:00'); // here not zero based
d = new Date('2022-07-10'); // off by a day
d = new Date('07-10-2022'); // off by a day check stack overflow

d = Date.now(); //give number of milliseconds passed from 1st jan 1970
d = new Date('07-10-1980 12:30:00');
d = new Date();
d = d.getTime(); // time elaped from the1st jan 1970 time the date mentioned
d = d.valueOf();

d = new Date(1697773410049); // can take ms input as well
d = Math.floor(Date.now() / 1000); //timestamp in seconds

console.log(d);
*/
/*
//////////////////////////
////////////////////
//Lecture fourteenth (Dates and Times)

let x;
let d = new Date();

x = d.toString();

x = d.getTime(); //get time stamp
x = d.valueOf();

x = d.getFullYear(); //givs full year
x = d.getMonth(); // index start from 0
x = d.getMonth() + 1;
x = d.getDate(); // gives from date for month
x = d.getDay(); // gives from date for week
x = d.getHours();
x = d.getMinutes();
x = d.getSeconds();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

x = Intl.DateTimeFormat('en-US').format(d); // locale
x = Intl.DateTimeFormat('en-IN').format(d); // locale
x = Intl.DateTimeFormat('default', { month: 'long' }).format(d); // locale, month in long format

x = d.toLocaleDateString('default', { month: 'short' });

console.log(x);


*/
