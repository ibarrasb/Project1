// Declaring variables for code. 

var searchBar = document.querySelector("#search-bar");
var searchButton = document.querySelector("#search-button");
var searchSong = document.getElementById("searchsong")
var recentSongTitle = document.getElementById("recentsongtitle")

fetch("https://genius.p.rapidapi.com/search?q=%20", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "a91bea8515msh1cd8f24e11a9b85p19f2a0jsn54911ff43d9f",
		"x-rapidapi-host": "genius.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(response => {
	console.log(response)
.catch(err => {
	console.error(err);
});





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




   
       
   
