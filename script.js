'use strict';

let secretNUmber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

console.log(secretNUmber);

const displayMessage = function (msg) {
  document.querySelector('.message').textContent = msg;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('No Number');
  } else if (guess == secretNUmber) {
    displayMessage('You Win');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNUmber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess != secretNUmber) {
    displayMessage('Try Again');
    if (score > 1) {
      if (guess > secretNUmber) {
        displayMessage('Guessing Too High');
        score--;
        document.querySelector('.score').textContent = score;
      } else if (guess < secretNUmber) {
        displayMessage('Guessing Too Low');
        score--;
        document.querySelector('.score').textContent = score;
      }
    } else {
      displayMessage('You Lost');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  //   let secretNUmber = Math.trunc(Math.random() * 20) + 1;
  //   let score = 20;
  //   document.querySelector('body').style.backgroundColor = 'black';
  //   displayMessage('Start Guessing...');
  //   document.querySelector('.score').textContent = score;
  //   document.querySelector('.number').textContent = '?';
  //   document.querySelector('.guess').value = '';
  location.reload();
});
