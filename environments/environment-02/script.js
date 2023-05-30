"use strict";

window.addEventListener("load", initApp);

let animals = [];

function initApp() {
  console.log("running");
  console.log(animals);

  document.querySelector("#create-form").addEventListener("submit", createAnimalClicked);

  for (const animal of animals) {
    addAnimal(animal);
  }
}

function addAnimal(animal) {
  let tableBody = document.querySelector("#list-container table tbody");

  let row = document.createElement("tr");
  row.innerHTML = `
    <td>${animal.name}</td>
    <td>${animal.type}</td>
    <td>${animal.age}</td>
  `;

  tableBody.appendChild(row);
  console.log(animals)
}

function createAnimal(name, type, age) {
  let animal = {
    name: name,
    type: type,
    age: age,
  };

  animals.push(animal);
  animals.sort(sortByName);
  addAnimal(animal);

  clearTable();
  renderAnimals();
}

function createAnimalClicked(event) {
  event.preventDefault();

  console.log("clicked");

  let name = document.querySelector("#animal-name").value;
  let type = document.querySelector("#animal-type").value;
  let age = parseInt(document.querySelector("#animal-age").value);

  createAnimal(name, type, age);

  document.querySelector("#create-form").reset();
}

function sortByName(animalA, animalB) {
  return animalA.name.localeCompare(animalB.name);
};

function clearTable() {
    let tableBody = document.querySelector("#list-container table tbody");
    tableBody.innerHTML = "";
}
  
function renderAnimals() {
    for (const animal of animals) {
      addAnimal(animal);
    }
}

