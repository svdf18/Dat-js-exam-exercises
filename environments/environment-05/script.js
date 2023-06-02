import { courses } from "./courses.js";

window.addEventListener("load", initApp);

function initApp(){
  console.log("running", courses);
  addCourses();

  document.querySelector("#create-course-form").addEventListener("submit", createCourseClicked);
}

function addCourses(){

  const coursesList = document.querySelector("#courses-list")
  coursesList.innerHTML = "";

  for (const course of courses){
    showCourse(course)
  };
}

function showCourse(course){
  document.querySelector("#courses-list").insertAdjacentHTML(
    "beforeend", `
    <p>Course name: ${course.name}</p>
    <p>Ects-points: ${course.ectsPoints}</p>
    <p>Teacher: ${course.teacher}</p>
    `
  )
}

function createCourse(name, ectsPoints, teacher, maxStudents){
  let course = {
    name: name,
    ectsPoints: parseInt(ectsPoints),
    teacher: teacher,
    maxStudents: parseInt(maxStudents),
  };

  courses.push(course);
  addCourses(course);
}

function createCourseClicked(event){
  event.preventDefault();

  let name = document.querySelector("#input-name").value;
  let ectsPoints = document.querySelector("#input-ects-points").value;
  let teacher = document.querySelector("#input-teacher").value;
  let maxStudents = document.querySelector("#input-max-students").value;

  createCourse(name, ectsPoints, teacher, maxStudents)
}