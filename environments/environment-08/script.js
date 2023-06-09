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

function initApp(){
  console.log(playList);

  addPlaylistItem();

  document.querySelector("#add-song-form").addEventListener("submit", createPlaylistItemClicked)
  document.querySelector("#sort-artist").addEventListener("change", sortByArtist)
  document.querySelector("#sort-title").addEventListener("change", sortByTitle)
}

function createPlaylistItem(artist, title, duration){
  const playListItem = {
    artist: artist,
    title: title,
    duration: duration,
  }

  playList.push(playListItem);
}

function createPlaylistItemClicked(event){
  event.preventDefault();
  console.log("clicked");

  let artist = document.querySelector("#name").value;
  let title = document.querySelector("#title").value;
  let duration = document.querySelector("#duration").value;

  createPlaylistItem(artist, title, duration)

  document.querySelector("#add-song-form").reset();

  console.log(playList)

  addPlaylistItem()
}

function addPlaylistItem() {
  document.querySelector("#songlist").innerHTML = "";

  for (const playListItem of playList) {
    document.querySelector("#songlist").insertAdjacentHTML(
      "beforeend",
      `<li>ARTIST: ${playListItem.artist} TITLE: ${playListItem.title} (${playListItem.duration})</li>`
    );
  }
}

function sortByArtist(){
  playList.sort((a,b) => a.artist.localeCompare(b.artist));
  addPlaylistItem();
  console.log("by artist")
}

function sortByTitle(){
  playList.sort((a,b) => a.title.localeCompare(b.title));
  addPlaylistItem();
  console.log("by title")
}



