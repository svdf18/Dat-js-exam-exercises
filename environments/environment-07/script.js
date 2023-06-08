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
  
  document.querySelector("#students-table-body").innerHTML = "";

  addSortedStudents();
}

function createStudentClicked(event){
  event.preventDefault();
  console.log("clicked");

  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let age = document.querySelector("#age").value;

  createStudent(name, email, age);

  document.querySelector("#create-student-form").reset();
}

function addSortedStudents(){
  students.sort((a, b) => a.age.localeCompare(b.age));

  for (const student of students){
    addStudent(student);
  }
}

function addStudent(student) {
  document.querySelector("#students-table-body").insertAdjacentHTML(
    "beforeend", `
    <tr>
       <td>${student.name}</td>
       <td>${student.email}</td>
       <td>${student.age}</td>
    </tr>
    `
  );
}