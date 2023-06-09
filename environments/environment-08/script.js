"use strict";

window.addEventListener("load", initApp);

let tracks = [];

async function initApp(){
  await getData();

  console.log(tracks);
  addTracks();
}

async function getData(){
  const response = await fetch("playlist.json");
  tracks = await response.json();

  return tracks
}

function addTracks(){

  document.querySelector("#songlist").innerHTML = "";
  for (const track of tracks){
    showTrack(track);
  }
}

function showTrack(track){
  document.querySelector("#songlist").insertAdjacentHTML(
    "beforeend", `
    <li>Artist: ${track.artist} / Title: ${track.title} / Duration: ${track.duration} <button>Remove</button></li>
    `
  );

  document.querySelector("#songlist li:last-child button").addEventListener("click", () => removeTrack(track));
}

function removeTrack(track){
  const index = tracks.indexOf(track);
  tracks.splice(index,1);
  addTracks();
}