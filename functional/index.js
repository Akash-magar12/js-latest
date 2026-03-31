// ==========================================
// 1. FIRST-CLASS FUNCTIONS
// ==========================================
// Storing a function in a variable
const sayHello = () => console.log("Hello!");

// Storing functions in an array!
const functionArray = [sayHello, () => console.log("World")];

// Running the functions in the array using the correct indexes
functionArray[0](); // Prints: "Hello!"
functionArray[1](); // Prints: "World"


// ==========================================
// 2. HIGHER-ORDER FUNCTIONS & CALLBACKS
// ==========================================
function runTwice(action) {
  action();
  action();
}

function wave() {
  console.log("👋");
}

// We pass the 'wave' function IN to the 'runTwice' function
runTwice(wave);


// ==========================================
// 3. IMMUTABILITY VS MUTATION
// ==========================================
const user = { name: "Akash", role: "User" };

// ✅ PURE IMMUTABILITY: We copy the user, and overwrite BOTH name and role 
// at the exact same time inside the new object.
const updated = { ...user, name: "harsh", role: "kid" };

console.log(user);    // { name: "Akash", role: "User" } (Perfectly untouched!)
console.log(updated); // { name: "harsh", role: "kid" }  (Brand new data!)


// ==========================================
// 4. IMPERATIVE VS DECLARATIVE
// ==========================================
const numbers = [1, 2, 3];

// ❌ IMPERATIVE (How): Manually looping, creating arrays, pushing data.
const doubledImperative = [];
for (let i = 0; i < numbers.length; i++) {
  doubledImperative.push(numbers[i] * 2);
}

// ✅ DECLARATIVE (What): "Hey computer, map over this array and double everything."
const doubledDeclarative = numbers.map(num => num * 2);


// ==========================================
// 5. PURE VS IMPURE FUNCTIONS (Global Variables)
// ==========================================
let taxRate = 0.08;

// ❌ IMPURE: It relies on a global variable. If someone changes 'taxRate',
// calculateTax(100) will suddenly give a different answer!
function calculateTax(amount) {
  return amount * taxRate;
}

// ✅ PURE: It only relies on its inputs.
// pureCalculateTax(100, 0.08) will equal 8 until the end of time.
function pureCalculateTax(amount, rate) {
  return amount * rate;
}

console.log(calculateTax(10));        // 0.8
console.log(pureCalculateTax(10, 2)); // 20


let currentExchangeRate = 1.2; 

// ❌ IMPURE: Reaches outside its curly braces.
function convertToEuros(dollars) {
  return dollars * currentExchangeRate; 
}
console.log(convertToEuros(100)); // 120

// ✅ PURE: Safe, predictable, uses exactly what is handed to it.
function pureConvertToEuros(dollars, exchangeRate) {
  return dollars * exchangeRate;
}
console.log(pureConvertToEuros(100, 1.2)); // 120


// ==========================================
// 6. PURE VS IMPURE FUNCTIONS (Side Effects)
// ==========================================
const userCart = ["Shoes", "Shirt"];

// ❌ IMPURE: .push() permanently modifies the original 'userCart' array!
// This is a massive side effect.
function addToCart(newItem) {
  userCart.push(newItem); 
}
addToCart("Hat");
console.log(userCart); // ["Shoes", "Shirt", "Hat"] (Original data is destroyed/changed)


const pureUserCart = ["Shoes", "Shirt"];

// ✅ PURE: We use the Spread Operator (...) to create a brand NEW array.
function pureAddToCart(currentCart, newItem) {
  return [...currentCart, newItem]; 
}

// Because the function doesn't change the original, we have to save its answer!
const updatedCart = pureAddToCart(pureUserCart, "Hat");

console.log(pureUserCart); // ["Shoes", "Shirt"] (Original is perfectly safe!)
console.log(updatedCart);  // ["Shoes", "Shirt", "Hat"] (The new data)