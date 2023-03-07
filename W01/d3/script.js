/*====Lessons====*/
fnDeclaration();  // thank you function declarations :)
//fnExpression();  // TypeError: fnExpression is not a function

function fnDeclaration() {
  console.log("I'm coming from a function declaration\n\n");
}

const fnExpression = function() {
  console.log("I'm coming from a function expression");
};

// Arrow Function
const add = (a, b) => a + b;
/*====Lessons====*/

/*


EXERCISE 1: Write a Function Declaration (5 min)
Write a function named computeArea as a function declaration.

It will have two parameters: width & height.

It will compute the area of a rectangle (width X height) and return a string in the following form:

The area of a rectangle with a width of ___ and a height of ___ is ___ square units

Invoke the function to test it:


// output: The area of a rectangle with a width of 5 and a height of 25 is 125 square units
*/

function computeArea(width, height){
    return "The area of a retangle with a width of " + width + " and a height of " + height + " is " + height * width + " square units";
}
console.log( computeArea(5, 25) );

/*
EXERCISE 2: Write a Function Expression (10 min)
Write a function named planetHasWater as a function expression.

It will have one parameter: planet.

Return true if the planet argument is either "Earth" or "Mars", otherwise return false.

Bonus points if you ensure the function will work regardless of the casing of the planet being passed in ('earth', 'MARS', etc.).

Invoke the function a few times to test it:
*/

const planetHasWater = function(planet){
    input = planet.toLowerCase();
    if(input === "earth" || input === "mars")
        return true;
    return false;
}

console.log(planetHasWater("maRs"));