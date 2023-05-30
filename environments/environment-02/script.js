"use strict";

const animals = [
    {
      name: "Luna",
      type: "Dog",
      age: 3
    },
    {
      name: "Simba",
      type: "Cat",
      age: 5
    },
    {
      name: "Buddy",
      type: "Rabbit",
      age: 2
    }
];

window.addEventListener("load", initApp);

function initApp() {
    console.log("running");
    showSortedAnimals();

    document.querySelector("#create-form").addEventListener("submit", createAnimalClicked);
}

function showSortedAnimals() {
    const sortedAnimals = animals.slice().sort((a, b) => a.age - b.age);

    let tableBody = document.querySelector("#list-container table tbody");
    tableBody.innerHTML = "";
    
    for (const animal of sortedAnimals) {
        addAnimal(animal);
    }
}

function addAnimal(animal){
    let tableBody = document.querySelector("#list-container table tbody");

    let row = document.createElement("tr");
    row.innerHTML = `
        <td>${animal.name}</td>
        <td>${animal.type}</td>
        <td>${animal.age}</td>
    `;

    tableBody.appendChild(row);
}

function createAnimal(name, type, age) {
    let animal = {
        name: name,
        type: type,
        age: age,
    };

    animals.push(animal);
    showSortedAnimals();
    console.log(animals)
}

function createAnimalClicked(event) {
    event.preventDefault();

    console.log("clicked");

    let name = document.querySelector("#animal-name").value;
    let type = document.querySelector("#animal-type").value;
    let age = parseInt(document.querySelector("#animal-age").value);

    createAnimal(name, type, age)

    document.querySelector("#create-form").reset();
}