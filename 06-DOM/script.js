/*
///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////
/////////////////////////
//lecture1 (Document element Porperties1)

let output;

// document.all is deprecated
output = document.all;
output = document.all[11];
output = document.all.length;

// Everything in the html tags
output = document.documentElement;

// Head and body tags
output = document.head;
output = document.body;

// HTMLCollection of everything in head/body
output = document.head.children;
output = document.body.children;

// Random properties
output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.contentType;

// Get all forms
output = document.forms;
output = document.forms[0];
output = document.forms[0].id;
output = document.forms[0].method;
output = document.forms[0].action;

// Change a form id
document.forms[0].id = 'new-id';

// Get all links
// output = document.links;
// output = document.links[0];
// output = document.links[0].href;
// output = document.links[0].href = 'https://facebook.com';
// output = document.links[0].id = 'google-link';
// output = document.links[0].className = 'google-class';
// output = document.links[0].classList;

// Get all images
output = document.images;
output = document.images[0];
output = document.images[0].src;

// Turn an HTMLCollection into an array
const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form));

console.log(output);
*/
/*
///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////
/////////////////////////
//lecture2 (DOM Selectors - Single element)

console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').class);
console.log(document.getElementById('app-title').getAttribute('id'));

//Set attribute

document.getElementById('app-title').title = 'Shopping List';
document.getElementById('app-title').setAttribute('class', 'title');

const title = document.getElementById('app-title');

console.log(title);

//Get/change content

console.log(title.textContent);
title.textContent = 'Hello World';
title.innerText = 'Hello Again';

title.innerHTML = '<strong>Shopping List</strong>';

//Change styles

title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '10px';

console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('li:nth-child(2)').innerText);

const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Apple Juice';
secondItem.style.color = 'red';

//Use these methods on otehr elements

const list = document.querySelector('ul');
console.log(list);

const firstItem = list.querySelector('li');

firstItem.style.color = 'blue';


*/
/*
///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////
/////////////////////////
//lecture3 (DOM Selectors - multiple element)

const listItems = document.querySelectorAll('.item');

console.log(listItems); //querySelectorAll give a NodeList, which is a array like structure
// difffrence between HTML Collection and NodeList is that we can use High Order array methods on NodeList

console.log(listItems[1].innerText); //gives 2nd element

listItems.forEach((item, index) => {
  item.style.color = 'red';

  if (index === 1) {
    item.remove();
  }

  if (index === 0) {
    item.innerText = 'Oranges';
  }
});

const listItems2 = document.getElementsByClassName('item'); // it is an HTML collection

console.log(listItems2[2].innerText);

// listItems2.forEach((item) => {
//   console.log(item.innerText);
// });  cant do since not array

const listItemsArray = Array.from(listItems2);

listItemsArray.forEach((item) => {
  console.log(item.innerText);
});

const listItems3 = document.getElementsByTagName('li');
console.log(listItems3[0].innerHTML);
*/

///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////
/////////////////////////
//lecture4 (innerHTML vs createElement())

//Quick and Dirty
/*
function createListItem(item) {
  const li = document.createElement('li');
  li.innerHTML = `${item}
  <button class="remove-item btn-link text-red">
    <i class="fa-solid fa-xmark"></i>
  </button>`;
  document.querySelector('.items').appendChild(li);
}

//Clean and Performant

function createNewItem(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = document.createElement('button');
  button.className = 'remove-item btn-link text-red';

  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-xmark';

  button.appendChild(icon);
  li.appendChild(button);
  console.log(li.innerHTML);
  document.querySelector('.items').appendChild(li);
}

createListItem('Eggs');
createNewItem('Cheese');
*/

/*
///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////
/////////////////////////
//lecture6 (Refractor to multiple function)

function createNewItem(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = createButton('remove-item btn-link text-red');

  li.appendChild(button);

  document.querySelector('.items').appendChild(li);
}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = 'remove-item btn-link text-red';

  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-xmark';
  return icon;
}

createNewItem('Cheese');
createNewItem('Sauce');
*/
/*
///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////
/////////////////////////
//lecture 7 (insert Elements, Text HTML)

//insertAdjacentElement Example
function insertElement() {
  const filter = document.querySelector('.filter');

  const h1 = document.createElement('h1');
  h1.textContent = 'insertAdjacentElement';

  filter.insertAdjacentElement('beforebegin', h1);
}

//insertAdjacentText example
function insertText() {
  const item = document.querySelector('li:first-child');

  item.insertAdjacentText('beforebegin', 'insertAdjacentText');
}

//insertAdjacentHTML example

function insertHTML() {
  const clearBtn = document.querySelector('#clear');

  clearBtn.insertAdjacentHTML('beforebegin', '<h2>insertAdjacentHTML</h2>');
}

//insertBefore Example
function insertBeforeItem() {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  li.textContent = 'insertBefore';

  const thirdItem = document.querySelector('li:nth-child(3)');

  ul.insertBefore(li, thirdItem);
}

insertElement();
insertText();
insertHTML();
insertBeforeItem();
*/
/*
///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////
/////////////////////////
//lecture 8 (custom insert challange)

function insertAfter(newEl, existingEl) {
  existingEl.parentElement.insertBefore(newEl, existingEl.nextSbiling);
}

//New Element to insert
const li = document.createElement('li');
li.textContent = 'Insert Me After!';

// Existing element to insert after
const firstItem = document.querySelector('li:first-child');

//Our custom function
insertAfter(li, firstItem);
*/
/*
///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////
/////////////////////////
//lecture 9 (replace elements)

function replaceFirstItem() {
  const firstItem = document.querySelector('li:first-child');

  const li = document.createElement('li');
  li.textContent = 'Replaced First';

  firstItem.replaceWith(li);
}

function replaceSecondItem() {
  const secondItem = document.querySelector('li');

  secondItem.outerHTML = '<li>Replace Second</li>';
}

function replaceAllItems() {
  const lis = document.querySelectorAll('li');

  lis.forEach((item, index) => {
    // item.outerHTML = '<li>Repalce All</li>';
    item.innerHTML = 'Replace All';
  });
}

replaceFirstItem();
replaceSecondItem();
replaceAllItems();
*/
///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////
/////////////////////////
//lecture 10 (remove elements)

function removeClearButton() {
  const clearBtn = document.querySelector('#clear');
  clearBtn.remove();
}

function removeFirstItem() {
  const ul = document.querySelector('ul');
  const li = document.querySelector('li:first-child');
  ul.removeChild(li);
}

function removeItem2(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelectorAll('li')[itemNumber - 1];

  ul.removeChild(li);
}

function removeItem3(itemNumber) {
  const li = document.querySelectorAll('li');
  li[itemNumber - 1].remove();
}

const removeItem4 = (itemNumber) =>
  document.querySelectorAll('li')[itemNumber - 1].remove;

removeClearButton();
// removeFirstItem();
removeItem3(3);
