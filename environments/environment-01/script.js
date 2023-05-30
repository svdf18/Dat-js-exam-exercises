"use strict";

let users;

window.addEventListener("load", initApp);

async function initApp() {
    console.log("running");

    await getData();
    console.log(users);

    
    for (const user of users){
        if (user.active === true) {
        addUser(user);
        }
    }

    document.querySelector("#create-user-form").addEventListener("submit", createUserClicked);
}

async function getData() {
    const response = await fetch("users.json");
    users = await response.json();
}

function addUser(user) {
    console.log(user);
    document.querySelector("#userlist").insertAdjacentHTML(
        "beforeend",
        /*html*/`
        <article class="user-grid-item">
        <p>Username: ${user.name}</p>
        <p>Active: ${user.active}</p>
        <p>Role: ${user.role}</p>
        </article>
        `
    );
}

function createUser(name, active, role) {
    let user = {
        name: name,
        active: active,
        role: role,
    };

    users.push(user);
    addUser(user);
}

function createUserClicked(event) {
    event.preventDefault();

    console.log("clicked");

    let name = document.querySelector("#input-user-name").value;
    let active = document.querySelector("#input-user-active").value;
    let role = document.querySelector("#input-user-role").value;

    createUser(name, active, role);
}