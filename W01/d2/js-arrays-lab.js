//cd desktop/sei-4
/*
Exercise 1:
  - Define an empty array named foods
*/
const foods = [];

console.log("Exercise 1 Result :\n", foods );

/*
Exercise 2:
  - Add the strings 'pizza' & 'cheeseburger' to the foods array such that 'pizza' comes before 'cheeseburger'.
*/

foods.push("pizza");
foods.push("cheese burger");


console.log("Exercise 2 Result:\n", foods);

/*
Exercise 3:
  - Add the string 'taco' to the foods array so that 'taco' is the first food in the array.
*/

foods.splice(0,0,"taco");

console.log("Exercise 3 Result:\n", foods);

/*
Exercise 4:
  - Access the string 'pizza' (based upon its known position) in the foods array and assign to a variable named favFood.
*/

let favFood = foods[1];

console.log("Exercise 4 Result:\n", favFood);

/*
Exercise 5:
  - Insert the string 'tofu' in the foods array between 'pizza' & 'cheeseburger'
*/

foods.splice(2,0,"tofu");

console.log("Exercise 5 Result:\n", foods);

/*
Exercise 6:
  - Replace the string 'pizza' in the foods array with the strings 'sushi' & 'cupcake'.
*/


foods.splice(1,1,"sushi");
console.log("Exercise 6 Result:\n", foods);

/*
Exercise 7:
  - Use the slice method on the foods array to create a new array containing 'sushi' & 'cupcake'.
  - Assign the new array to a variable named yummy.
*/
let yummy = foods.splice(1,1);
yummy.push("cupcake");

console.log("Exercise 7 Result:\n", yummy);

/*
Exercise 8:
  - Using the indexOf method on the foods array, assign the index of the 'tofu' string to a variable named soyIdx.
*/

let soyIdx = foods.indexOf("tofu");

console.log("Exercise 8 Result:\n", foods);
console.log("Exercise 8 Result:\n", soyIdx);

/*
Exercise 9:
  - Assign to a variable named allFoods the result of joining the strings in the foods array such that the result is the following single string:
    'taco -> sushi -> cupcake -> tofu -> cheeseburger'
*/

let allFoods = foods[0] + " -> " + yummy[0] + " -> " + yummy[1] + " -> " + foods[1] + " -> " + " -> " + foods[2];

console.log("Exercise 9 Result:\n", allFoods);

/*
Exercise 10:
  - Assign a boolean to a variable named hasSoup depending upon whether or not the foods array includes the string 'soup'.
*/
let hasSoup = false;

foods.forEach(element =>{
  hasSoup = (element.includes("soup"));
})


console.log("Exercise 10 Result:\n", hasSoup);

/*
Exercise 11:
  - Use the forEach method to iterate through the provided nums array and add each odd number to a new array named odds.
  - Hint: Initialize the odds variable to an empty array before the iteration.
*/
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odd = [];
nums.forEach(element =>{
element % 2 == 0 ? "" : odd.push(element);

})


console.log("Exercise 11 Result:\n", odd);

/*
Exercise 12:
  - Use the forEach method to iterate through the same nums array and add the number to arrays named fizz, buzz and/or fizzbuzz based upon the following:
  	- Add to the fizz array if the number is evenly divisible by 3.
  	- Add to the buzz array if the number is evenly divisible by 5.
  	- Add to the fizzbuzz array if the number is evenly divisible by 3 & 5.
*/
let fizz = [];
let buzz = [];
let fizzBuzz = [];

nums.forEach(element => {
  element % 3 == 0 ? fizz.push(element) :"";
  element % 5 == 0 ? buzz.push(element) :"";
  element % 3 == 0 && element % 5 == 0 ? fizzBuzz.push(element) :"";


})


console.log("Exercise 12 num Result:\n", nums);
console.log("Exercise 12 fizz Result:\n", fizz);
console.log("Exercise 12 buzz Result:\n", buzz);
console.log("Exercise 12 fizzBuzz Result:\n", fizzBuzz);


/*
Exercise 13:
  - Given the below numArrays array of arrays (two-dimensional array), assign the last nested array to a variable named numList.
  - Assume you don't know how many nested arrays numArrays contains.
*/
const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

let numList = numArrays[numArrays.length - 1];


console.log("Exercise 13 Result:\n", numList);

/*
Exercise 14:
  - Given the above numArrays array, access the number 66 and assign to a variable named num.
*/
let num = numArrays[2][1];

console.log("Exercise 14 Result:\n", num);

/*
Exercise 15:
  - Given the above numArrays array, use nested forEach methods to sum up all the numbers contained within numArrays and assign to a variable named total.
  - Hint: Be sure to declare and initialize the total variable before the iterations.
*/
let total = "";

numArrays.forEach(element => {
  total += element;

  
})


console.log("Exercise 15 Result:\n", total);



