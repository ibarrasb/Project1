// Declaring variables for code. 

var searchBar = document.querySelector("#search-bar");
var searchButton = document.querySelector("#search-button");
var songListResult = document.querySelector("#song-list");

//RECENT SONG ARRAY ON LEFT
var SongResults = [];

// function renderResults() {
//     songListResult.innerHTML = " ";

//     //for loop to iterate through the list of cities
//     // Want to delete Song Results with every search
//    for(var i =0; i< SongResults.length; i++){
//        var song = SongResults[i];
//        var li = document.createElement("div");
//        li.textContent = song;
//        li.setAttribute("class", "result-display")
//        songListResult.appendChild(li);
//    }
// }


// Adding an event listener for the search button
searchButton.addEventListener("click", function(event){
    event.preventDefault();
    //Gets response from user from the search bar 
    var songInput = searchBar.value.trim();
    if(songInput === ""){
        return;
    }
    SongResults.push(songInput);


    //displays users input 
    console.log(songInput);
    getSong(songInput);
});


function getSong(songInput){
    fetch("https://genius.p.rapidapi.com/search?q=" + songInput , {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "a91bea8515msh1cd8f24e11a9b85p19f2a0jsn54911ff43d9f",
		"x-rapidapi-host": "genius.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(response => {

    
 var song = response;

    console.log(song.response.hits)

    searchResults();

    function searchResults(){ 
        // document.querySelector(".collection-result").setAttribute("class", "hide")
    //song 1 result
    var songName1 = document.querySelector(".inside-name1");
    songName1.innerHTML = song.response.hits[0].result.title;
    var song1pic = document.getElementById("cover-art1");
    song1pic.src = song.response.hits[0].result.song_art_image_thumbnail_url;
    var ArtistName1 = document.querySelector(".artist-name1");
    ArtistName1.innerHTML = song.response.hits[0].result.primary_artist.name;

    //song 2 result
    var songName2 = document.querySelector(".inside-name2");
    songName2.innerHTML = song.response.hits[1].result.title;
    var song2pic = document.getElementById("cover-art2");
    song2pic.src = song.response.hits[1].result.song_art_image_thumbnail_url;
    var ArtistName2 = document.querySelector(".artist-name2");
    ArtistName2.innerHTML = song.response.hits[1].result.primary_artist.name;
    console.log(song.response.hits[1].result.primary_artist.name)

    //song 3 result
    var songName3 = document.querySelector(".inside-name3");
    songName3.innerHTML = song.response.hits[2].result.title;
    var song3pic = document.getElementById("cover-art3");
    song3pic.src = song.response.hits[2].result.song_art_image_thumbnail_url;
    var ArtistName3 = document.querySelector(".artist-name3");
    ArtistName3.innerHTML = song.response.hits[2].result.primary_artist.name;
                        }

                        })

            }

// songListResult.addEventListener("click", function(event){
//         event.preventDefault();
//         var song = event.target.dataset.song;

//         console.log(getSong(song))
//     })
