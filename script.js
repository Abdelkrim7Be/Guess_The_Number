'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//example of refactorinfg our code , you can do that to all youe reapeted 
//lines of code
const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //because the type is string , we can t compare it with a number
  console.log(guess);

  //when there is no input 6r 0
  if (!guess) {
    displayMessage('🤦‍♀️no number');
  }
  //when the player wins
  else if (guess === secretNumber){
    //the guess been correct
    displayMessage('🎉 Correct!!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    // to store the record
    if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
  } 
  else
        if(guess !== secretNumber){
            // document.querySelector('.message').textContent = 
            // guess > secretNumber ? '🤷‍♂️ too high' : '🤷‍♂️ too low';
            displayMessage(guess > secretNumber ? '🤷‍♂️ too high' : '🤷‍♂️ too low'); 
          if (score > 1) {
            // document.querySelector('.message').textContent = '🤷‍♂️ too high';
            // displayMessage('🤷‍♂️ too high');
            score--;
            document.querySelector('.score').textContent = score;
          } 
          else {
            // document.querySelector('.message').textContent = 'you lost the game';
            displayMessage('you lost the game');
            document.querySelector('.score').textContent = 0;
          }
  } 
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '🤷‍♂️ too high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'you lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '🤷‍♂️ too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'you lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
});


// Re-play process
  document.querySelector('.again').addEventListener('click', function () {
    // location.reload();
    score=20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });

