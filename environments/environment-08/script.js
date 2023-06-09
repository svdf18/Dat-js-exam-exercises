"use strict";

let playList = [
{
  artist: "Freddie Gibbs",
  title: "Pinata",
  duration: "3:21"
},
{
  artist: "Lil Uzi Vert",
  title: "Rock",
  duration: "3:33"
},
{
  artist: "Blawan",
  title: "Garage",
  duration: "4:32"
}
];

window.addEventListener("load", initApp);

function initApp() {
  console.log(playList);
  addPlaylistItem();
}

function addPlaylistItem() {
  for (const track of playList) {
    document.querySelector("#songlist").insertAdjacentHTML(
      "beforeend", `
      <li>ARTIST: ${track.artist}, TITLE: ${track.title}, ${track.duration} <button>Upvote</button></li>
      `
    );

    document.querySelector("#songlist li:last-child button").addEventListener("click", () => moveTrackUp(track));
  }
}

function moveTrackUp(track) {
  console.log(track)

  const index = playList.findIndex(item => item === track);
  console.log(index);

  if (index > 0) {
    const temp = playList[index - 1];
    playList[index - 1] = track;
    playList[index] = temp;

    document.querySelector("#songlist").innerHTML = "";
    addPlaylistItem();
  }
}