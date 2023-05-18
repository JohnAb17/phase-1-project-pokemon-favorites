console.log("index.js is working!")

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const pokemonList = document.getElementById('pokemonList');

fetch("db.json")
.then(response => response.json())
.then(data => {
    const pokemons = data.pokemons;

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const searchQuery = searchInput.value.toLowerCase;

        const filteredPokemons = pokemons.filter(pokemon =>
            pokemon.name.toLowerCase().includes(searchQuery)
        );
        
        displayPokemons(filteredPokemons);
    });

    displayPokemons(pokemons);
});

function displayPokemons(pokemons) {
    pokemonList.textContent = '';

    pokemons.forEach(pokemons => {
            const card = document.createElement('div');
            card.classList.add('pokemon-card');

            const name = document.createElement('h2');
            name.classList.add('pokemon-name');
            name.textContent = pokemons.name;

            const image = document.createElement('img');
            image.classList.add('pokemon-image');
            image.src = pokemons.image;
            image.alt = pokemons.name;

            const type = document.createElement('p');
            pokemonType.textContent = `Type: ${pokemons.type}`;

            const description = document.createElement('p');
            description.classList.add('pokemon-description');
            description.textContent = pokemons.description;

            card.appendChild(name);
            card.appendChild(image);
            card.appendChild(type);
            card.appendChild(description);

            pokemonList.appendChild(card);

            
        });
}

    

