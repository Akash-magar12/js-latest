// ==========================================
// THE SETUP
// ==========================================
let array = ["batman", "superman", "robin", "akash"];
let arr2 = [1, 2, 3, 4];
let arr3 = [true, false];
let arr4 = [1, 2, 3, 4, ["akash", "magar", [true, false]]];

// ==========================================
// 1. ADDING & REMOVING (THE MUTATORS)
// ==========================================

// .push()
// USE: Adds an item to the VERY END of the array.
// MUTATES ORIGINAL: YES (array is now ["batman", "superman", "robin", "akash", "akash"])
// RETURNS: Number (5) -> The new length of the array.
const push = array.push("akash");

// .pop()
// USE: Removes the LAST item from the array.
// MUTATES ORIGINAL: YES (array is back to ["batman", "superman", "robin", "akash"])
// RETURNS: String ("akash") -> The exact item it just chopped off.
const pop = array.pop();

// .unshift()
// USE: Adds an item to the VERY BEGINNING of the array (pushes everything else back).
// MUTATES ORIGINAL: YES (array is now ["superman", "batman", "superman", "robin", "akash"])
// RETURNS: Number (5) -> The new length of the array.
const unshift = array.unshift("superman");

// .shift()
// USE: Removes the FIRST item from the array.
// MUTATES ORIGINAL: YES (array is back to ["batman", "superman", "robin", "akash"])
// RETURNS: String ("superman") -> The exact item it just chopped off.
const shift = array.shift();

// .splice()
// USE: The Swiss Army Knife. Goes to index 0, removes 1 item ("batman"), and inserts "manish" in its place.
// MUTATES ORIGINAL: YES (array is now ["manish", "superman", "robin", "akash"])
// RETURNS: Array (["batman"]) -> An array containing whatever items it deleted.
const splice = array.splice(0, 1, "manish");


// ==========================================
// 2. COPYING & COMBINING (NON-MUTATORS)
// ==========================================

// .slice()
// USE: Copies a chunk of the array. Starts at index 1, stops RIGHT BEFORE index 2.
// MUTATES ORIGINAL: NO (Safe!)
// RETURNS: A new Array (["superman"])
const slice = array.slice(1, 2);

// .concat()
// USE: Glues multiple arrays together into one giant list.
// MUTATES ORIGINAL: NO (Safe!)
// RETURNS: A new Array (["manish", "superman", "robin", "akash", 1, 2, 3, 4, true, false])
const concat = array.concat(arr2, arr3);

// .join()
// USE: Converts the whole array into one single String, using " " as the glue between items.
// MUTATES ORIGINAL: NO (Safe!)
// RETURNS: String ("manish superman robin akash")
const join = array.join(" ");

// .toString()
// USE: Converts the array into a string, automatically separated by commas.
// MUTATES ORIGINAL: NO (Safe!)
// RETURNS: String ("1,2,3,4")
const string = arr2.toString();


// ==========================================
// 3. SEARCHING (NON-MUTATORS)
// ==========================================

// .includes()
// USE: Checks if an exact item exists in the array.
// RETURNS: Boolean (true) -> Because "superman" is in there!
const inclu = array.includes("superman");

// .indexOf()
// USE: Finds the index position of an item.
// RETURNS: Number (-1) -> Wait, why -1? Because you permanently removed "batman" earlier using .splice()! If it can't find it, it returns -1.
const index = array.indexOf("batman");

// .find()
// USE: Loops through the array and returns the VERY FIRST item that makes your condition true.
// RETURNS: String ("robin")
const find = array.find((elem) => {
  return elem === "robin";
});


// ==========================================
// 4. REORDERING & SHAPING (MUTATORS)
// ==========================================

// .reverse()
// USE: Flips the entire array backwards.
// MUTATES ORIGINAL: YES (arr2 is permanently [4, 3, 2, 1] now!)
// RETURNS: The reversed array ([4, 3, 2, 1])
let reverse = arr2.reverse();

// .sort()
// USE: Sorts the array. (b - a) means sort numbers from Highest to Lowest.
// MUTATES ORIGINAL: YES
// RETURNS: The sorted array ([4, 3, 2, 1])
const sort = arr2.sort((a, b) => {
  return b - a;
});

// .flat()
// USE: Takes nested arrays (arrays inside arrays) and flattens them out into one single list. The '2' means "go 2 levels deep".
// MUTATES ORIGINAL: NO (Safe!)
// RETURNS: A new flattened Array ([1, 2, 3, 4, "akash", "magar", true, false])
const flate = arr4.flat(2);


// ==========================================
// THE FINAL OUTPUT
// ==========================================
console.log(array); 
// Prints: ["manish", "superman", "robin", "akash"]

console.log(sort);  
// Prints: [4, 3, 2, 1]