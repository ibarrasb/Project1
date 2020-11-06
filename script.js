var searchBar = document.querySelector("#search-bar");
var searchButton = document.querySelector("#search-button");
var ListofSongs = document.querySelector("#artists");
var newButton = document.querySelector("#song");

var songList = [];

renderSongs();

function renderSongs(){
    ListofSongs.innerHTML = "";
    for(var i =0; i< songList.length; i++){
        var song = songList[i];
        var listSong = document.createElement("button");
        listSong.textContent = song;
        listSong.setAttribute("id", "song-list")
        listSong.setAttribute("class", "appended-song")
        listSong.setAttribute("data-song", song)
        ListofSongs.appendChild(listSong);
    }
}

searchButton.addEventListener("click", function(event){
    event.preventDefault();
    var userInput = searchBar.value.trim();
    if(userInput === ""){
        return;
    }
    songList.push(userInput);
    searchBar.value = "";
    
    renderSongs();
    })
    if(newButton){
    newButton.addEventListener("click", function(event){
        var song = event.target.dataset.song
        
        console.log(song);
        var queryURL = "";
        $.ajax({
            url: queryURL,
            method: "GET"
          })
            .then(function(response) {
                var results = response;
                console.log(results);
            });
        });

    }
