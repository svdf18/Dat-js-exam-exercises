import {teachers} from "./teachers.js";

window.addEventListener("load", initApp);

function initApp(){
  console.log("running");
  console.log(teachers);
  addTeachers();

  document.querySelector("#create-teacher-form").addEventListener("submit", createTeacherClicked);
}

function addTeachers(){

  const teacherList = document.querySelector("#teachers-list")
  teacherList.innerHTML = "";
  
  for (const teacher of teachers){
    showTeacher(teacher);
  }
}

function showTeacher(teacher){
  document.querySelector("#teachers-list").insertAdjacentHTML(
    "beforeend", `
    <p>Name: ${teacher.name}</p>
    <p>Email: ${teacher.email}</p>
    `
  )
}

function createTeacher(name, email){
  let teacher = {
    name: name,
    email: email,
  };

  teachers.push(teacher);
  addTeachers(teacher);
};

function createTeacherClicked(event){
  event.preventDefault();

  console.log("clicked");

  let name = document.querySelector("#input-name").value;
  let email = document.querySelector("#input-email").value;

  createTeacher(name, email);
};