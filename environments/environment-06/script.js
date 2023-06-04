"use strict";

let products = "";
let basket = [];

window.addEventListener("load", initApp);

async function initApp(){
  products = await getData();
  console.log(products)
}

async function getData(){
  const response = await fetch("products.json");
  const data = await response.json();

  return data;
}

function addToBasket(productName, quantity){
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
}


function removeFromBasket(productName, quantity){
  const existingProduct = basket.find(item => item.name === productName);

  if(existingProduct) {
    existingProduct.quantity -= quantity;
    if (existingProduct.quantity < 0) {
      existingProduct.quantity = 0;
    }
  } else {
    console.log("No such item in basket");
  }
}
