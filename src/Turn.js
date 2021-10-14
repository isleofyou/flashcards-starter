/* eslint-disable no-console */

class Turn {
  constructor (guess, card) {
    this.guess = guess;
    this.card = card;
  }
  returnGuess() {
    return this.guess;
  }
  returnCard() {
    return this.card;
  }
  evaluateGuess() {
    if (this.guess === this.card) {
      return true;
    } else { 
      return false;
    }
  }
  giveFeedback() {
    if (this.guess === this.card) {
      var correct = 'correct!';
      return correct;
            
    } else {
      var incorrect = "incorrect!"
      return incorrect;
    }
  }
}

module.exports = Turn;