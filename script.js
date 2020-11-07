var searchBar = document.querySelector("#search-bar");
var searchButton = document.querySelector("#search-button");




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




   
       
   
