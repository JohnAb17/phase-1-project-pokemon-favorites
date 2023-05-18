console.log("index.js is working!")

fetch("http://localhost:3000/pokemons")
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
const pokemonList = document.getElementById('pokemonList');

searchForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const searchQuery = searchInput.value;

    fetch('db.json')
    .then(response => response.json())
    .then(data => {
        const filteredPokemons = data.pokemons.filter(pokemon =>
            pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        pokemonList.textContent = '';

        filteredPokemons.forEach(pokemon => {
            const container = document.createElement('div');

            const pokemonName = document.createElement('h2');
            pokemonName.textContent = pokemon.name;

            const pokemonImage = document
            const listItem = document.createElement('li');
            listItem.textContent = pokemon.name;
            pokemonList.appendChild(listItem);
        });
     });

    searchInput.value = '';

});

