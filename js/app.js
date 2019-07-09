//global Variables
const phrasesLiteral = [
  `wisdom is wealth`,
  `nobody is born wise`,
  `love yours`,
  `all is mind`,
  `know thyself` 
]
const keyboard = document.querySelector('#qwerty');
const keys = document.querySelectorAll('.key');
const tries = document.querySelectorAll('li.tries img')
const startButton = document.querySelector('#btn__reset');
let game;
let phrase;

//creates a new game object & calls the startGame and initializeGame methods
function startGame() {
  game = new Game(phrasesLiteral);
  game.startGame();
  game.initializeGame()
}

// hide overlay
startButton.addEventListener('click', ()=> {
  startGame();
});

//event listener on the keyboard & any button clicked will pass the event into the handleInteraction method
//then the checkForWin method is called
keyboard.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    let letter = event.target;
    game.handleInteraction(letter);
  }
  
  game.checkForWin();
  if (game.checkForWin() == true) {
    game.gameOver();
  } 
  
  
  game.checkForLost();
  if (game.checkForLost() == false ){
    game.gameOver();
  }
});


//comment not done /comment not done /comment not done /comment not done /comment not done 

//Event listener is triggered upon keypress. If the player presses enter during the start or end screen, 
//the game will reinitialize. Otherwise, the key that is pressed will be passed to the handInteraction method.
window.addEventListener('keypress', (e)=> {
  if(document.querySelector('#overlay').style.display === '') {
    if (e.keyCode == '13') {
      startGame();
    }
  }
  game.activePhrase.checkLetter(event.key);
  for(i=0; i<keys.length; i++) {
    if(e.key === keys[i].textContent) {
      let letter = keys[i];
      game.handleInteraction(letter);
    }
  }
  game.checkForWin();
  if (game.checkForWin() == true) {
    game.gameOver();
  } 
})
