console.log("index.js is working!")

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const pokemonCard = document.getElementById('pokemonCard');

fetch("db.json")
.then(response => response.json())
.then(data => {
    const pokemons = data.pokemons;

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const searchQuery = searchInput.value.toLowerCase();

        const findPokemons = pokemons.find(pokemon =>
            pokemon.name.toLowerCase().includes(searchQuery)
        );
        
        displayPokemons(findPokemons);
    });

    displayPokemons(null);
});

function displayPokemons(pokemon) {
    pokemonCard.textContent = '';

    if (pokemon) {
            const card = document.createElement('div');
            card.classList.add('pokemon-card');

            const image = document.createElement('img');
            image.classList.add('pokemon-image');
            image.src = pokemon.image;
            image.alt = pokemon.name;

            const name = document.createElement('h2');
            name.classList.add('pokemon-name');
            name.textContent = pokemon.name;

            const type = document.createElement('p');
            type.classList.add('pokemon-type');
            type.textContent = `Type: ${pokemon.type}`;

            const description = document.createElement('p');
            description.classList.add('pokemon-description');
            description.textContent = pokemon.description;

            card.appendChild(name);
            card.appendChild(image);
            card.appendChild(type);
            card.appendChild(description);

            pokemonCard.appendChild(card);

    } else {
        const message = document.createElement('p');
        message.textContent = 'No Pokemon Found, Remember only Eeveelutions here!';
        pokemonCard.appendChild(message);
    }
}


    

