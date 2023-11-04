///////////////////////////////////////////////////////////////
//////////////////////////////////////////
/////////////////////
//Lecture1 (For loop)
/*
//for ((initial expression); (condition expression); (incement expression)){statement;}

//Initital expression - Initializes a variable/counter
//Condition expression - condition that the loop will continue to run as long as it is met or until the ccondition is false
//Incement exppression - Expression that will be executed after each iteration the variable
//Statement - Code that will be executed each time the loop is run,. to execute a 'block' of code, use the '{}' syntax

for (let i = 0; i <= 10; i++) {
  if (i === 7) {
    console.log('7 is my lucky number');
  } else {
    console.log('Number ' + i);
  }
}

//Nest loop
for (let i = 1; i <= 10; i++) {
  console.log('Number ' + i);

  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

//Loop through an array

const names = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];

for (let i = 0; i < names.length; i++) {
  if (names[i] == 'Sara') {
    console.log('Sara is the best');
  } else {
    console.log(names[i]);
  }
}
*/
/*
///////////////////////////////////////////////////////////////
//////////////////////////////////////////
/////////////////////
//Lecture2 (Break & continue)

//break - breaks teh loop if thhe condition is matched
for (let i = 0; i <= 20; i++) {
  if (i === 15) {
    console.log('Breaking...');
    break;
  }

  console.log(i);
}

// continue - we can skip the rest of the code in a current iteration and then continue to rest of the code
for (let i = 0; i <= 20; i++) {
  if (i === 13) {
    console.log('Skipping 13');
    continue;
  }
  console.log(i);
}
*/
/*
///////////////////////////////////////////////////////////////
//////////////////////////////////////////
/////////////////////
//Lecture3 (while & do while)

//While

let i = 0;
while (i <= 20) {
  console.log('Number' + i);
  i++;
}

//Loop over an arrays
let i = 0;
const arr = [10, 20, 30, 40, 50];
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}


//Nesting while loops

let i = 0;
while (i <= 5) {
  console.log('Number ' + i);

  let j = 1;
  while (j <= 5) {
    console.log(`${i} * ${j} = ${i * j}`);
    j++;
  }
  i++;
}

//Do while loop
let i = 0;

do {
  console.log('Number ' + i);
  i++;
} while (i < 20);

*/
/*
///////////////////////////////////////////////////////////////
//////////////////////////////////////////
/////////////////////
//Lecture4 (FizzBuzz challenge)

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('FizzBuzz');
  } else if (i % 5 == 0) {
    console.log('Buzz');
  } else if (i % 3 == 0) {
    console.log('Fizz');
  } else {
    console.log(i);
  }
}


*/
///////////////////////////////////////////////////////////////
//////////////////////////////////////////
/////////////////////
//Lecture5 (For Of loop) //wem can looop of arrays and strings and maps
/*
const items = ['book', 'table', 'chair', 'kite'];

for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

for (const item of items) {
  console.log(item);
}

//loop over strings

const str = 'Hello World';

for (const letter of str) {
  console.log(letter);
}

//loop over maps

const map = new Map();

map.set('name', 'John');
map.set('age', 30);

for (const [key, value] of map) {
  console.log(key, value);
}

*/
/*
///////////////////////////////////////////////////////////////
//////////////////////////////////////////
/////////////////////
//Lecture6 (For in loop) //we can use to loop in object, as well as in arrays

const colorObj = {
  color1: 'red',
  color2: 'blue',
  color3: 'orange',
  color4: 'green',
};

for (const key in colorObj) {
  console.log(key, colorObj[key]);
}

const colorArr = ['red', 'green', 'blue', 'yellow'];

for (const color in colorArr) {
  console.log(colorArr[color]); //index i.e. keys
}
*/
/*
///////////////////////////////////////////////////////////////
//////////////////////////////////////////
/////////////////////
//Lecture7 (ForEach)

foeEach does not return anything, it returns undefined, and is not chainable and forEach() method is an iterative method

const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

// console.log(socials.__proto__);

socials.forEach(function (item, index, arr) {
  //every element for the array
  console.log(`${index} - ${item}`, arr);
});

function logSocials(social) {
  console.log(social);
}

socials.forEach(logSocials);

const socialObjs = [
  { name: 'Twitter', url: 'https://twitter.com' },
  { name: 'facebook', url: 'https://facebook.com' },
  { name: 'LinkedIn', url: 'https://linkedin.com' },
  { name: 'Instagram', url: 'https://instagram.com' },
];

socialObjs.forEach((item) => console.log(item.url));

*/
/*
///////////////////////////////////////////////////////////////
//////////////////////////////////////////
/////////////////////
//Lecture8 (Filter)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const evenNumbers = numbers.filter(function (number) {
//   return number % 2 === 0;
// });

//short version
// const evenNumbers = numbers.filter((number) => number % 2 === 0);

let evenNumbers = [];

numbers.forEach((number) => {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
});

console.log(evenNumbers);

const companies = [
  {
    name: 'Company One',
    category: 'Finance',
    start: 1981,
    end: 2004,
  },
  {
    name: 'Company Two',
    category: 'Retail',
    start: 1982,
    end: 2008,
  },
  {
    name: 'Company Three',
    category: 'Auto',
    start: 1999,
    end: 2007,
  },
  {
    name: 'Company Four',
    category: 'Retail',
    start: 1989,
    end: 2010,
  },
  {
    name: 'Company Five',
    category: 'Technology',
    start: 2009,
    end: 2014,
  },
  {
    name: 'Company Six',
    category: 'Finance',
    start: 1987,
    end: 2010,
  },
  {
    name: 'Company Seven',
    category: 'Auto',
    start: 1986,
    end: 1996,
  },
  {
    name: 'Company Eight',
    category: 'Technology',
    start: 2011,
    end: 2016,
  },
  {
    name: 'Company Nine',
    category: 'Retail',
    start: 1981,
    end: 1989,
  },
];

//get only retail company

const retailCompanies = companies.filter(
  (company) => company.category === 'Retail'
);

console.log(retailCompanies);

//get companies that started in on after 1980 and ended in or before 2005

const earlyCompanies = companies.filter(
  (company) => company.start >= 1980 && company.end <= 2005
);

console.log(earlyCompanies);

*/
/*
///////////////////////////////////////////////////////////////
//////////////////////////////////////////
/////////////////////
//Lecture9 (map)

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers);

//same with forEach

const doubledNumbers2 = [];
numbers.forEach((number) => {
  doubledNumbers2.push(number * 2);
});

console.log(doubledNumbers2);

const companies = [
  {
    name: 'Company One',
    category: 'Finance',
    start: 1981,
    end: 2004,
  },
  {
    name: 'Company Two',
    category: 'Retail',
    start: 1982,
    end: 2008,
  },
  {
    name: 'Company Three',
    category: 'Auto',
    start: 1999,
    end: 2007,
  },
  {
    name: 'Company Four',
    category: 'Retail',
    start: 1989,
    end: 2010,
  },
  {
    name: 'Company Five',
    category: 'Technology',
    start: 2009,
    end: 2014,
  },
  {
    name: 'Company Six',
    category: 'Finance',
    start: 1987,
    end: 2010,
  },
  {
    name: 'Company Seven',
    category: 'Auto',
    start: 1986,
    end: 1996,
  },
  {
    name: 'Company Eight',
    category: 'Technology',
    start: 2011,
    end: 2016,
  },
  {
    name: 'Company Nine',
    category: 'Retail',
    start: 1981,
    end: 1989,
  },
];

// Create an array of company names
const companyNames = companies.map((company) => company.name);
// console.log(companyNames);

//Create an array with just company and category
const companyInfo = companies.map((company) => {
  return {
    name: company.name,
    category: company.category,
  };
});

//create an array of objects with the name and the length of each company in years
const companyYears = companies.map((company) => {
  return {
    name: company.name,
    length: company.end - company.start,
  };
});

console.log(companyYears);

//Chain map methods
const squareAndDouble = numbers
  .map((number) => Math.sqrt(number))
  .map((sqrt) => sqrt * 2);
//chaining happens left to right ie first mehtod on left will eavaluate then the one on right

const squareAndDouble2 = numbers
  .map(function (number) {
    return Math.sqrt(number);
  })
  .map(function (sqrt) {
    return sqrt * 2;
  })
  .map(function (sqrtDoubled) {
    return sqrtDoubled * 3;
  });

//Chaining different methods

const evenDouble = numbers
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2);

console.log(evenDouble);

*/
/*
///////////////////////////////////////////////////////////////
//////////////////////////////////////////
/////////////////////
//Lecture10 (reduce)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

const sum2 = numbers.reduce((acc, cur) => acc + cur, 10);

console.log(sum2);

//Using a for loop

const sum3 = () => {
  let acc = 0;
  for (const cur of numbers) {
    acc += cur;
  }
  return acc;
};

console.log(sum3());

//realsitc example

const cart = [
  {
    id: 1,
    name: ' Product 1',
    price: 130,
  },
  {
    id: 2,
    name: ' Product 2',
    price: 150,
  },
  {
    id: 3,
    name: ' Product 3',
    price: 175,
  },
];

const total = cart.reduce(function (acc, product) {
  return acc + product.price;
}, 0);


*/
/*
///////////////////////////////////////////////////////////////
//////////////////////////////////////////
/////////////////////
//Lecture11 (challenge)

const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    phone: '111-111-1111',
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: 'Poe',
    email: 'jane@gmail.com',
    phone: '222-222-2222',
    age: 25,
  },
  {
    firstName: 'Bob',
    lastName: 'Foe',
    email: 'bob@gmail.com',
    phone: '333-333-3333',
    age: 45,
  },
  {
    firstName: 'Sara',
    lastName: 'Soe',
    email: 'Sara@gmail.com',
    phone: '444-444-4444',
    age: 19,
  },
  {
    firstName: 'Jose',
    lastName: 'Koe',
    email: 'jose@gmail.com',
    phone: '555-555-5555',
    age: 23,
  },
];

const youngPeople = people
  .filter((peoples) => {
    return peoples.age <= 25;
  })
  .map((people) => ({
    name: people.firstName + ' ' + people.lastName,
    email: people.email,
  }));

console.log(youngPeople);

// /challenge 2

const numbers = [2, -30, 50, 20, -12, -9, 7];

const postitiveSum = numbers
  .filter((number) => number > 0)
  .reduce((acc, number) => {
    return acc + number;
  }, 0);

console.log(postitiveSum);

//challenge3

const words = ['coder', 'programmer', 'developer'];

const capitalizedWords = words.map((word) => {
  return `${word[0].toUpperCase()}${word.slice(1)}`;
});

console.log(capitalizedWords);

*/
///////////////////////////////////////////////////////////////
//////////////////////////////////////////
/////////////////////
