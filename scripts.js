// Major project TP7 revision



function loadFileInto(fromFile, whereTo) {

	// creates new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// Defines the method, source, and async value of objec
	ajax.open("GET", fromFile, true);

	// gives code to __ in response to ajax request
	ajax.onreadystatechange = function() {
			if ((this.readyState == 4) && (this.status == 200)) {
				document.querySelector(whereTo).innerHTML = this.responseText;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
			}
		
	}
  
	ajax.send();

}

function Recipe(recipeName, contributorName, imageURL, ingredientsURL, descriptionURL, directionsURL) {
  
  this.recipeName = recipeName;
  this.contributor = contributorName;
  this.imageURL = imageURL;
  this.ingredients = ingredientsURL;
  this.description = descriptionURL;
  this.directions = directionsURL;
  
  this.displayRecipe = function() {
    
    document.querySelector("#banner h1").innerHTML = this.recipeName;
    document.querySelector("#contribution").innerHTML = this.contributor;
    document.querySelector("#banner").style.backgroundImage = "url(" + this.imageURL +")";
    loadFileInto(this.ingredients, "#ingredients ul");
    loadFileInto(this.description, "#description ul");
    loadFileInto(this.directions, "#directions ol");
  }
  
  
}

// For loading new recipes
redvelvet = new Recipe(
  "Chicken Katsu",
  "Recipe by: sakuraiiko @Allrecipes.com", 
  "https://images.unsplash.com/photo-1591814252471-068b545dff62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
  "Jrecipes/ingredients.html", 
  "Jrecipes/description.html", 
  "Jrecipes/directions.html"
);

// When window first loads / clicking functions
window.onload = function() {
  
  document.querySelector("#firstRecipe").onclick = function() {
    redvelvet.displayRecipe();
  }


  

} //end window.onload