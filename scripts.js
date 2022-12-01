// Major project TP7 revision



function loadFileInto(fromFile, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
			if ((this.readyState == 4) && (this.status == 200)) {
				document.querySelector(whereTo).innerHTML = this.responseText;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
			}
		
	} // end ajax.onreadystatechange function

	// initiate request and wait for response
	ajax.send();

}

function Recipe(recipeName, contributorName, imageURL, ingredientsURL, equipmentURL, directionsURL) {
  
  this.recipeName = recipeName;
  this.contributor = contributorName;
  this.imageURL = imageURL;
  this.ingredients = ingredientsURL;
  this.equipment = equipmentURL;
  this.directions = directionsURL;
  
  this.displayRecipe = function() {
    
    document.querySelector("#banner h1").innerHTML = this.recipeName;
    document.querySelector("#contribution").innerHTML = this.contributor;
    document.querySelector("#banner").style.backgroundImage = "url(" + this.imageURL +")";
   loadFileInto(this.ingredients, "#ingredients ul");
    loadFileInto(this.equipment, "#equipment ul");
    loadFileInto(this.directions, "#directions ol");
  }
  
  
}

// For loading new recipes
redvelvet = new Recipe(
  "Red Velvet Cupcakes",
  "Chris", 
  "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=951&q=80", 
  "ingredients.html", 
  "equipment.html", 
  "directions.html"
);

// When window first loads / clicking functions
window.onload = function() {
  
  document.querySelector("#firstRecipe").onclick = function() {
    redvelvet.displayRecipe();
  }


  

} //end window.onload