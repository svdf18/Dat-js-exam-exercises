"use strict";

window.addEventListener("load", initApp);

async function initApp(){
    console.log("running");

    const users = await getData();
    console.log(users);

    for (const user of users){
        addUser(user);
    }

    displayRoleCounts(users);
}

async function getData(){
    const response = await fetch("users.json");
    const data = await response.json();
    return data;
}

function addUser(user){
    console.log(user);
    document.querySelector("#userlist").insertAdjacentHTML(
        "beforeend",
        /*html*/ `
        <article class="user-grid-item">
        <p>Username: ${user.name}</p>
        <p>Active: ${user.active}</p>
        <p>Role: ${user.role}</p>
        </article>
        `
    )
}

function displayRoleCounts(users) {
    const adminCount = countUserRoles(users, "admin");
    const userCount = countUserRoles(users, "user");
    const guestCount = countUserRoles(users, "guest");

    console.log("Admin Count:", adminCount);
    console.log("User Count:", userCount);
    console.log("Guest Count:", guestCount);

    document.querySelector("#admin-count").textContent = adminCount;
    document.querySelector("#user-count").textContent = userCount;
    document.querySelector("#guest-count").textContent = guestCount;
}

function countUserRoles(users, role) {
    let count = 0;
    for (const user of users) {
        if (user.role === role) {
            count++;
        }
    }
    return count;
}