"use strict";

const products = [
  {
    name: "Rice",
    price: 12,
    inStock: true,
  },
  {
    name: "Beans",
    price: 8,
    inStock: true,
  },
  {
    name: "Pasta",
    price: 5,
    inStock: false,
  } 
]

let sortOption = "";

window.addEventListener("load", initApp);

function initApp(){
  console.log("running");
  productList();
  setupSortBySelect();
}

function productList(){

  let sortedProducts = sortProducts(products, sortOption);

  const listContainer = document.querySelector("#list-container");
  listContainer.innerHTML = "";

  for (const product of sortedProducts){
    addProduct(product);
  }
}

function addProduct(product){
  document.querySelector("#list-container").insertAdjacentHTML(
    "beforeend",`
    <p>Product: ${product.name}</p>
    <p>Price: ${product.price}</p>
    <p>In stock: ${product.inStock}</p>
    `
  )
}

function sortProducts(products, option){
  switch (option) {
    case "name":
      return products.sort((a, b) => a.name.localeCompare(b.name));
    case "price":
      return products.sort((a, b) => a.price - b.price);
    case "inStock":
      return products.sort((a, b) => b.inStock - a.inStock);
    default:
      return products;
  }
}

function setupSortBySelect(){
  const selectElement = document.querySelector("#select-sort-by");
  selectElement.addEventListener("change", function(event) {
    sortOption = event.target.value;
    productList();
  })
}