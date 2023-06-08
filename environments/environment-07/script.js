"use strict";

let students = [];

window.addEventListener("load", initApp);

function initApp(){
  console.log(students);
  
  document.querySelector("#create-student-form").addEventListener("submit", createStudentClicked);
}

function createStudent(name, email, age){
  let student = {
    name: name,
    email: email,
    age: age,
  };

  students.push(student);
  console.log(students);
}

function createStudentClicked(event){
  event.preventDefault();
  console.log("clicked");

  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let age = document.querySelector("#age").value;

  if (!isValidEmail(email)) {
    alert("Ugyldig emailadresse");
    return;
  }

  createStudent(name, email, age);

  document.querySelector("#create-student-form").reset();
}

function isValidEmail(email) {
  const atIndex = email.indexOf("@");
  if (atIndex < 4) {
    return false;
  }

  const domain = email.substring(atIndex);
  if (domain !== "@stud.kea.dk") {
    return false;
  }

  return true;
}

function removeIncorrectEmail(){
  students = students.filter(student => isValidEmail(student.email));
}