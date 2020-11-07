// Declaring variables for code. 

var searchBar = document.querySelector("#search-bar");
var searchButton = document.querySelector("#search-button");
var searchSong = document.getElementById("searchsong")
var recentSongTitle = document.getElementById("recentsongtitle")


// Adding an event listener for the search button
searchButton.addEventListener("click", function(event){
    event.preventDefault();
    var userInput = searchBar.value.trim();
    if(userInput === ""){
        return;
    }
     
    console.log(userInput);

    var queryURL = "";
    $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
            
            console.log(response);
        });


   
    searchBar.value = "";
    
    
    })




   
       
   
