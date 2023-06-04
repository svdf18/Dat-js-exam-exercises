import {courses} from "./courses.js"

window.addEventListener("load", initApp);

function initApp(){
  console.log(courses); 
  sortCoursesByEcts();
  addCourses();
 
}

function addCourses(){
  for (const course of courses){
    showCourse(course)
  }
}

function showCourse(course){
  document.querySelector("#courses-list").insertAdjacentHTML(
    "beforeend", `
    <p>Course name: ${course.name}</p>
    <p>Ects points: ${course.ectsPoints}</p>
    `
  )
}

function sortCoursesByEcts(){
  courses.sort((a, b) => a.ectsPoints - b.ectsPoints);
}

