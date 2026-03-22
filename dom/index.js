// 1. querySelectorAll returns a "NodeList" (A static snapshot)
const arr = document.querySelectorAll("li");

// 2. getElementsByClassName returns an "HTMLCollection" (A live, updating list)
let arr2 = document.getElementsByClassName("fruit");

console.log("This is a NodeList:", arr);
console.log("This is an HTMLCollection:", arr2);

// ==========================================
// THE .forEach() TEST
// ==========================================

// ✅ SUCCESS: NodeLists support .forEach()!
// This will successfully print every <li> to the console.
arr.forEach((elem) => {
  console.log("NodeList item:", elem);
});

// ❌ CRASH: HTMLCollections DO NOT support .forEach()!
// If you uncomment the code below, your program will throw an error.
/*
arr2.forEach((elem) => {
  console.log(elem);
});
*/

// ==========================================
// THE FIX FOR HTMLCOLLECTIONS
// ==========================================

// If you want to loop over arr2, you must convert it to a real Array first using Array.from()!
Array.from(arr2).forEach((elem) => {
  console.log("Converted Array item:", elem);
});

// Grab our main container
const box = document.getElementById("box");

// Method 1: .before() -> Places it OUTSIDE, right ABOVE the box
const btnBefore = document.createElement("button");
btnBefore.innerText = "I used .before()";
box.before(btnBefore);

// Method 2: .prepend() -> Places it INSIDE, at the VERY TOP
const btnPrepend = document.createElement("button");
btnPrepend.innerText = "I used .prepend()";
box.prepend(btnPrepend);

// Method 3: .append() -> Places it INSIDE, at the VERY BOTTOM
const btnAppend = document.createElement("button");
btnAppend.innerText = "I used .append()";
box.append(btnAppend);

// Method 4: .after() -> Places it OUTSIDE, right BELOW the box
const btnAfter = document.createElement("button");
btnAfter.innerText = "I used .after()";
box.after(btnAfter);

// ==========================================
// Method 5: .insertBefore() (The Old School Way)
// ==========================================
// This one is trickier. You have to tell the PARENT element to insert 
// the new item directly above a specific CHILD element.
const btnInsertBefore = document.createElement("button");
btnInsertBefore.innerText = "I used .insertBefore()";

// Grab the exact child we want to put this above (Existing Item 2)
const item2 = box.querySelectorAll(".existing")[1]; 

// Syntax: parentElement.insertBefore(newNode, referenceNode)
box.insertBefore(btnInsertBefore, item2);