// ==========================================
// 1. THE USERNAME GENERATOR
// ==========================================
let user = "akash";
// We use a template literal to glue the "@" symbol, the name, and the length together.
const final = `@${user}_${user.length}`;

console.log(final); // Prints: @akash_5


// ==========================================
// 2. THE CHARACTER DETECTIVE (Strict Match)
// ==========================================
let myWord = "banana";
let letter = "a";
let count = 0; // Our scoreboard

// Start at 0, and keep looping as long as 'i' is strictly LESS THAN the word's length.
for (let i = 0; i < myWord.length; i++) {
  // Check if the current letter matches our target
  if (myWord[i] === letter) {
    count++; // If it's a match, add 1 to the scoreboard!
  }
}

console.log(`You have found the '${letter}' letter ${count} times.`); // Prints: 3


// ==========================================
// 3. THE WORD COUNTER
// ==========================================
let sentence = 'coding is fun';

// STEP 1: .split(' ') chops the sentence at every space, turning it into an Array: ['coding', 'is', 'fun']
// STEP 2: .length counts how many items are inside that new Array!
console.log(sentence.split(' ').length); // Prints: 3