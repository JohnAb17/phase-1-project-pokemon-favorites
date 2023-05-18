console.log("index.js is working!")

fetch("https://johnab17.github.io/phase-1-project-pokemon-favorites/")
.then((response) => response.json())
.then((pokemons) => {
    const container = document.querySelector("ul#pokemonList");
    pokemons.forEach(pokemon => {
        //name , description, type
        //create element to hold the name 
        //create element to hold description, p in html
        //create element to holf type
        //create a list item (li) to hold the name and description
        //append elements to list item
        //append list item to container
        

    })

});