console.log("index.js is working!")

fetch("https://johnab17.github.io/phase-1-project-pokemon-favorites/")
.then(response => response.json())
.then(pokemons => {
    console.log(pokemons);

    pokemons.data.forEach(item => {
        console.log(item.id);
        console.log(item.name);
        console.log(item.image);
        console.log(item.type);
        console.log(item.description);
        
        //create elemnt to holf id
        //create element to hold the name 
        //create element to hold img
        //create element to holf type
        //create element to hold description, p in html

        //create a list item (li) to hold the name and description
        //append elements to list item
        //append list item to container
        
        
    })

});

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const searchQuery = searchInput.value;

    searchInput.value = '';

});

