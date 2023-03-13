const readline = require('readline-sync');


const game = {
    title: 'Guess the Number!',
    biggestNum:100
};
game.smallestNum = 1;
console.log(game);

const catalog = {
    sweater: 45,
    pant : 20,
    baseball_hat: 15
};

const words = {
    'animals': ['fox', 'zebra', 'bear', 'turkey'],
    'colors': ['purple', 'orange', 'green'],
    // ...other categories
  };

const wordList = words['animals'];

let sku = '';
while (sku !== 'quit') {
  sku = readline.question('Enter SKU or "quit" to exit: ');

  if(sku in catalog){
    let price = catalog[sku];

    console.log(`The price of ${sku} is ${price}`);
  }
    else if (sku !== 'quit'){
        console.log('Invalid SKU - try again');
    }

}

delete catalog.baseball_hat;