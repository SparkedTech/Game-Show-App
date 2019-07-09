/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//The Phrase class contains a constructor method that accepts a string as an argument.
class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }

// This method loops through the characters in the phrase and creates list items for each letter then appends them inside of the ul with the id #phrase
  addPhraseToDisplay() {
    const ulOfPhrases = document.querySelector('#phrase ul');
    for(let i=0; i<this.phrase.length; i++) {
      let liPhrase = document.createElement('li');
      liPhrase.textContent = this.phrase[i];
      if (liPhrase.textContent == ' ') {
        liPhrase.className = 'space';
      } else {
        liPhrase.className = 'letter';
      }
      ulOfPhrases.appendChild(liPhrase);
    }
  }

// This methods checks to see if the letter selected exists in the current game phrase. The target that triggers the event is passed as an argument. The method will either return the letter contained in the phrase or return null.
  checkLetter(letter) {
    //letterFound is declared as false and will only become true if the letter shows up in the following loop
    let letterFound = false;
    const letters = document.querySelectorAll('.letter');
      //if current letter being looped over equals the letter being pressed -> add "show class" to letter
    for(let i=0; i<letters.length; i++) {
      if (letters[i].textContent.toUpperCase() === letter.toUpperCase())  {
        letterFound = true;
        this.showMatchedLetter(letters[i]);
      }
    }
      if(letterFound) {
        return letter;
    }
    //If null, the global variable 'missed' is updated.
    //missed += 1
      // game.missed +=1;
      return null;
  }

//If the letter is found the showMatchedLetter method is utilized, adding the "show" class to the element
  showMatchedLetter(letter) {
    letter.className += " show";
  }

}
