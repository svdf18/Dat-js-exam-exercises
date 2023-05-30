"use strict";

window.addEventListener("load", initApp);

function initApp(){
    document.querySelector("#btn-knap").addEventListener("click", clicked)
    document.querySelector("#result_success").classList.add("hide");
    document.querySelector("#result_failure").classList.add("hide");
}

function clicked(){
    console.log("det virker")

    document.querySelector("#result_success").classList.add("show");
}