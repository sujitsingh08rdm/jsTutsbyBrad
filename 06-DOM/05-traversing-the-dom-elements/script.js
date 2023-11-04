////////////////////////////////////////////////////////////
//////////////////////////////
//////////////
//Lecture 1

/*
// let output;

// // get child elements

// const parent = document.querySelector('.parent');

// output = parent.children;

// output = parent.children[1].innerText;
// output = parent.children[1].className;
// output = parent.children[1].nodeName;

// parent.children[1].innerText = 'Child Two';
// parent.children[1].style.color = 'Red';

// parent.firstElementChild.innerText = 'Child One';
// parent.lastElementChild.innerText = 'Child Three';

// //Get parent elements from a child

// const child = document.querySelector('.child');

// output = child.parentElement;
// child.parentElement.style.border = '1px solid #ccc';
// child.parentElement.style.border = '10px solid #ccc';

// console.log(output);

// // Sibling elements
// const secondItem = document.querySelector('.child:nth-child(2)');

// output = secondItem;
// output = secondItem.nextElementSibling;

// secondItem.nextElementSibling.style.color = 'green';
// secondItem.previousElementSibling.style.color = 'orange';

// console.log(output);
*/
/*
//////////////////////////////////////////////////////////////
//////////////////////////////
//////////////
//Lecture 2 (traveersing the DOM - node)

let output;

const parent = document.querySelector('.parent');

output = parent.childNodes;
output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].outerHTML;

output = parent.childNodes[3].innerText = 'Child One';
output = parent.childNodes[5].style.color = 'red';
parent.lastChild.textContent = 'Hello';

//parent node

const child = document.querySelector('.child');

output = child.parentNode;
output = child.parentElement;

child.parentNode.style.backgroundColor = '#ccc';
child.parentNode.style.padding = '10px';

//siblings
const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem.nextSibling;

console.log(output);

*/
/*
//////////////////////////////////////////////////////////////
//////////////////////////////
//////////////
//Lecture 3 (create and append a elements)

const div = document.createElement('div');

div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'My Element');

// div.innerText = 'hello World';

const text = document.createTextNode('Hello World');
div.appendChild(text);

// document.body.appendChild(div);

document.querySelector('ul').appendChild(div);



*/
//////////////////////////////////////////////////////////////
//////////////////////////////
//////////////
//Lecture 4 (create and append a elements)
