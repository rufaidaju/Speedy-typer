"use strict"
const randomSentenceButton = document.getElementById('randomSentence');
const typerA = document.getElementById('typer_a');
const typerB = document.getElementById('typer_b');
const sentence = document.getElementById('sentence');
const startA = document.getElementById('start-a');
const startB = document.getElementById('start-b');
const aTimer = document.getElementById('a-timer');
const bTimer = document.getElementById('b-timer');

const senteces =[
'Everything happens for me, not to me.',
'You’re never too important to be nice to people.',
'Never regret anything that made you smile.',
'When there is no desire, all things are at peace.',
'What you really value is what you miss, not what you have.',
'Aspire to inspire before we expire.',
'The greatest effort is not concerned with results.',
'Problems are not stop signs, they are guidelines.',
"You always admire what you really don't understand.",
'Little things console us because little things afflict us.'
];

function getRandomSentence(){
  let randomNumber = Math.floor(Math.random() * 10);
  let randomSentence = senteces[randomNumber];
  sentence.textContent = randomSentence ;
  typerA.setAttribute('placeholder',randomSentence);
  typerB.setAttribute('placeholder',randomSentence);
  return randomSentence;
}
let randomSentence = getRandomSentence();
let matching = false;

function matchSentence(param){
  let x = param.value;
  return x === randomSentence ? matching = true :false;
}

function addTimer(typer){
  let timer = 0;
  let aInterval=setInterval(()=> {
    timer = timer+1;
    typer.innerHTML =`${timer}`;
    if (matching){
      clearInterval(aInterval);
      matching = false;
    }
  },1000);

}

startA.addEventListener('click',()=>{
  addTimer(aTimer);
  startA.disabled = 'disabled';
})
startB.addEventListener('click',()=>{
  addTimer(bTimer);
  startB.disabled = 'disabled';
})
