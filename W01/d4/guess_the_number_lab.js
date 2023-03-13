const readline = require('readline-sync');
const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
        x = false;
        do {
            x = this.render(this.getGuess());
        } while(!x);
    }
  };

  game.preGuesses = [];
  game.getGuess = function(){
    let guess = readline.question(`Please enter a number between ${this.smallestNum} and ${this.biggestNum}: `);
    let input = parseInt(guess);

    while(!Number.isInteger(input)){
        input = parseInt(
        readline.question(
        `That is an invalid input please try again.\n
        Please enter a number between ${this.biggestNum} and ${this.smallestNum}: `))
    }
    
    if(Number.isInteger(input)){
        game.preGuesses.push(input);
        return input;
    }
    console.log("ERROR");
  }

  game.render = function(num_input){

    if(num_input == this.secretNum){
        console.log(`Correct! The number is ${this.secretNum}. This took ${this.preGuesses.length} guesses.`);
        return true;
    }

    let num_array = "Previous guesses: " + game.preGuesses[0];

    if(num_input > this.secretNum ){
        console.log("Sorry your number is too high!");
    }else{
        console.log("Sorry your number is too low!");
    }
   
    for (let i = 1; i < this.preGuesses.length; i++)
        num_array += ", " + this.preGuesses[i];
    console.log(num_array);
    return false;
  }



  game.play();
