const clearBtn = document.querySelector('#clear');

function onClear() {
  const itemList = document.querySelector('ul');
  itemList.innerHTML = '';
}

// //javascript Event Listener
// clearBtn.onclick = function () {
//   alert('Clear Items');
// };

// clearBtn.onclick = function () {
//   console.log('Clear Items'); // we wont get the alert that is put on above line
// };

//addEventListener()
// clearBtn.addEventListener('click', () => {
//   alert('Clear Items');
// });
//Both works

clearBtn.addEventListener('click', onClear); // dont add () here otherwise it will fires of the event

// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// setTimeout((1) => clearBtn.click(), 5000);
