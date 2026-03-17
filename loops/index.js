// (All your previous loop, string, and vowel counter code is safely above here)

// ==========================================
// 4. SUM OF FIRST 'N' NUMBERS
// ==========================================
let targetSum = 5; 
let totalSum = 0;
// Loops from 0 to 5, adding 'i' to the total each time
for (let i = 0; i <= targetSum; i++) {
  totalSum += i;
}
console.log(`Sum of 1 to ${targetSum} is: ${totalSum}`); // Prints: 15


// ==========================================
// 5. SUM OF NUMBERS FROM 'M' TO 'N'
// ==========================================
let endNum = 6;
let startNum = 3;
let rangeSum = 0;
// Starts specifically at 3, stops at 6.
for (let i = startNum; i <= endNum; i++) {
  rangeSum += i;
}
console.log(`Sum from ${startNum} to ${endNum} is: ${rangeSum}`); // Prints: 18


// ==========================================
// 6. PRINT ODD NUMBERS 
// ==========================================
let maxOddLimit = 20;
console.log("Odd numbers:");
for (let i = 0; i <= maxOddLimit; i++) {
  // If the number divided by 2 does NOT have a remainder of 0, it's odd!
  if (i % 2 !== 0) {
    console.log(i); // Prints 1, 3, 5... up to 19
  }
}


// ==========================================
// 7. THE NUMBER KNOCK GAME (Commented Out)
// ==========================================
/*
let secretKey = "akash";
let user = prompt("guess");

// While their guess is NOT the secret key, keep trapping them!
while (secretKey !== user) {
  user = prompt("guess");
}
console.log("Access Granted! You guessed it!");
*/


// ==========================================
// 8. THE FACTORIAL MATH CALCULATOR
// ==========================================
let factorialTarget = 5;
let fact = 1; // Start at 1, because multiplying by 0 would ruin everything!
// Loops 1 * 2 * 3 * 4 * 5
for (let i = 1; i <= factorialTarget; i++) {
  fact *= i;
}
console.log(`Factorial of ${factorialTarget} is: ${fact}`); // Prints: 120


// ==========================================
// 9. THE NUMBER PATTERN (Active)
// ==========================================
let patternRows = 6;

// Outer loop: Creates 6 vertical rows
for (let row = 1; row <= patternRows; row++) {
  let patternString = "";
  
  // Inner loop: Goes left to right based on what row we are currently on
  for (let col = 1; col <= row; col++) {
    // PRO MOVE: Instead of adding "*", you added 'col' to print the actual numbers!
    patternString += col; 
  }
  
  // Prints the row once the inner loop finishes building it
  console.log(patternString); 
}
/* OUTPUT:
1
12
123
1234
12345
123456
*/


// ==========================================
// 10. THE PASSWORD CHECKER (Active)
// ==========================================
let correctPass = "hey";
let attempt = 3;

// Keep asking as long as they have tries left
while (attempt > 0) {
  let guess = prompt(`Enter password. You have ${attempt} attempts left:`);
  
  if (guess === correctPass) {
    console.log("Access Granted! Welcome back.");
    break; // MAGIC WORD: Instantly smashes the loop so they can enter
  } else {
    attempt--; // Subtract 1 attempt
    console.log(`Incorrect password. You have ${attempt} attempts remaining.`);
  }
}

// Lockout check: Did they drop to 0?
if (attempt === 0) {
  console.log("SECURITY ALERT: Account Locked. Too many failed attempts.");
}