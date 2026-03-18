// ==========================================
// 1. CALCULATING THE CLASS AVERAGE
// ==========================================
let scores = [100, 200];
let totalSum = 0;

// Loop through the array and add each score to our totalSum pile
for (let i = 0; i < scores.length; i++) {
  totalSum += scores[i];
}

// Divide the final pile by the number of students and round the result
let average = Math.round(totalSum / scores.length);
console.log("Class Average:", average); // Prints: 150


// ==========================================
// 2 & 3. GENERATING AND FILLING ARRAYS
// ==========================================

// Challenge 2: Create an array of length 5 and instantly fill every slot with a 0
let n = 5;
let fastArr = new Array(n).fill(0);
console.log("Filled with Zeros:", fastArr); // Prints: [0, 0, 0, 0, 0]

// Challenge 3: Create an array of length 5 and fill it with natural numbers (1 to 5)
let num = 5;
let arr = [];
let dummyArr = new Array(num).fill(0); // Create a dummy array to loop over

// Loop over the dummy array, adding 1 to the index to get 1, 2, 3, 4, 5
dummyArr.forEach((elem, id) => arr.push(id + 1));
console.log("Natural Numbers:", arr); // Prints: [1, 2, 3, 4, 5]


// ==========================================
// 4. MCU HEROES ARRAY MANIPULATION
// ==========================================
let heroes = [
  "ironman",
  "captain",
  "black widow",
  "wanda",
  "hulk",
  "black panther",
];

// a) Add 'spiderman' to the end and 'thor' to the start
heroes.push("spiderman");
heroes.unshift("thor");

// b) Find exactly where 'black widow' is sitting, then replace her with 'hawkeye'
const index = heroes.indexOf('black widow');
heroes.splice(index, 1, 'hawkeye');

// c) Ask the array a Yes/No question: Is 'captain' still here?
const captain = heroes.includes('captain');

console.log("Updated Roster:", heroes);
console.log("Is Captain present?", captain); // Prints: true


// ==========================================
// 5. ARRAY DETECTOR & DATA CONVERTER
// ==========================================
let userArr = ["akash"];
let sur = "magar";

// Check if a variable is actually an array (typeof doesn't work well for this!)
console.log("Is userArr an array?", Array.isArray(userArr)); // true

// Convert a string into an array of letters using two different modern methods
console.log("Spread Operator:", [...sur]);   // ['m', 'a', 'g', 'a', 'r']
console.log("Array.from:", Array.from(sur)); // ['m', 'a', 'g', 'a', 'r']

// Convert an Object into an Array of Key-Value pairs
let users = { name: "Akash", age: 25 };
console.log("Object to Array:", Object.entries(users)); // [['name', 'Akash'], ['age', 25]]


// ==========================================
// 6. THE ULTIMATE JUNK DRAWER (MIXED DATATYPES)
// ==========================================
let a = 10;                  // Number
let b = "akash";             // String
let c = { names: "harsh" };  // Object
let d = [1, 2, 3];           // Array

// JavaScript allows us to pack completely different data types into one single array
console.log("Combined Array:", [a, b, c, d]);


// ==========================================
// 7. THE PALINDROME CHECKER
// ==========================================
const isPali = (name) => {
  // Chop the string into letters, reverse the list, and glue it back together
  const reverse = name.split("").reverse().join("");
  // Check if the reversed word matches the original word
  return reverse === name ? true : false;
};

console.log("Is racecar a palindrome?", isPali("racecar")); // true
console.log("Is akash a palindrome?", isPali("akash"));     // false


// ==========================================
// 8. TITLE CASE / CAPITALIZE FIRST LETTERS
// ==========================================
let hero = "iron man is cool";

// Chop the sentence at every space to create an array of individual words
let wordsArr = hero.split(' ');
console.log("Chopped words:", wordsArr);

// Loop over every single word
wordsArr.forEach((elem) => {
  // Grab the 1st letter and capitalize it + Grab the rest of the word starting at index 1
  console.log(elem[0].toUpperCase() + elem.slice(1));
});