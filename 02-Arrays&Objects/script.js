/*

///////////////////////////////////////////////////////
//////////////////////////////////
////////////////////////
//Lecture 1 (creating arrays)

let x;

//Array literal
const numbers = [12, 4, 45, 566, 35, 102];
const mixed = ['12', 'Hello', 54, true, null];

//Array contructor
const fruits = new Array('Apple', 'grape', 'orange');
x = numbers[0];
x = numbers[0] + numbers[3];
x = `My favorite fruit is an ${fruits[2]}`;
x = numbers.length; //6

fruits[1] = 'pear'; // arrays can be mutable
// fruits.length = 2; // removed other elements

fruits[3] = 'Stawberrie'; // we can hard code
fruits[fruits.length] = 'Stawberries'; //length return +1, cuz index start from 0

x = fruits;
console.log(x);
*/
/*
///////////////////////////////////////////////////////
//////////////////////////////////
////////////////////////
//Lecture 2 (array method)

const arr = [34, 55, 8, 20, 15];

// arr.push(100); // push an element at the end of an array // returns the pushed elements
// arr.pop(); // remove last element from the end 
// arr.unshift(99); // add an element at the start of an array //returns the added element 
// arr.shift(); //removes first element from the array
// arr.reverse();

x = arr.includes(200); // false
x = arr.indexOf(8); // returns index of, and if not  in array returns -1

x = arr.slice(1, 4); // first argument is inclusive, second argument will be exclusive
//point to note is slice does not change the original array

// x = arr.splice(1, 4);//start number, delete count //its changes the original array, and return the removed array
// x = arr.splice(1, 4);

x = arr.splice(1, 4).reverse().toString().charAt(0); //example of method chaining

console.log(x, arr);

*/

/*
///////////////////////////////////////////////////////
//////////////////////////////////
////////////////////////
//Lecture 3 (nestting, concat & spread operator)
const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

// fruits.push(berries); //make a nested array
// x = fruits[3][1]; // accessing elements from nested array

const allFruits = [fruits, berries];
x = allFruits[1][0];

x = fruits.concat(berries);

//Spread Operator (...)
x = [...fruits, ...berries]; // put out the elements from both array and pack them in new array

//Flatten arrays
const arr = [1, 2, [3, 4], 5, [6, 7], 8];
x = arr.flat();

//static methods on array object
x = Array.isArray(fruits); // true

x = Array.from('12345'); //creates an array from arg

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c); //creats an array of all arg
console.log(x);

*/

/*
///////////////////////////////////////////////////////
//////////////////////////////////
////////////////////////
//Lecture 4 (array challenge - mutate the array to following)
//arr = [1,2,3,4,5]
//arr = [6,5,4,3,2,1,0]

const arr = [1, 2, 3, 4, 5];

arr.reverse();
arr.push(0);
arr.unshift(6);

console.log(arr);

//challgne 2 -- combine two arr

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7];

const comArr = [...arr1, ...arr2];

console.log(comArr);
*/

///////////////////////////////////////////////////////
//////////////////////////////////
////////////////////////
//Lecture 5 (object literals)
/*
let x;

const person = {
  name: 'John Doe', //name property
  age: 30,
  isAdmin: true,
  address: {
    street: '123 Main St',
    city: 'Boston',
    state: 'MA',
  },
  hobbies: ['music', 'sports'],
};

x = person.name;
x = person['age'];
x = person.address.state;
x = person.hobbies[0];
person.name = 'Jane Doe';
person['isAdmin'] = false;

delete person.age;

person.hasChildren = true; //  we can add property

person.greet = function () {
  console.log(`hello my name is ${this.name}`);
};

person.greet();

const person2 = {
  'first name': 'Brad',
  'last name': 'Trav',
};

x = person2['first name'];

console.log(x);
*/

/*
///////////////////////////////////////////////////////
//////////////////////////////////
////////////////////////
//Lecture 6 (object spread operator & methods)

let x;

const todo = new Object();

todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;

x = todo;

const person = {
  address: {
    coords: {
      lat: 42.9384,
      lng: 71.3232,
    },
  },
};

x = person.address.coords.lat;

const obj1 = {
  a: 1,
  b: 2,
};
const obj2 = {
  c: 3,
  d: 4,
};

const obj3 = { ...obj1, ...obj2 };
const obj4 = Object.assign({}, obj1, obj2);

const todos = [
  {
    id: 1,
    name: 'Buy milk',
  },
  {
    id: 2,
    name: 'Pickup kids from school',
  },
  {
    id: 3,
    name: 'take out the trash',
  },
];

x = todos[0].name;

x = Object.keys(todo); // return array for all the keys
x = Object.keys(todo).length;
x = Object.values(todo);
x = Object.entries(todo); // returns array with key value pairs
x = todo.hasOwnProperty('age');

console.log(x);
*/

/*
///////////////////////////////////////////////////////
//////////////////////////////////
////////////////////////
//Lecture 7 (destructuring & naming & rest operator)

const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.age);

//destructuring

const todo = {
  id: 1,
  title: 'you seem to be a nice person for me',
  user: {
    name: 'Kunji',
  },
};

const {
  id: todoId, // : use to rename
  title,
  user: { name },
} = todo;

console.log(todoId);

//Destructuring arrays
const numbers = [23, 667, 33, 49, 32];

const [first, second, ...rest] = numbers; //here ... is rest operator sicen it is used on left side of assignment
//while ... on right side of assignment is spread operator

console.log(first, second, rest);
*/
/*
///////////////////////////////////////////////////////
//////////////////////////////////
////////////////////////
//Lecture 8 (JSON)

const post = {
  id: 1,
  title: 'Post One',
  body: 'This is the body',
};

// Convert to JSON string
const str = JSON.stringify(post);
// stringify() takes a JavaScript object and then transforms it into a JSON string. JSON. parse() takes a JSON string and then transforms it into a JavaScript object

// Parse JSON
const obj = JSON.parse(str);
console.log(obj.id);

const posts = [
  {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
  },
  { id: 2, title: 'Post Two', body: 'This is the second body' },
];

const str2 = JSON.stringify(posts);

console.log(str2);


*/
/*
///////////////////////////////////////////////////////
//////////////////////////////////
////////////////////////
//Lecture 9 (Object challange)

//STEP1
const library = [
  {
    title: 'Meditation',
    author: 'Marcus Aurelius',
    status: {
      own: false,
      reading: true,
      read: false,
    },
  },
  {
    title: 'As a Man Thinketh',
    author: 'James Allen',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Night Train at Deoli',
    author: 'Ruskin Bond',
    status: {
      own: false,
      reading: false,
      read: true,
    },
  },
];

//Step2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library);

//STEP3
const [{ title: firstBook }] = library;

console.log(firstBook);

//STEP4
const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);
*/
