"use strict"

const randomSentenceButton = document.getElementById('randomSentence');
const startButton = document.getElementById('startButton');
const startButtonTwo = document.getElementById('startButton-two');
const gameInfo = document.getElementById('game_info');
const typerA = document.getElementById('typer_a');
const typerB = document.getElementById('typer_b');
const typeA=document.getElementById('typeA');
const typeB=document.getElementById('typeB');
const endButton=document.getElementById('endButton');
const restart_button = document.getElementById('reStartButton');


const senteces =[
'Everything happens for me, not to me.',
'You’re never too important to be nice to people.',
'The most important thing is to find out what is the most important thing.',
'When there is no desire, all things are at peace.',
'What you really value is what you miss, not what you have.',
'You know, there are two good things in life,freedom of thought and freedom of action.',
'The greatest effort is not concerned with results.',
'Neither seek nor avoid, take what comes','Direction matters more than speed.',
'You always admire what you really don’t understand.',
'Little things console us because little things afflict us.'
];





function getRandomSentence(){
  let randomNumber = Math.floor(Math.random() * 10);
  let randomSentences = senteces[randomNumber];
  typerA.textContent = randomSentences;
  typerB.textContent = randomSentences;
startButton.disabled = false;
startButtonTwo.disabled =false;
}

let timerA;
function gameStartsUserA(){
timerA =0;
const timeLimit = timerA * 1000;
    let countdowntime = setInterval(
function getTimer(){
  document.querySelector(".countdown_starts").innerHTML = "Your Timer starts now: " + timerA + " seconds";
  timerA++;
  endButton.addEventListener('click', ()=>{
    clearInterval(countdowntime);
    document.querySelector(".countdown_starts").innerHTML = "Your speed is " + timerA + " seconds";
});
}, 1000);

}

let timerB;
function gameStartsUserB(){
 timerB =0;
const timeLimit = timerB * 1000;
    let countdowntime = setInterval(
    function getTimer(){
      document.querySelector(".countdown").innerHTML = "Your Timer starts now: " + timerB + " seconds";
      timerB++;
      endButton.addEventListener('click', ()=>{
        clearInterval(countdowntime);
        document.querySelector(".countdown").innerHTML = "Your speed is " + timerB + " seconds";
    });
}, 1000);
gameEnds();
}

function gameEnds(){
if(timerA<timerB){
  gameInfo.textContent="WINNER: typer A";
  var confettiSettings = {
        target: 'my-canvas-one'
      };
      var confetti = new ConfettiGenerator(confettiSettings);
      confetti.render();
}
else if(timerA>timerB){
  gameInfo.textContent="WINNER: typer B";
  var confettiSettings = {
      target: 'my-canvas-two'
    };
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
} else if (timerA === timerB) {
    gameInfo.innerHTML = "Its a Tie ";

}
}



function restartTheGame() {
  document.location.href = "";
}


randomSentenceButton.addEventListener('click', getRandomSentence);
startButton.addEventListener('click', gameStartsUserA);
startButtonTwo.addEventListener('click', gameStartsUserB);
restart_button.addEventListener("click", restartTheGame);
