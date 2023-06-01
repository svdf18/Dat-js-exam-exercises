"use strict";

const products = [
  {
    name: "Toothpaste",
    price: 3,
    inStock: false,
  },
  {
    name: "Shampoo",
    price: 6,
    inStock: true,
  },
  {
    name: "Hand Soap",
    price: 2,
    inStock: true,
  }
];

window.addEventListener("load", initApp);

function initApp(){
  console.log("running");
  addSortedProducts();

  document.querySelector("#create-form").addEventListener("submit", createProductClicked);
}

function addSortedProducts() {
  const sortedProducts = products.slice().sort((a, b) => {
    if (a.inStock && !b.inStock) {
      return -1;
    } else if (!a.inStock && b.inStock) {
      return 1;
    } else {
      return 0;
    }
  });

  const listContainer = document.querySelector("#list-container");
  listContainer.innerHTML = "";

  for (const product of sortedProducts) {
    addProduct(product);
  }
}


function addProduct(product){
  document.querySelector("#list-container").insertAdjacentHTML(
    "beforeend",
    `
    <p>Product: ${product.name}</p>
    <p>Price: ${product.price}</p>
    <p>In stock: ${product.inStock}</p>
    `
  );
}

function createProduct(name, price, inStock) {
  let product = {
    name: name,
    price: parseInt(price),
    inStock: inStock,
  };

  products.push(product);
}

function createProductClicked(event) {
  event.preventDefault();
  console.log("clicked");

  let name = document.querySelector("#product-name").value;
  let price = document.querySelector("#product-price").value;
  let inStock = document.querySelector("#stock").checked;

  createProduct(name, price, inStock);

  document.querySelector("#create-form").reset();

  addSortedProducts();
}

