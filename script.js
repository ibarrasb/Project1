// Declaring variables for code. 

var searchBar = document.querySelector("#search-bar");
var searchButton = document.querySelector(".search-button");
// var searchSong = document.getElementById("searchsong")
// var recentSongTitle = document.getElementById("recentsongtitle")


// Adding an event listener for the search button
searchButton.addEventListener("click", function(event){
    event.preventDefault();
    //Gets response from user from the search bar 
    var songInput = searchBar.value.trim();
    if(songInput === ""){
        return;
    }
    //displays users input 
    console.log(songInput);

    getMusic(songInput);

})
//Retrives information from API
function getMusic(songInput){

    // var queryURL = "526794d12f7e4bd3b39e65679085a6be";
    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    //   })
    //     .then(function(response) {
            
    //         console.log(response);
    //     });


   
    // searchBar.value = "";
    
    
//     }


   
       
   
