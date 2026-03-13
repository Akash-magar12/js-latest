// --- EXERCISE 1: THE USER PROFILE ---

// We use `let` here because these values might change in the future 
// (e.g., your age will increase, or you might graduate and no longer be a student).
let firstName = "Akash";  // String data type
let lastName = "Kumar";   // String data type
let age = 24;             // Number data type
let isStudent = true;     // Boolean data type (true or false)

// We use backticks (`) to create a "Template Literal".
// This lets us inject variables directly into the string using ${variableName}
// instead of having to awkwardly add strings together with plus signs (+).
console.log(
  `Hello, my name is ${firstName} ${lastName}. I am ${age} years old and I am a student: ${isStudent}.`
);


// --- EXERCISE 2: THE TIME MACHINE ---

// We use `const` (constant) here because these specific values 
// should NEVER change while this script is running. You were born in 2002 forever!
const birthYear = 2002;
const currentYear = 2026;

// JavaScript evaluates the math on the right side of the equals sign first,
// then stores the result (24) into the new constant variable `currentAge`.
const currentAge = currentYear - birthYear;
console.log(currentAge); // Prints: 24


// --- EXERCISE 3: THE COFFEE SHOP RECEIPT ---

let coffeePrice = 4.5;
let quantity = 3;

// REASSIGNMENT: JavaScript reads code top-to-bottom. 
// When it hits this line, it throws away the `3` and replaces it with `4`.
// Notice we don't say `let quantity = 4`, we just say `quantity = 4` because 
// the variable has already been created above.
quantity = 4;

// Because `quantity` was updated on the line above, this math is 4.5 * 4.
let totalCost = coffeePrice * quantity;

console.log(`Your new total is ${totalCost}`); // Prints: "Your new total is 18"


// --- EXERCISE 4: THE CLASSIC SWAP ---

let a = 10;
let b = 20;
let c; // We create an empty temporary variable (its value right now is `undefined`)

// Step 1: We copy the value of `a` (10) into `c`. 
// Now `c` is holding our 10 safely.
c = a; 

// Step 2: We overwrite `a` with the value of `b` (20). 
// `a` is now 20. (If we hadn't saved the 10 in `c`, it would be lost forever!)
a = b; 

// Step 3: We overwrite `b` with the value we safely stored in `c` (10).
b = c; 

console.log(a, b, c); // Prints: 20 10 10