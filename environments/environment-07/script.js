"use strict";

let students = [];

window.addEventListener("load", initApp);

function initApp(){
  console.log(students);

  document.querySelector("#create-student-form").addEventListener("submit", createStudentClicked);
}

function createStudent(name, email, age){
  const student = {
    name: name,
    email: email,
    age: age,
  }

  students.push(student);

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
  const filteredStudents = students.filter(student => student.age > 18);
  filteredStudents.sort((a, b) => a.name.localeCompare(b.name));

  for (const student of filteredStudents){
    showStudent(student);
  }
}


function showStudent(student){
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