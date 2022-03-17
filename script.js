// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback

var difficulty = 'easy';

const hardButton = document.getElementById("button6");
const mediumButton = document.getElementById("button5");


//Global Variables
let pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound

function changeDifficulty(input){
  //setting global variable to be equal to the local variable to be used again in another function
  difficulty = input;
    if(!gamePlaying){
      if(input === 'medium'){
        clueHoldTime = 450;
        mediumButton.classList.remove("hidden");
        
        if (hardButton.classList === "hidden"){
        }else{hardButton.classList.add("hidden")}
        
      } else if(input === 'hard'){
        clueHoldTime = 250;
        console.log(difficulty);
        
        //If the visibility is already hidden then do nothing if not then hide it
        mediumButton.classList.remove("hidden");
        hardButton.classList.remove("hidden");
        
      } else if(input === 'easy'){
        clueHoldTime = 1000;
        
        //If the visibility is already hidden then do nothing if not then hide it
        if (mediumButton.classList === "hidden"){
        }else{mediumButton.classList.add("hidden")}
        
        if (hardButton.classList === "hidden"){
        }else{hardButton.classList.add("hidden")}
        
      }
    }
  }

//Creates a random pattern based on the difficulty
function randomPattern(){
  if (difficulty === "easy"){
    let count = 0;
    for(let i = 0; i < 5; i++){
    pattern.push(Math.ceil(Math.random() * 3));
    }
  }
    
  else if(difficulty === "medium"){
    let count = 0;
    for(let i = 0; i < 7; i++){
    pattern.push(Math.ceil(Math.random() * 4));
    }
  }
    
  else if(difficulty === "hard"){
    let count = 0;
    for(let i = 0; i < 9; i++){
    pattern.push(Math.ceil(Math.random() * 5));
    }
  }   
}


function startGame(){
  //initialize game variables
  pattern = [];
  progress = 0;
  gamePlaying = true;
  randomPattern();
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
  
}

function stopGame(){
  gamePlaying = false;
  
  // swap the Start and Stop buttons
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 566.2,
  6: 700
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}

function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!.");
}

function guess(btn){
  console.log("user guessed: " + btn);
  
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn){
    //Guess was correct!
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        winGame();
      }else{
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }else{
    //Guess was incorrect
    //GAME OVER: LOSE!
    loseGame();
  }
}
