"use strict";

const products = [
  {
    name: "Toothpaste",
    price: 3,
    inStock: true,
  },
  {
    name: "Shampoo",
    price: 6,
    inStock: true,
  },
  {
    name: "Hand Soap",
    price: 2,
    inStock: false,
  }
];

window.addEventListener("load", initApp);

function initApp() {
  console.log("running");

  addProductsInStock();

  document.querySelector("#create-form").addEventListener("submit", createProductClicked);
}

function addProductsInStock() {
  for (const product of products) {
    addProduct(product);
  }
}

function addProduct(product) {
  if (product.inStock) {
    document.querySelector("#list-container").insertAdjacentHTML(
      "beforeend",
      `<p>Product: ${product.name}</p>
      <p>Price: ${product.price}</p>
      <p>In stock: ${product.inStock}</p>`
    );
  }
}

function createProduct(name, price, inStock) {
  let product = {
    name: name,
    price: parseInt(price),
    inStock: inStock,
  };

  products.push(product);
  addProduct(product);
}

function createProductClicked(event) {
  event.preventDefault();

  let name = document.querySelector("#product-name").value;
  let price = document.querySelector("#product-price").value;
  let inStock = document.querySelector("#stock").checked;

  createProduct(name, price, inStock);

  document.querySelector("#create-form").reset();
}
