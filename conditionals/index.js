// ==========================================
// 1. SHOPPING CART (Ranges & Math)
// ==========================================
const cartValue = 120;
let finalCartValue;

// Because 120 is not < 50, and not between 50-100, it falls safely to the 'else' block.
if (cartValue < 50) {
  finalCartValue = cartValue;
  console.log("No discount applied");
} else if (cartValue >= 50 && cartValue <= 100) {
  finalCartValue = cartValue - (cartValue * 10) / 100;
  console.log("10% discount applied");
} else {
  // Executes this block! 120 - (120 * 20 / 100) = 96.
  finalCartValue = cartValue - (cartValue * 20) / 100;
  console.log("20% discount applied");
}
console.log(finalCartValue); // Prints: 96

// ==========================================
// 2. SUBSCRIPTION ACCESS (Nested Logic)
// ==========================================
let isSubscription = true;
let userSubscription = "premium";

// Outer guard: Do they even have an active sub?
if (isSubscription) {
  console.log("subscription active");

  // Inner check: What tier are they?
  if (userSubscription === "premium") {
    console.log("Access to all content"); // Executes!
  } else if (userSubscription === "standard") {
    console.log("Access to limited content");
  } else {
    console.log("unknown subscription");
  }
} else {
  console.log("no subscription");
}

// ==========================================
// 3. THEME PICKER (Strict Equality)
// ==========================================
let userTheme = "dark";
let theme;

if (userTheme === "dark") {
  theme = userTheme; // Executes!
} else if (userTheme === "white") {
  theme = userTheme;
} else if (userTheme === "pink") {
  theme = userTheme;
} else {
  console.log("unknown color");
}
console.log(theme); // Prints: "dark"

// ==========================================
// 4. LARGEST NUMBER (Logical AND)
// ==========================================
let num1 = 12;
let num2 = 15;
let num3 = 17;

// Excellent use of > logic. Since num3 is 17, it falls all the way to 'else'.
if (num1 > num2 && num1 > num3) {
  console.log(`${num1} is largest`);
} else if (num2 > num3 && num2 > num1) {
  console.log(`${num2} is largest`);
} else {
  console.log(`${num3} is largest`); // Executes!
}

// ==========================================
// 5. ROLE ACCESS (Switch Statement)
// ==========================================
let role = "viewer";

// Switch statements are perfect for exact string matches!
// Don't forget the 'break', otherwise it "falls through" to the next case.
switch (role) {
  case "admin":
    console.log("full access");
    break;
  case "editor":
    console.log("edit access");
    break;
  case "viewer":
    console.log("read only"); // Executes!
    break;
  default:
    console.log("no access");
}

// ==========================================
// 6. FIZZBUZZ (The Classic Interview Question)
// ==========================================
const number = 18;

// PRO-MOVE: You put the "&&" check FIRST.
// If you put % 3 first, 15 would print "Divisible by 3" and skip the "both" check!
if (number % 3 === 0 && number % 5 === 0) {
  console.log("Divisible by both");
} else if (number % 3 === 0) {
  console.log("Divisible by 3"); // Executes! (18 / 3 leaves 0 remainder)
} else if (number % 5 === 0) {
  console.log("Divisible by 5");
} else {
  console.log("not Divisible");
}

// ==========================================
// 7. CALCULATOR (Switch Statement)
// ==========================================
let number1 = 20;
let number2 = 13;
let operator = "/";

switch (operator) {
  case "+":
    console.log(`${number1 + number2}`);
    break;
  case "-":
    console.log(`${number1 - number2}`);
    break;
  case "*":
    console.log(`${number1 * number2}`);
    break;
  case "/":
    // *BUG FIX: Changed num1/num2 to number1/number2 to match the variables above!
    console.log(`${number1 / number2}`); // Executes! Prints: 1.538...
    break;
  default:
    console.log("unknown operator");
}

// ==========================================
// 8. THE ATM PROGRAM
// ==========================================
// (This remains your flawless, working code from our previous chat!)
let balance = 1000;

// Upgraded prompt to actually show the user the menu!
let userOption = Number(
  prompt(
    "ATM Menu:\n1. Check Balance\n2. Deposit\n3. Withdraw\n4. Exit\n\nChoose an option (1-4):",
  ),
);

if (userOption === 1) {
  // --- OPTION 1: CHECK BALANCE ---
  console.log(`Your current balance is: ₹${balance}`);
} else if (userOption === 2) {
  // --- OPTION 2: DEPOSIT ---
  let depositAmount = Number(prompt("Enter amount to deposit:"));

  // Check for errors first (Guard Clauses)
  if (isNaN(depositAmount)) {
    console.log("Error: Please enter a valid number.");
  } else if (depositAmount < 1) {
    console.log("Error: Minimum deposit amount is ₹1.");
  } else {
    // If no errors, safely do the math
    balance += depositAmount; // Shortcut for: balance = balance + depositAmount
    console.log(`Deposit successful! Your new balance is: ₹${balance}`);
  }
} else if (userOption === 3) {
  // --- OPTION 3: WITHDRAW ---
  let withdrawAmount = Number(prompt("Enter amount to withdraw:"));

  // Notice how these are ALL chained together with `else if` now.
  // If one error triggers, it stops and won't ruin the balance.
  if (isNaN(withdrawAmount)) {
    console.log("Error: Please enter a valid number.");
  } else if (withdrawAmount < 1) {
    console.log("Error: Minimum withdrawal amount is ₹1.");
  } else if (withdrawAmount > balance) {
    console.log(`Error: Insufficient funds. Your balance is only ₹${balance}.`);
  } else {
    // If it passes all 3 tests, safely dispense the money
    balance -= withdrawAmount; // Shortcut for: balance = balance - withdrawAmount
    console.log(
      `Withdrawal successful! Your remaining balance is: ₹${balance}`,
    );
  }
} else if (userOption === 4) {
  // --- OPTION 4: EXIT ---
  console.log("Thank you for using the ATM. Goodbye!");
} else {
  // --- CATCH-ALL ---
  // If they type '5' or "apple" at the main menu
  console.log("Error: Invalid menu option. Please refresh and try again.");
}
