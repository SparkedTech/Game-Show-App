/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  //constructor method accepts an array of strings as an argument
    constructor(array) {
      //Tracks misses
      this.missed = 0;
      //arrayLiteral is set to the array passed in the contructor method
      this.arrayLiteral = array;
      //phrases is set to the createPhrases method to grab a random phrase
      this.phrases = this.createPhrases();
      //activePhrase respresents the phrase on screen
      this.activePhrase = null;
    }
  
    //hides the overlay, sets the acticePhrase &  adds it to the screen
    startGame() {
      document.querySelector('#overlay').style.display = 'none';
      this.activePhrase = this.getRandomPhrase();
      this.activePhrase.addPhraseToDisplay();
    }
  
    //returns an array of 5 unique phrases grabbed from the arrayLiteral
    createPhrases() {
      let phrase_0 = [];
      let phrases = [];
      for (let i=0;i<5;) {
        let makeRandom = Math.floor(Math.random() * this.arrayLiteral.length);
        let phrase = this.arrayLiteral[makeRandom];
        if(phrase_0.indexOf(phrase)===-1) {
        phrase_0.push(phrase)
        i++
        }
      }
      for (let j=0;j<phrase_0.length;j++) {
        phrases.push(new Phrase(phrase_0[j]))
      }
      return phrases;
    }
  
  //returns a random phrase from the phrases array
    getRandomPhrase() {
      let makeRandom = Math.floor(Math.random() * this.phrases.length);
      let randomPhrase = this.phrases[makeRandom];
      return randomPhrase;
    };
  
   //takes in the letter that triggers the event as an argument
    handleInteraction(letter) {
      //letter selected is disabled so its not chosen again
      letter.setAttribute('disabled', true);
      //this stores the value returned by the checkLetter method
      let userHit = this.activePhrase.checkLetter(letter.textContent);
      //for every wrong letter, this calls the removeLife method & adds the letter to the "wrong" class
      if (userHit === null  && letter.className != "key wrong"){
        game.removeLife();
        letter.className += " wrong";
      }
      //for every right letter, the letter is added to the "chosen" class
      else if (userHit != null && letter.className != "key chosen") {
        letter.className += " chosen";
      }
    }
  
  
  
  
  
  
  
  checkForWin() {
    //the # of elements with the shown class, each of which is added when selected
    const phraseShown = document.querySelectorAll('.show').length;
    //this is the # of letters in the phrase
    const totalLetters = document.querySelectorAll('.letter').length;
    
    if (phraseShown === totalLetters) {
      this.gameOver();
      } 
  }
  
  checkForLost(){
    if (this.missed >= 5) {
      this.gameOver();
  }
  }
  
  //gme over function
  gameOver() {
    const overlayScreen = document.querySelector('#overlay');
    const h2 = document.querySelector('h2.title');   
    // If the player has 5 missed guesses then the game is over
          if (this.missed >= 5) {
           overlayScreen.style.display = '';
           overlayScreen.className = 'lose';
           startButton.textContent = 'Try Again'
           h2.textContent = "You Lose!"
           this.missed = 0;
           console.log('GAME OVER - LOSE')
           return false;
          // If the player has less than 5 missed guesses then they won
          } else if (this.missed < 5) {
               overlayScreen.style.display = '';
           overlayScreen.className = 'win';
           startButton.textContent = 'Play Again';
           h2.textContent = "You Win!"
           this.missed = 0;
           console.log('GAME OVER - WIN')
           return true;
            
          }
      }
  
  
  
  
     //Removes a heart and replaces it with the lostHeart image. The missed property is updated.
  removeLife(letter){
    tries[tries.length-1-this.missed].setAttribute('src','images/lostHeart.png');
    this.missed += 1; 
  }
  
  
   
    
    //The qwerty keyboard classes are updated to only contain the 'key' class.
    initializeGame() {
      const chosen = document.querySelectorAll('.key');
      // Initalizes attributes and class settings on display banner and qwerty display
      for(let i=0; i<chosen.length; i++) {
  
        chosen[i].removeAttribute("disabled");
        chosen[i].className = 'key';
      }
      //Removes current phrase being displayed
      const letter = document.querySelectorAll('.letter')
      for (let i=0;i<letter.length;i++) {
          letter[i].parentNode.removeChild(letter[i]);
        }
      const space = document.querySelectorAll('.space')
      for (let i=0;i<space.length;i++) {
          space[i].parentNode.removeChild(space[i]);
        }
    //Initializes Hearts
      for(let i=0; i<tries.length; i++){
            tries[i].setAttribute('src','images/liveHeart.png');
          }
    //startGame method is called and another phrase is generated and displayed
      this.startGame();
    }
  } 
  
  