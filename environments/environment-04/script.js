import { teachers } from "./teachers.js";

let sortOption = "";

window.addEventListener("load", initApp);

async function initApp() {
  console.log("running", teachers);
  addTeacher();
  sortByName();
  sortByEmail();
  setupSortBySelect();
}

function addTeacher() {

  let sortedTeachers = sortTeacher(teachers, sortOption);

  const teachersList = document.querySelector("#teachers-list");
  teachersList.innerHTML = "";

  for (const teacher of sortedTeachers) {
    showTeacher(teacher);
  }
}

function showTeacher(teacher) {
  document.querySelector("#teachers-list").insertAdjacentHTML(
    "beforeend",
    `
    <p>Name: ${teacher.name}</p>
    <p>Email: ${teacher.email}</p>
    `
  );
}

function sortTeacher(teachers, option){
  switch (option) {
    case "name":
      return teachers.sort((a, b) => a.name.localeCompare(b.name));
    case "email":
      return teachers.sort((a, b) => a.email.localeCompare(b.email));
    default:
      return teachers
  }
}

function setupSortBySelect(){
  const selectElement = document.querySelector("#select-sort-by");
  selectElement.addEventListener("change", function(event) {
    sortOption = event.target.value;
    addTeacher();
  })
}

function sortByName(){
  const teachersByName = teachers.sort((a, b) => a.name.localeCompare(b.name));
  console.log(teachersByName);
}

function sortByEmail(){
  const teachersByEmail = teachers.sort((a, b) => a.email.localeCompare(b.email));
  console.log(teachersByEmail);
}