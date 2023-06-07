"use strict";

let products = [];
let basket = [];

window.addEventListener("load", initApp);

async function initApp(){
  const data = await getData();
  console.log(data);
  console.log(basket)

  products = data;

  addProducts(products);
}

async function getData(){
  const response = await fetch("products.json")
  const data = await response.json();

  return data
}

function addProducts(products){
  for (const product of products) {
    showProduct(product);
  }
}

function showProduct(product){
  const article = document.createElement("article");
  article.innerHTML =`
    <article>
      <h3>${product.name}</h3>
      <p>Vægt: ${product.weight} g</p>
      <p>Pris: ${product.price} ,-</p>
      <button class="add-to-cart">Læg i kurv</button>
    </article>
    `;

    const addToCartButton = article.querySelector(".add-to-cart");
    addToCartButton.addEventListener("click", () => addToCart(product.name, 1));

    document.querySelector("#products").appendChild(article);
}

function addToCart(productName, quantity) {
  const existingProduct = basket.find(item => item.name === productName);

  if (existingProduct) {
    existingProduct.quantity += quantity;
  } else {
    const product = products.find(item => item.name === productName);
    if (product) {
      basket.push({ ...product, quantity });
    } else {
      console.log("Product not found");
    }
  }
  displayBasket();
}

function removeFromCart(productName) {
  const existingProductIndex = basket.findIndex(item => item.name === productName);

  if (existingProductIndex !== -1) {
    const existingProduct = basket[existingProductIndex];
    existingProduct.quantity--;

    if (existingProduct.quantity === 0) {
      basket.splice(existingProductIndex, 1);
    }
  } else {
    console.log("No such item in basket");
  }

  displayBasket();
}

function displayBasket() {
  const basketSection = document.querySelector("#basket");
  const basketTableBody = basketSection.querySelector("tbody");
  const totalInBasketElement = document.querySelector("#total-in-basket");
  const totalProductsElement = document.querySelector("#total-products");
  const totalPriceElement = document.querySelector("#total-price");
  const totalWeightElement = document.querySelector("#total-weight");
  const warningElement = document.querySelector(".warning");

  basketTableBody.innerHTML = ""; // Clear the table body before updating

  let totalInBasket = 0;
  let totalPrice = 0;
  let totalWeight = 0;
  const productSet = new Set();

  for (const product of basket) {
    const { name, price, quantity, weight } = product;
    const row = document.createElement("tr");
    const productTotalPrice = price * quantity;
    const productTotalWeight = weight * quantity;

    row.innerHTML = `
      <td>
        <button class="remove">-</button>
          ${quantity}
        <button class="add">+</button>
      </td>
      <td>${name}</td>
      <td>${price} kr.</td>
      <td>${productTotalPrice} kr.</td>
      <td>${productTotalWeight} g</td>
    `;

    const removeButton = row.querySelector(".remove");
    const addButton = row.querySelector(".add");

    removeButton.addEventListener("click", () => removeFromCart(name, 1));
    addButton.addEventListener("click", () => addToCart(name, 1));

    basketTableBody.appendChild(row);

    totalInBasket += quantity;
    totalPrice += productTotalPrice;
    totalWeight += productTotalWeight;
    productSet.add(name);
  }

  totalInBasketElement.textContent = totalInBasket;
  totalProductsElement.textContent = productSet.size;
  totalPriceElement.textContent = totalPrice;
  totalWeightElement.textContent = totalWeight;

  // Show/hide the warning element based on weight
  if (totalWeight > 2000) {
    warningElement.classList.add("show");
  } else {
    warningElement.classList.remove("show");
  }
}
