// ==========================================
// THE SETUP: Grab the elements and set the initial memory
// ==========================================
const button = document.querySelector("button");
const body = document.querySelector("body"); // (Pro tip: You can also just use document.body)

// The "memory" variable. We start on light mode, so the flag is true.
let flag = true;
console.log("Initial load flag state:", flag); // Prints: true

// ==========================================
// LEVEL 1: The Beginner Way (If/Else Logic)
// ==========================================
// Great for understanding exactly how the logic flows step-by-step.

// button.addEventListener("click", () => {
//   if (flag) {
//     // If flag is true (Light Mode), switch to Dark Mode
//     body.style.backgroundColor = "black";
//     body.style.color = "white";
//     flag = false; // Update memory so it knows we are in dark mode
//     console.log("Switched to Dark Mode. Flag is now:", flag);
//   } else {
//     // If flag is false (Dark Mode), switch to Light Mode
//     body.style.backgroundColor = "white";
//     body.style.color = "black";

//     flag = true; // Update memory so it knows we are in light mode
//     console.log("Switched to Light Mode. Flag is now:", flag);
//   }
// });

// ==========================================
// LEVEL 2: The Intermediate Way (Ternary Operators)
// ==========================================
// Shorter code, but still directly manipulating CSS styles in JS (not ideal).

/* 
button.addEventListener("click", () => {
  // 1. The NOT operator (!). Flips true to false, and false to true instantly.
  flag = !flag;

  // 2. The Ternary Operator ( condition ? ifTrue : ifFalse )
  // "Hey body, is the flag true? If yes, be white. If no, be black."
  body.style.backgroundColor = flag ? "white" : "black";
  
  // You also dynamically changed the text color here! Brilliant!
  body.style.color = flag ? "black" : "white";
  
  console.log("Ternary toggle. Flag is now:", flag);
}); 
*/

// ==========================================
// LEVEL 3: The Pro Way (classList)
// ==========================================
// The industry standard. We separate JavaScript (behavior) from CSS (design).
// NOTE: This requires a `.dark-theme` class to exist in your CSS file!

button.addEventListener("click", () => {
  // .toggle() is a built-in machine.
  // It asks: "Does the body currently have the 'dark-theme' class attached?"
  // If YES: It rips it off.
  // If NO: It slaps it on.
  // (We don't even need the 'flag' variable anymore!)

  body.classList.toggle("dark-theme");
});
