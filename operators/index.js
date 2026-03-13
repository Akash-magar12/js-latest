// --- 1. THE SHOPPING CART ---
let price = 150;
let quantity = 3;

// Calculates base total (150 * 3)
const totalCost = price * quantity;
console.log(totalCost); // Prints: 450

// Calculates 10% discount
const discountedPrice = totalCost * (10 / 100);
console.log(discountedPrice); // Prints: 45

// Subtracts discount from the total
const newPrice = totalCost - discountedPrice;
console.log(newPrice); // Prints: 405

// --- 2. THE AGE CHECK (Ternary Operator) ---
let age = 21;
// Reads: If age >= 18 is true, return "Eligible...", else return "Not eligible..."
const result = age >= 18 ? "Eligible for booking" : "Not eligible for booking";
console.log(result); // Prints: "Eligible for booking"

// --- 3. THE LOGIN CHECK (Logical AND with Ternary) ---
let userName = ""; // Empty string is "falsy"
let password = ""; // Empty string is "falsy"

// Checks if BOTH userName AND password have truthy values.
// Since they are empty, the condition is false.
const results =
  userName && password ? "Login Successfull" : "Both fields required";
console.log(results); // Prints: "Both fields required"

// --- 4. LOGICAL OR (||) SHORT-CIRCUITING ---
// The OR operator stops at the FIRST TRUTHY value it finds.
// "" is falsy -> moves on. "Guest" is truthy -> STOPS!
let res = "" || "Guest" || null || 23;
console.log(res); // Prints: "Guest"

// If ALL values are falsy, the OR operator returns the VERY LAST value.
// undefined (falsy) -> 0 (falsy) -> null (falsy).
let res2 = undefined || 0 || null;
console.log(res2); // Prints: null

// --- 5. LOGICAL AND (&&) SHORT-CIRCUITING ---
// The AND operator stops at the FIRST FALSY value it finds.
// "Ram" (truthy) -> true (truthy) -> undefined (falsy) -> STOPS!
let res3 = "Ram" && true && undefined && 55;
console.log(res3); // Prints: undefined

let isAuthenticated = true;
let user = "Akash";
// If ALL values are truthy, the AND operator returns the VERY LAST value.
let res4 = isAuthenticated && user;
console.log(res4); // Prints: "Akash"

// --- 6. NULLISH COALESCING OPERATOR (??) ---
// The ?? operator is like a stricter version of ||.
// It ONLY checks for `null` or `undefined`. It ignores other falsy values like 0 or "".

// The left side is `null`, so it grabs the right side.
let res5 = null ?? "Akash";
console.log(res5); // Prints: "Akash"

// The left side is `0`. 0 is falsy, BUT it is not `null` or `undefined`.
// Therefore, the ?? operator considers it a valid value and keeps it!
let res6 = 0 ?? "Akash";
console.log(res6); // Prints: 0
