let person = {
  name: "akash",
  age: 56,
  city: "delhi",
};

// ==========================================
// PART A: Log each property using a loop
// ==========================================

// 1. Extract the keys into an array: ["name", "age", "city"]
const arr = Object.keys(person);
console.log(arr);

// 2. Loop through that array of keys
arr.forEach((el) => {
  // 'el' is the key name (e.g., "name")
  // 'person[el]' is the actual data (e.g., "akash")
  console.log(`value of "${el}" property is "${person[el]}"`);
});

// ==========================================
// PART B: Add a new property called email
// ==========================================

// Using standard dot notation to add a new folder to our cabinet
person.email = "akash@gmail.com";

// ==========================================
// PART C: Delete the "city" property
// ==========================================

// Using the built-in delete keyword to destroy the city folder
delete person.city;

// Check the final state of our object!
// Notice "city" is gone and "email" is there.
console.log(person);

// 1. Create our data (The Object)
let myUser = {
  firstName: "Akash",
  middleName: "Raj", // Just throwing a middle name in here!
  lastName: "Magar",
};

// 2. Build the machine (The Function)
// It takes one parameter, which we will call 'personObj'
const getFullName = (personObj) => {
  // Unpack the object using destructuring
  const { firstName, middleName, lastName } = personObj;

  // Glue the pieces together using Template Literals (backticks ` `)
  // The 'return' keyword is how the machine hands the final answer back to you
  return `${firstName} ${middleName} ${lastName}`;
};

// 3. Test the machine!
let finalResult = getFullName(myUser);

console.log(finalResult);
// Prints: "Akash Raj Magar"

// 1. Create a dummy object to test with
let myCar = {
  brand: "Toyota",
  color: "Red",
  speed: 120,
};

// 2. Build the Counting Machine
const countProperties = (obj) => {
  // Step A: Extract all the keys into an Array -> ["brand", "color", "speed"]
  const keysArray = Object.keys(obj);

  // Step B: Count how many items are in that new Array
  return keysArray.length;
};

// 3. Test it out!
let totalFolders = countProperties(myCar);

console.log(`This object has ${totalFolders} properties.`);
// Prints: "This object has 3 properties."

const users = [
  { name: "alice", role: "admin" },
  { name: "bob", role: "user" },
  { name: "charlie", role: "admin" },
];

const admin = users.filter((elem, id) => {
  return elem.role === "admin";
});

const us = admin.map((elem) => {
  return elem.name;
});

console.log(us);

const products = [
  { id: 1, name: "iPhone 14" },
  { id: 2, name: "Samsung Galaxy" },
  { id: 3, name: "Google Pixel" },
];

const searchProducts = (products, keyword) => {
  const p = products.filter((elem) => {
    // 1. Force the product name to lowercase
    let lowerCaseName = elem.name.toLowerCase();

    // 2. Force the user's search keyword to lowercase
    let lowerCaseKeyword = keyword.toLowerCase();

    // 3. Ask the Yes/No question: Does the name have the keyword hiding inside?
    return lowerCaseName.includes(lowerCaseKeyword);
  });

  // 4. Don't forget to actually RETURN the final array out of the machine!
  return p;
};

// 3. Test the machine!
console.log(searchProducts(products, "Pro"));
// Prints: [] (Because there is no "Pro" in this specific array!)

console.log(searchProducts(products, "iphone"));
// Prints: [ { id: 1, name: 'iPhone 14' } ] (It worked!)

console.log(searchProducts(products, "gala"));
// Prints: [ { id: 2, name: 'Samsung Galaxy' } ] (It found a partial match!)/

// ==========================================
// 1. GROUPING DATA (The Data Grouper)
// ==========================================
const comments = [
  { postId: 1, text: "great post" },
  { postId: 2, text: "thanks" },
  { postId: 1, text: "beautiful" },
];

// Added 'commentsArr' parameter so the machine catches the data!
const groupByPost = (commentsArr) => {
  let obj = {};

  commentsArr.forEach((elem) => {
    let currentId = elem.postId; // Grab the ID (1 or 2)
    
    // If a folder for this ID doesn't exist yet, create an empty array
    if (!obj[currentId]) {
      obj[currentId] = [];
    }

    // Notice we are pushing 'elem.text' instead of the whole 'elem'!
    // This perfectly matches your requested output.
    obj[currentId].push(elem.text);
  });
  
  return obj; // Return the final cabinet
};

console.log("Grouped Comments:", groupByPost(comments));
// Prints exactly what you wanted: { '1': [ 'great post', 'beautiful' ], '2': [ 'thanks' ] }


// ==========================================
// 2. BUILDING QUERY STRINGS (Two Ways)
// ==========================================
const params = { search: "laptop", page: 2, sort: "price" };

// --- METHOD A: The "Pro" Built-in Way ---
const buildQueryPro = (params) => {
  // URLSearchParams is a built-in browser tool designed specifically 
  // to turn Objects into valid URL query strings. 
  return new URLSearchParams(params).toString();
};

console.log("Pro URL Builder:", buildQueryPro(params));
// Prints: "search=laptop&page=2&sort=price"


// --- METHOD B: The Logic Way (Manual Construction) ---
const buildQuery = (params) => {
  // Step A: Convert Object to an Array of Arrays
  // Result: [['search', 'laptop'], ['page', 2], ['sort', 'price']]
  const entries = Object.entries(params);
  
  // Step B: Loop over the array and use Template Literals to format it
  // Result: ['search=laptop', 'page=2', 'sort=price']
  const gluedPairs = entries.map((elem) => {
    return `${elem[0]}=${elem[1]}`; 
  });
  
  // Step C: Join the formatted array together using the '&' symbol
  return gluedPairs.join('&');
};

console.log("Manual URL Builder:", buildQuery(params)); 
// Prints: "search=laptop&page=2&sort=price"