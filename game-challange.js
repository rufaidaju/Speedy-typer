"use strict"

const randomSentenceButton = document.getElementById('randomSentence');
const startButton = document.getElementById('startButton');
const typerA = document.getElementById('typer_a');
const typerB = document.getElementById('typer_b');
const typeA=document.getElementById('typeA');
const typeB=document.getElementById('typeB');

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
//startButton.disabled = false;
}


function getTimer(){

  /*|let timer = setTimeout(setInterval(()=>console.log('timer'),1000),10000);
  clearInterval(timer);*/

/*  typeA.innerHTML
  setTimeout(()=>{
    console.log('timeout')
  },30000);*/
}






randomSentenceButton.addEventListener('click', getRandomSentence);
startButton.addEventListener('click', getTimer);
