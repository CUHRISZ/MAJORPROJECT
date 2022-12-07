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
//Japan
redvelvet = new Recipe(
  "Chicken Katsu",
  "Recipe by: sakuraiiko @Allrecipes.com", 
  "https://images.unsplash.com/photo-1591814252471-068b545dff62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
  "Jrecipes/ingredients.html", 
  "Jrecipes/description.html", 
  "Jrecipes/directions.html"
);
egg = new Recipe(
  "Tamago Egg",
  "Recipe by: Pokerman11 @Allrecipes.com", 
  "https://images.unsplash.com/photo-1606501129419-38058bd81ddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80", 
  "Jrecipes/eggingredients.html", 
  "Jrecipes/eggdescription.html", 
  "Jrecipes/eggdirections.html"
);
miso= new Recipe(
  "Miso Soup",
  "Recipe by: Allrecipes Staff @Allrecipes.com", 
  "https://images.unsplash.com/photo-1625535608282-8f181a38f9e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80", 
  "Frecipes/misoingredients.html", 
  "Frecipes/misodescription.html", 
  "Frecipes/misodirections.html"
);

//France
onion= new Recipe(
  "French Onion Soup",
  "Recipe by: Lori Levin @Allrecipes.com", 
  "https://images.unsplash.com/photo-1549203438-a7696aed4dac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1046&q=80", 
  "Jrecipes/onioningredients.html", 
  "Jrecipes/oniondescription.html", 
  "Jrecipes/oniondirections.html"
);
sucree= new Recipe(
  "Pâte Sucrée",
  "Recipe by: Elizabeth Mervosh @Allrecipes.com", 
  "https://www.onceuponachef.com/images/2021/06/Pate-Sucree-8-scaled.jpg", 
  "Jrecipes/sucingredients.html", 
  "Jrecipes/sucdescription.html", 
  "Jecipes/sucdirections.html"
);
sucree= new Recipe(
  "Pâte Sucrée",
  "Recipe by: Lori Levin @Allrecipes.com", 
  "https://www.onceuponachef.com/images/2021/06/Pate-Sucree-8-scaled.jpg", 
  "Jrecipes/sucingredients.html", 
  "Jrecipes/sucdescription.html", 
  "Jrecipes/sucdirections.html"
);
cord= new Recipe(
  "Chicken Cordon Bleu",
  "Recipe by: Michelle  @Allrecipes.com", 
  "https://amandascookin.com/wp-content/uploads/2022/04/Chicken-Cordon-Bleu-RC-SQ.jpg", 
  "Jrecipes/cordingredients.html", 
  "Jrecipes/corddescription.html", 
  "Jrecipes/corddirections.html"
);

//German
sau= new Recipe(
  "Sauerbraten",
  "Recipe by: Chris Simpler @Allrecipes.com", 
  "https://dinnerthendessert.com/wp-content/uploads/2020/08/German-Sauerbraten-4.jpg", 
  "Grecipes/sauingredients.html", 
  "Grecipes/saudescription.html", 
  "Grecipes/saudirections.html"
);
apple= new Recipe(
  "German Apple Cake",
  "Recipe by: Barbara  @Allrecipes.com", 
  "https://www.masalaherb.com/wp-content/uploads/2018/08/German-Apple-Cake-gog-1.jpg", 
  "Grecipes/appleingredients.html", 
  "Grecipes/appledescription.html", 
  "Grecipes/appledirections.html"
);
pork= new Recipe(
  "German Pork Chops",
  "Recipe by: Pat Mathena Oglesby @Allrecipes.com", 
  "https://heygrillhey.com/static/22134a71324b1b6e4f4a644e6984cda0/Square-Feature-Image-3-15.jpg", 
  "Grecipes/porkingredients.html", 
  "Grecipes/porkdescription.html", 
  "Grecipes/porkdirections.html"
);

//Mexican
quin= new Recipe(
  "One-Skillet Mexican Quinoa",
  "Recipe by: Gruntled Gourmand @Allrecipes.com", 
  "https://www.healthy-liv.com/wp-content/uploads/2017/02/mexican-quinoa-5-of-13.jpg", 
  "Mrecipes/quiningredients.html", 
  "Mrecipes/quindescription.html", 
  "Mrecipes/quindirections.html"
);
hot= new Recipe(
  "Mexican Hot Chocolate",
  "Recipe by: gem  @Allrecipes.com", 
  "https://unpeeledjournal.com/wp-content/uploads/2021/12/51737407470_e1dd77eb7f_b.jpg", 
  "Mrecipes/hotingredients.html", 
  "Mrecipes/hotdescription.html", 
  "Mrecipes/hotdirections.html"
);
cald= new Recipe(
  "Caldo de Pollo",
  "Recipe by:  jack&amp;lanasmommy  @Allrecipes.com", 
  "https://www.isabeleats.com/wp-content/uploads/2020/01/caldo-de-pollo-small-3.jpg", 
  "Mrecipes/caldingredients.html", 
  "Mrecipes/calddescription.html", 
  "Mrecipes/calddirections.html"
);

//Italian
pol= new Recipe(
  "Polenta",
  "Recipe by: Chef John @Allrecipes.com", 
  "https://cdn.loveandlemons.com/wp-content/uploads/2020/02/polenta.jpg", 
  "Irecipes/polingredients.html", 
  "Irecipes/poldescription.html", 
  "Irecipes/poldirections.html"
);
man= new Recipe(
  "Manicotti",
  "Recipe by: Anny @Allrecipes.com", 
  "https://www.afamilyfeast.com/wp-content/uploads/2020/12/Four-Cheese-Baked-Manicotti-3.jpg", 
  "Irecipes/maningredients.html", 
  "Irecipes/mandescription.html", 
  "Irecipes/mandirections.html"
);
pes= new Recipe(
  "Pesto Pasta",
  "Recipe by: Lauren @Allrecipes.com", 
  "https://www.cookingclassy.com/wp-content/uploads/2022/02/pesto-pasta-1.jpg", 
  "Irecipes/pesingredients.html", 
  "Irecipes/pesdescription.html", 
  "Irecipes/pesdirections.html"
);

// When window first loads / clicking functions
window.onload = function() {
  
  //Japanese dishes
  document.querySelector("#katsu").onclick = function() {
    redvelvet.displayRecipe();
  }
  document.querySelector("#egg").onclick = function() {
    egg.displayRecipe();
  }
  document.querySelector("#miso").onclick = function() {
    miso.displayRecipe();
  }
  
  //French dishes
  document.querySelector("#onion").onclick = function() {
    onion.displayRecipe();
  }
  document.querySelector("#sucree").onclick = function() {
    sucree.displayRecipe();
  }
  document.querySelector("#cord").onclick = function() {
    cord.displayRecipe();
  }
  
  //German dishes
  document.querySelector("#sau").onclick = function() {
    sau.displayRecipe();
  }
  document.querySelector("#apple").onclick = function() {
    apple.displayRecipe();
  }
  document.querySelector("#pork").onclick = function() {
    pork.displayRecipe();
  }

  //Mexican dishes
  document.querySelector("#quin").onclick = function() {
    quin.displayRecipe();
  }
  document.querySelector("#hot").onclick = function() {
    hot.displayRecipe();
  }
  document.querySelector("#cald").onclick = function() {
    cald.displayRecipe();
  }
  
  //Italion Recipes
  document.querySelector("#pol").onclick = function() {
    pol.displayRecipe();
  }
  document.querySelector("#man").onclick = function() {
    man.displayRecipe();
  }
  document.querySelector("#pes").onclick = function() {
    pes.displayRecipe();
  }
  
}