// ==========================================
// 1. FORMATTING NUMBERS (Turns numbers into strings)
// ==========================================
const price = 9.998;
// .toFixed(2) rounds to 2 decimal places. 
console.log(price.toFixed(2)); // "10.00"

const gravity = 9.2139138821;
// .toPrecision(2) limits the TOTAL number of digits (before AND after the decimal) to 2.
console.log(gravity.toPrecision(2)); // "9.2"

const num = 255;
// .toString() converts the number to a plain text string.
console.log(num.toString());   // "255" (Standard base-10)
// Passing a number (radix) changes the math base!
console.log(num.toString(2));  // "11111111" (Converts to Binary)
console.log(num.toString(16)); // "ff" (Converts to Hexadecimal)


// ==========================================
// 2. CONVERTING STRINGS BACK TO NUMBERS
// ==========================================
// Number() is incredibly strict. If the string contains ANY letters, it fails.
console.log(Number("42"));   // 42
console.log(Number("42px")); // NaN (Not-A-Number)

// parseInt() is a scavenger. It reads left-to-right and grabs the first whole number it sees.
console.log(parseInt("42px")); // 42
console.log(parseInt("3.14")); // 3 (Warning: It completely chops off decimals!)

// parseFloat() is exactly like parseInt, but it respects and keeps decimals.
console.log(parseFloat("3.14rem")); // 3.14


// ==========================================
// 3. DEALING WITH NaN (Not-A-Number)
// ==========================================
const badMath = "apple" / 5; // You can't divide a word by 5! Results in NaN.
// Number.isNaN() is the safest way to check if a math operation failed.
console.log(Number.isNaN(badMath)); // true

const bumb = 12;
// The global isNaN() function checks if 'bumb' is NOT a number. 
// Since 12 IS a number, this statement is false.
console.log(isNaN(bumb)); // false


// ==========================================
// 4. HOW TO TRULY CHECK IF SOMETHING IS A NUMBER
// ==========================================
/* THE JAVASCRIPT QUIRK: If you run `typeof NaN`, JavaScript will tell 
   you it is a "number"! That is very confusing. 
   
   To truly check if a variable is a valid, usable number, you must check 
   that its type is "number" AND that it is not NaN.
*/

function isTrulyANumber(value) {
  // Rule 1: It must be the number type.
  // Rule 2: It cannot be the corrupted 'NaN' value.
  return typeof value === "number" && !Number.isNaN(value);
}

console.log("--- TESTING OUR NUMBER CHECKER ---");
console.log(isTrulyANumber(12));      // true (Valid whole number)
console.log(isTrulyANumber(9.99));    // true (Valid decimal number)
console.log(isTrulyANumber("42"));    // false (It is a string, not a number)
console.log(isTrulyANumber(NaN));     // false (It is corrupted math)


console.log(isNaN(12))
console.log(isNaN('akash'))


// Global (Your way) - "Tries to convert to a number first"
console.log(isNaN('akash')); // true (Because 'akash' turns into NaN)

// Strict (Modern way) - "Is this literally the exact value NaN?"
console.log(Number.isNaN('akash')); // false (Because 'akash' is a string, not NaN!)