"use strict";

let basket = [];

window.addEventListener("load", initApp);

async function initApp(){
  const data = await getData();
  console.log(data);
  console.log(basket)

  addProducts(data)
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
    addToCartButton.addEventListener("click", () => addToCart(product));

    document.querySelector("#products").appendChild(article);
}

function addToCart(product) {
  basket.push(product);
  console.log("Produkted er tilføjet til kurven:", product);
  console.log(basket)

  displayBasket();
}

function displayBasket() {
  const basketSection = document.querySelector("#basket");
  const basketTableBody = basketSection.querySelector("tbody");

  for (const product of basket) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${product.name}</td>
      <td>${product.price} kr.</td>
    `;
    basketTableBody.appendChild(row);
  }
}