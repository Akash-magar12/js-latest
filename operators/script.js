// // 1. Get the inputs
// // prompt() opens a pop-up and gets a string from the user.
// // Number() wraps around it to force that string into a math number.
// // (If they type words, Number() turns it into NaN).
// let num1 = Number(prompt("Enter 1st number"));
// let num2 = Number(prompt("Enter 2nd number"));

// // 2. The Safety Check (The Guard)
// // isNaN() asks: "Is this Not-a-Number?"
// // Logic: If num1 failed to be a number OR num2 failed to be a number...
// if (isNaN(num1) || isNaN(num2)) {
//   // ...tell the user they made a mistake.
//   console.log("Error: Both inputs should be numbers!");
// } else {
//   // 3. The Math (The Happy Path)
//   // If the code reaches 'else', we know for a fact we have two good numbers.
//   console.log(`Addition: ${num1 + num2}`);
//   console.log(`Subtraction: ${num1 - num2}`);
//   console.log(`Division: ${num1 / num2}`);
//   console.log(`Modulo (Remainder): ${num1 % num2}`);
//   console.log(`Exponentiation (Power): ${num1 ** num2}`);
// }
// --- 1. EVEN OR ODD (Modulo + Ternary) ---
let userNumber = 2;
// Divides 2 by 2. If the remainder is exactly 0, it's Even.
const result = userNumber % 2 === 0 ? "Even" : "Odd";
console.log(result); // Prints: "Even"


// --- 2. COMPOUND ASSIGNMENT OPERATORS ---
let x = 5;
x += 3; // x = 5 + 3  -> x is now 8
x -= 2; // x = 8 - 2  -> x is now 6
x *= 4; // x = 6 * 4  -> x is now 24
x /= 6; // x = 24 / 6 -> x is now 4
console.log(x); // Prints: 4

x %= 3; // 4 divided by 3 leaves a remainder of 1
console.log(x); // Prints: 1


// --- 3. LOGICAL RANGE CHECK (AND) ---
let number = 17;
// Checks if the number is BOTH greater than/equal to 10 AND less than/equal to 20
if (number >= 10 && number <= 20) {
  console.log("number is between 10 n 20"); // This runs!
} else {
  console.log("number is not between 10 n 20");
}


// --- 4. FINDING THE LARGEST NUMBER (Two Ways) ---
let num1 = 122;
let num2 = 162;
let num = 121;
let l;

// Method A: The Pro Shortcut
let largest = Math.max(num, num1, num2);
console.log(largest); // Prints: 162

// Method B: The Manual Logic
if (num > num1 && num > num2) {
  l = num;
} else if (num1 > num && num1 > num2) {
  l = num1;
} else {
  // If neither 'num' nor 'num1' are the biggest, it HAS to be 'num2'
  l = num2; 
}
console.log(l); // Prints: 162


// --- 5. THE REAL-WORLD LOGIN SYSTEM (Nested Ifs) ---
let userNamed = "sd";
let passwordd = "sd";
let dbUser = "sd";
let dbPass = "sds"; // Notice the database password has an extra 's'

// Outer If: Check if the user typed ANYTHING in both fields (No empty strings allowed)
if (userNamed && passwordd) {
  
  // Inner If: Check if what they typed exactly matches the database
  if (userNamed === dbUser && passwordd === dbPass) {
    console.log("Login successful!");
  } else {
    // The passwords don't match ("sd" !== "sds"), so this runs.
    console.log("invalid credentionals"); 
  }

} else {
  console.log("Error: Both fields are required.");
}


// --- 6. THE FINAL BOSS: PRE/POST INCREMENT PUZZLE ---
let a = 5, b = 3, c = 2;

// Let's break down exactly how JS reads this equation from left to right:
// let resss = (a++) + (--b) * (c) - (++a) + (b--) / (--c);

// 1. a++  : Uses the original 5 for the math. (Hidden in background: a becomes 6)
// 2. --b  : Subtracts 1 FIRST. b becomes 2. Uses 2 for the math.
// 3. c    : Uses 2.
// 4. ++a  : Adds 1 FIRST. 'a' was 6, now it's 7. Uses 7 for the math.
// 5. b--  : Uses the current 2 for the math. (Hidden in background: b becomes 1)
// 6. --c  : Subtracts 1 FIRST. c becomes 1. Uses 1 for the math.

// The math formula JavaScript actually runs:
// let resss = 5 + (2 * 2) - 7 + (2 / 1);
// let resss = 5 + 4 - 7 + 2; 
// let resss = 4;

console.log(a, b, c); // Prints: 7 1 1