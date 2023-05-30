"use strict";

window.addEventListener("load", initApp);

async function initApp(){
    console.log("running");

    const users = await getUsers();
    console.log(users);

    for (const user of users) {
        if (user.role === "admin") {
            addUser(user)
        }
    }

    displayRoleCounts(users);
}

async function getUsers(){
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
        </article>
        `
    )
}

function displayRoleCounts(users) {
    const adminCount = countUsersByRole(users, "admin");
    const userCount = countUsersByRole(users, "user");
    const guestCount = countUsersByRole(users, "guest");
  
    document.querySelector("#admin-count").textContent = adminCount;
    document.querySelector("#user-count").textContent = userCount;
    document.querySelector("#guest-count").textContent = guestCount;
  }
  
  function countUsersByRole(users, role) {
    return users.reduce((count, user) => {
      if (user.role === role) {
        count++;
      }
      return count;
    }, 0);
  }