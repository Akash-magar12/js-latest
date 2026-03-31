// ==========================================
// 4. TIMESTAMP MATH & PERFORMANCE
// ==========================================

// ❌ The Slow Way: Creates a heavy Date object just to get a number
const oldWay = new Date().getTime();

// ✅ The Fast Way: Instantly grabs the raw milliseconds
const currentTimestamp = Date.now();
console.log(currentTimestamp); // e.g., 1711900472000

// ------------------------------------------
// 🔥 REAL WORLD PRO-TIP: "Performance Tracking"
// ------------------------------------------
// Developers use Date.now() to measure exactly how many
// milliseconds it takes for a chunk of code to run!

const startTime = Date.now();

// ... imagine a giant, slow 'for' loop running here ...
for (let i = 0; i < 10000000; i++) {
  // doing heavy math...
}

const endTime = Date.now();

const timeTaken = endTime - startTime;
console.log(`That loop took exactly ${timeTaken} milliseconds to finish!`);

// ------------------------------------------
// Finding the difference between two specific days
// ------------------------------------------
const date1 = new Date("March 1, 2026").getTime();
const date2 = new Date("March 15, 2026").getTime();

const differenceInMs = date2 - date1;
const millisecondsInADay = 1000 * 60 * 60 * 24;
const differenceInDays = differenceInMs / millisecondsInADay;

console.log(`The dates are ${differenceInDays} days apart!`); // 14

const d = new Date();
console.log(`${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`);


const dates = new Date(1231923912390)
console.log(dates.toLocaleDateString())