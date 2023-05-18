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

    });


});



    

        pokemonList.textContent = '';

        filteredPokemons.forEach(pokemons => {
            const container = document.createElement('div');

            const pokemonName = document.createElement('h2');
            pokemonName.textContent = pokemons.name;

            const pokemonImage = document.createElement('img');
            pokemonImage.src = pokemons.image;
            pokemonImage.alt = pokemons.name;

            const pokemonType = document.createElement('p');
            pokemonType.textContent = `Type: ${pokemons.type}`;

            const pokemonDescription = document.createElement('p');
            pokemonDescription.textContent = pokemons.description;

            container.appendChild(pokemonName);
            container.appendChild(pokemonImage);
            container.appendChild(pokemonType);
            container.appendChild(pokemonDescription);

            document.getElementById('search-results').appendChild(container);

            // const listItem = document.createElement('li');
            // listItem.textContent = pokemons.name;
            // pokemonList.appendChild(listItem);
        });
     });

    searchInput.value = '';

}

