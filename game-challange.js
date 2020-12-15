"use strict"
const randomSentenceButton = document.getElementById('randomSentence');
const typerA = document.getElementById('typer_a');
const typerB = document.getElementById('typer_b');
const sentence = document.getElementById('sentence');
const startA = document.getElementById('start-a');
const startB = document.getElementById('start-b');
const Atimer = document.getElementById('a-timer');
const Btimer = document.getElementById('b-timer');

const senteces =[
'Everything happens for me, not to me.',
'You’re never too important to be nice to people.',
'The most important thing is to find out what is the most important thing.',
'When there is no desire, all things are at peace.',
'What you really value is what you miss, not what you have.',
'You know, there are two good things in life,freedom of thought and freedom of action.',
'The greatest effort is not concerned with results.',
'Neither seek nor avoid, take what comes','Direction matters more than speed.',
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
  addTimer(Atimer);
  startA.disabled = 'disabled';
})
startB.addEventListener('click',()=>{
  addTimer(Btimer);
  startB.disabled = 'disabled';
})