function firstLetter(string) {
  // 1. Grab the first letter and force it to be uppercase
  let firstPart = string[0].toUpperCase();

  // 2. Grab the rest of the word
  let restOfWord = string.slice(1);

  // 3. Glue them together and RETURN them to the app
  return firstPart + restOfWord;
}

// Now, to actually see it working, we console.log the finished product!
console.log(firstLetter("akash")); // Prints: "Akash"
console.log(firstLetter("manish")); // Prints: "Manish"
console.log(firstLetter("apple")); // Prints: "Apple"

// function showAlert() {
//   alert("please login");
// }

// // Your way (Perfectly valid and works flawlessly!)
// setTimeout(() => {
//   showAlert();
// }, 5000);

// The Arrow Function Syntax
const discountedPrice = (price, discount) => {
  // Calculate the discount, then subtract it from the original price
  const finalPrice = price - (price * discount) / 100;
  return finalPrice;
};

// We wrap the function call in a console.log so we can actually see the returned answer!
console.log(discountedPrice(500, 60)); // Prints: 200

const username = (name) => {
  // STEP 1: .split(" ") looks for spaces and cuts the string into an array: ["Akash", "Magar"]
  // STEP 2: .join("") takes that array and glues it back together with NO spaces: "AkashMagar"
  // STEP 3: .toLowerCase() takes the glued word and makes it all small letters: "akashmagar"

  return name.split(" ").join("").toLowerCase();
};

console.log(username("Akash Magar")); // Prints: "akashmagar"

// const trafficLight = (color) => {
//     console.log(color)
//   if (color === "green") {
//     return "go";
//   } else if (color === "red") {
//     return "stop";
//   } else if (color === "yellow") {
//     return "caution";
//   } else {
//     return "unknown color";
//   }
// };

// console.log(trafficLight("red"));

const trafficLight = (color) => {
  console.log(color);
  switch (color) {
    case "green":
      return "go";
      break;
    case "red":
      return "stop";
      break;
    case "red":
      return "stop";
      break;
    default:
      return "unknown";
      break;
  }
};

console.log(trafficLight("reds"));
