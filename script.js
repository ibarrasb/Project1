// Declaring variables for code. 

var searchBar = document.querySelector("#search-bar");
var searchButton = document.querySelector(".search-button");
// var searchSong = document.getElementById("searchsong")
// var recentSongTitle = document.getElementById("recentsongtitle")
// var apiKey = "a91bea8515msh1cd8f24e11a9b85p19f2a0jsn54911ff43d9f"
// var songInput = searchBar.value.trim();


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
    console.log(response)
})

}






// function getMusic(){
    
//     var queryURL = "";
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//       })
//         .then(function(response) {
            
//             console.log(response);
//         });


   
//     searchBar.value = "";
    
    
//     }

