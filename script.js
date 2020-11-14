$(document).ready(function(){
    jQuery.ajaxPrefilter(function(options) {
        if (options.crossDomain && jQuery.support.cors) {
            options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
        }
    });
// Declaring variables for code. 

var searchBar = document.querySelector("#search-bar");
var searchButton = document.querySelector("#search-button");
var songListResult = document.querySelector("#song-list");
var clearButton = document.querySelector("#clear-search");
var resultSongsCon = document.querySelectorAll("#result-song")

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
    console.log()


    //displays users input 
    console.log(songInput);
    getSong(songInput);
});
getLyrics();


function getLyrics(){

    var songName = "freestyle";
    var songArtist = "lil baby";

var queryURL = "http://www.stands4.com/services/v2/lyrics.php?uid=8254&tokenid=l09o1M2aypBkjILh&term="+songName+"&artist="+songArtist+"&format=json";
    $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
    
            var results = response;

            console.log(results);
        
    
    
    
    
            
          
        });
    }



    






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

// clearButton.addEventListener("click", function(){
//     document.querySelector(".collection-result").removeAttribute("class", "hide")

//     })
//Hides button if nothing is searched
if(song){
document.querySelector(".collection-result").removeAttribute("class", "hide")
 }

    function searchResults(){ 
        
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

//https://www.stands4.com/services/v2/lyrics.php?uid=8254&tokenid=l09o1M2aypBkjILh&term=[SONG NAME]&artist=[ARTIST NAME]&format=json
            };

// songListResult.addEventListener("click", function(event){
//         event.preventDefault();
//         var song = event.target.dataset.song;

//         console.log(getSong(song))
//     })


// Playist Queue 


for (var i = 0; i < resultSongsCon.length; i++) {
    console.log(resultSongsCon[i])
  resultSongsCon[i].onclick = function getSong(event){
    event.preventDefault();
    event.stopPropagation();
    // var SongQueue = event.target.songListResult
    console.dir(event.target)
    
    var children = event.target.children
    console.dir (children[0].textContent)
  
    var songName = children[0].textContent
    var artistName = children[2].textContent
  }
}

