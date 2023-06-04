import { courses } from "./courses.js";

window.addEventListener("load", initApp);

function initApp() {
  console.log(courses);
  addCourses();
  document.querySelector("#select-filter-ects").addEventListener("change", filterCourses);
}

function addCourses() {
  for (const course of courses) {
    showCourse(course);
  }
}

function showCourse(course) {
  document.querySelector("#courses-list").insertAdjacentHTML(
    "beforeend",
    `
    <p>Course name: ${course.name}</p>
    <p>Ects points: ${course.ectsPoints}</p>
    `
  );
}

function filterCourses() {
  const selectedEcts = parseInt(document.querySelector("#select-filter-ects").value);
  const filteredCourses = courses.filter((course) => course.ectsPoints === selectedEcts);

  clearCourses();
  for (const course of filteredCourses) {
    showCourse(course);
  }
}

function clearCourses() {
  document.querySelector("#courses-list").innerHTML = "";
}
