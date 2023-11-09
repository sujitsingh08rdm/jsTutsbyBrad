// window.onload = function () {
//   document.querySelector('h1').textContent = 'Hello World';
// };

window.addEventListener('load', () => console.log('Page loaded'));

window.addEventListener('DOMContentLoaded', () => console.log('DOM Loaded'));

console.log('Run me');

document.querySelector('h1').innerText = 'Hello World';

window.addEventListener('focus', () => {
  document.querySelectorAll('p').forEach((p) => {
    p.style.color = 'blue';
  });
});
window.addEventListener('blur', () => {
  document.querySelectorAll('p').forEach((p) => {
    p.style.color = 'black';
  });
});
