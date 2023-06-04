import {courses} from "./courses.js";

window.addEventListener("load", initApp);

function initApp(){
  console.log(courses);
  addCourses();
}

function addCourses(){
  for (const course of courses){
    sortCoursesByDate();
    showCourse(course);
  }
}

function showCourse(course){
  document.querySelector("#courses-list").insertAdjacentHTML(
    "beforeend", `
    <p>Course name: ${course.name}</p>
    <p>Start date: ${course.startDate}</p>
    <p>Ects points: ${course.ectsPoints}</p>
    `
  )
}

function sortCoursesByDate() {
  courses.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
}
