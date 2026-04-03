const productListUI = document.getElementById("product-list");
const loadingText = document.getElementById("loading");
console.log(productListUI);
console.log(loadingText);

const fetchProducts = async () => {
  // 1. Set up the safety net
  try {
    const response = await fetch(
      "https://api.freeapi.app/api/v1/public/randomproducts",
    );

    // Check if the API returned a 404 (Not Found) or 500 (Server Error)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const rawJson = await response.json();
    const products = rawJson.data.data; // Extracting the actual array

    console.log("Success! Here are the products:", products);
    loadingText.style.display = "none";
    // Return the data so we can use it elsewhere!
    buildUI(products);
  } catch (error) {
    // 2. Catch the error if the internet dies or the server crashes
    console.error(
      "Failed to fetch products. Check your internet connection.",
      error,
    );
  }
};

fetchProducts();

function buildUI(products) {
  // We use our old friend, Functional Programming (.map or a loop) to go through the array
  products.forEach((product) => {
    // Step A: Create a brand new, empty <li> tag in the computer's memory
    const newLi = document.createElement("li");

    // Step B: Fill it with the product's title and price
    // (Assuming the API returns 'title' and 'price' properties)
    newLi.innerHTML = `
            <span>${product.title}</span> 
            <span class="price">$${product.price}</span>
          `;

    // Step C: Actually inject it into the visible <ul> on the screen!
    productListUI.appendChild(newLi);
  });
}
