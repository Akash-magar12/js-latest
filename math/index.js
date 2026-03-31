// ==========================================
// 1. THE ROUNDING TRINITY
// ==========================================
// Math.round(): Rounds to the nearest whole number (10.5 goes to 11, 10.4 goes to 10)
console.log(Math.round(10.6)); // 11

// Math.floor(): ALWAYS chops off the decimal and rounds DOWN
console.log(Math.floor(10.3)); // 10

// Math.ceil(): ALWAYS pushes the number UP to the ceiling
console.log(Math.ceil(10.3));  // 11


// ==========================================
// 2. MATH UTILITIES
// ==========================================
// Math.abs(): Absolute value. It simply removes the negative sign.
console.log(Math.abs(-10.3)); // 10.3

// Math.sqrt(): Square root. (What number times itself equals 25?)
console.log(Math.sqrt(25));   // 5

// Math.pow(base, exponent): 2 to the power of 3 (2 * 2 * 2)
console.log(Math.pow(2, 3));  // 8


// ==========================================
// 3. MIN & MAX (The Extremes)
// ==========================================
// Math.min(): Scans the list and returns the lowest number
console.log(Math.min(1, 2, 10, 0, 2, -2)); // -2

// Math.max(): Scans the list and returns the highest number
console.log(Math.max(128, 312, 13, 21, 2133)); // 2133


// ==========================================
// 4. RANDOMNESS
// ==========================================
// Math.random(): Generates a giant decimal between 0.000... and 0.999...
console.log(Math.random()); 

// ==========================================
// THE CORRECTED RANDOM NUMBER GENERATOR
// ==========================================
const getRandom = (min, max) => {
  /* WHY YOUR OLD FORMULA WAS DANGEROUS:
     1. It ignored the 'min' argument entirely.
     2. If Math.random() generated 0.99, 0.99 * 10 = 9.9. 
        9.9 + 1 = 10.9. Math.round(10.9) returns 11! (Out of bounds!)
        
     THE SENIOR DEVELOPER FORMULA:
     1. (max - min + 1) calculates exactly how many possible numbers there are.
     2. Math.floor() ensures we get a perfectly even distribution without going over.
     3. '+ min' shifts the starting point up so it doesn't start at 0.
  */
  
  const random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random;
};

// Now, this will safely return a number from 1 to 10 (inclusive)!
console.log(getRandom(1, 10)); 

// And this will safely return a number from 50 to 100!
console.log(getRandom(50, 100));