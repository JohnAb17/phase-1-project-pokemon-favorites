// console.log("index.js is working!")


// const searchForm = document.getElementById('search-form');
// const searchInput = document.getElementById('search-input');
// const pokemonCard = document.getElementById('pokemonCard');
// const randomButton = document.getElementById('random-button');


// function handleSearch(event, pokemons) {
//     event.preventDefault();          
//     const searchQuery = searchInput.value.toLowerCase();
//     const findPokemons = pokemons.find(pokemon =>
//       pokemon.name.toLowerCase().includes(searchQuery)
//     );
          
//     displayPokemon(findPokemons);
// }

// const displayPokemon = pokemon => {
//     pokemonCard.textContent = '';

//     if (pokemon) {
//             const card = document.createElement('div');
//             card.classList.add('pokemon-card');

//             const image = document.createElement('img');
//             image.classList.add('pokemon-image');
//             image.src = pokemon.image;
//             image.alt = pokemon.name;

//             const name = document.createElement('h2');
//             name.classList.add('pokemon-name');
//             name.textContent = pokemon.name;

//             const type = document.createElement('p');
//             type.classList.add('pokemon-type');
//             type.textContent = `Type: ${pokemon.type}`;

//             const description = document.createElement('p');
//             description.classList.add('pokemon-description');
//             description.textContent = pokemon.description;

//             card.appendChild(name);
//             card.appendChild(image);
//             card.appendChild(type);
//             card.appendChild(description);

//             pokemonCard.appendChild(card);

//     } else {
//         const message = document.createElement('p');
//         message.textContent = 'No Pokemon Found, Remember only Eeveelutions here!';
//         pokemonCard.appendChild(message);
//     }
// }

// function getRandomPokemon(pokemons) {
//     const randomIndex = Math.floor(Math.random() * pokemons.length);
//     return pokemons[randomIndex];
// }

// fetch("db.json")
//   .then(response => response.json())
//   .then(data => {
//     pokemons = data.pokemons;

//     searchForm.addEventListener('submit', handleSearch);

//     searchInput.addEventListener('keydown', event => {
//       if (event.key === 'Enter') {
//         handleSearch(event);
//       }
//     });

//     randomButton.addEventListener('click', () => {
//       const randomPokemon = getRandomPokemon(pokemons);
//       displayPokemon(randomPokemon);
//     });
// });   


const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const pokemonList = document.getElementById('pokemonList');
//grabs all the data we need from our objects in db.json
fetch('db.json')
  .then(response => response.json())
  .then(data => {
    const pokemons = data.pokemons;

    searchForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const searchQuery = searchInput.value.toLowerCase();

      const filteredPokemons = pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchQuery)
      );

      displayPokemons(filteredPokemons);
    });

    displayPokemons(pokemons);
  });

function displayPokemons(pokemons) {
  pokemonList.innerHTML = '';
//creating all the info for our cards to be displayed on our webapp
  pokemons.forEach(pokemon => {
    const card = document.createElement('div');
    card.classList.add('pokemon-card');

    const image = document.createElement('img');
    image.classList.add('pokemon-image');
    image.src = pokemon.image;
    image.alt = pokemon.name;
    // used to enlarge an image when hovered over
    image.addEventListener('mouseover', function() {
        image.classList.add('enlarged');
    });
    image.addEventListener('mouseout', function() {
        image.classList.remove('enlarged');
    });

    const name = document.createElement('h2');
    name.classList.add('pokemon-name');
    name.textContent = pokemon.name;

    const type = document.createElement('p');
    type.classList.add('pokemon-type');
    type.textContent = `Type: ${pokemon.type}`;

    const description = document.createElement('p');
    description.classList.add('pokemon-description');
    description.textContent = pokemon.description;

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(type);
    card.appendChild(description);

    pokemonList.appendChild(card);
  });
}

// const toggleButton = document.getElementById('toggleButton');
// const container = document.querySelector('container');

// toggleButton.addEventListener('click', function(){
//     container.classList.toggle('dark-mode')
// })