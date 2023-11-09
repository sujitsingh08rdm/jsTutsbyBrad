const itemInput = document.getElementById('item-input');

const onKeyPress = (e) => {
  console.log('keypress');
};

const onKeyUp = (e) => {
  console.log('keyup');
};

const onKeyDown = (e) => {
  //Key
  console.log(e.key);
  document.querySelector('h1').innerText = e.key;

  //keyCode
  console.log();

  //code
  if (e.code === 'Digit1') {
    console.log('You pressed 1');
  }

  if (e.repeat) {
    console.log('You are holding down ' + e.key);
  }

  if (e.shiftKey && e.key === 'K') {
    console.log('You hit shift + K');
  }
};

//itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);
