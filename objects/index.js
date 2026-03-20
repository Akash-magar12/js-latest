// ==========================================
// 1. CREATING OBJECTS
// ==========================================

// Variable we will use later to test "dynamic" keys
let s = "speed";

// Option A: The "Object Literal" (The most common way)
// Objects use Key-Value pairs. Keys are on the left, Values are on the right.
let obj = {
  brand: "toyota",
  color: "red",
  speed: 120,
  "first name": "akash", // Quotes are required if the key has a space!
  
  // Objects can even hold functions! These are called "Methods".
  drive: function () {
    console.log("Car is driving");
  },
};

// Option B: The "Object Constructor" (The old-school way)
let person = new Object();
person.user = "akash";

console.log("Constructor Object:", person); // Prints: { user: 'akash' }


// ==========================================
// 2. READING DATA FROM AN OBJECT
// ==========================================

// Dot Notation (Standard way)
console.log(obj.brand); // Prints: "toyota"

// Bracket Notation (Use this when keys are strings or variables)
console.log(obj["color"]); // Prints: "red"

// Bracket Notation is REQUIRED if the key has a space. (obj.first name will crash!)
console.log(obj["first name"]); // Prints: "akash"

// Dynamic Access: We use the variable 's' (which holds the string "speed")
// The computer reads this as obj["speed"]
console.log(obj[s]); // Prints: 120


// ==========================================
// 3. UPDATING, ADDING, AND DELETING
// ==========================================

// Updating an existing property
obj["first name"] = "akash"; // (Overwriting it with the same name here)

// Adding a brand new property that didn't exist before
obj.hill = "mountain";

console.log("After adding hill:", obj); 

// Deleting a property completely
delete obj.brand; 


// ==========================================
// 4. OBJECT DESTRUCTURING (Modern JavaScript)
// ==========================================

// Instead of typing obj.speed and obj.color over and over, 
// we can "unpack" them directly into their own separate variables!
const { speed, color } = obj;

console.log("Destructured Variables:", speed, color); // Prints: 120 'red'
console.log("Original Object (brand is gone):", obj);


// ==========================================
// 5. THE THREE BIG OBJECT TOOLS
// ==========================================

// Get an Array of just the Keys (the labels)
console.log("Keys:", Object.keys(obj)); 
// Prints: ['color', 'speed', 'first name', 'drive', 'hill']

// Get an Array of just the Values (the actual data)
console.log("Values:", Object.values(obj)); 
// Prints: ['red', 120, 'akash', [Function: drive], 'mountain']

// Get an Array of Arrays (Key and Value paired together)
console.log("Entries:", Object.entries(obj)); 


// ==========================================
// 6. SEALING AND FREEZING (Protecting Data)
// ==========================================

// SEAL: Locks the object so you CANNOT add or delete properties.
// But you CAN still change the values of existing properties.
Object.seal(obj);

obj.color = 'blue'; // This works! (We changed 'red' to 'blue')
obj.newCar = 'honda'; // This will be IGNORED because it's sealed.

console.log("After Seal (Color changed):", obj);

// FREEZE: Completely locks the object. No adding, deleting, OR changing allowed.
Object.freeze(obj);
obj.color = 'green'; // This will be IGNORED because it's frozen.


// ==========================================
// 7. CHECKING FOR PROPERTIES & MERGING
// ==========================================

// Ask a Yes/No question: Does this object have a specific key?
console.log("Has color?", obj.hasOwnProperty('color')); // Prints: true

// OBJECT.ASSIGN: Used to copy or merge objects together!
// Let's create a new object and merge our 'person' object into it.
let targetObj = { age: 25 };

// Object.assign(target, source) -> Copies everything from 'person' into 'targetObj'
Object.assign(targetObj, person);

console.log("Merged Object:", targetObj); // Prints: { age: 25, user: 'akash' }