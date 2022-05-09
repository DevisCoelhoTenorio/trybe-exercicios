// Pokémons: ditto, bulbasaur, charmander, squirtle, dratini, pikachu

function append(data) {
    const ul = document.querySelector('ul');
  
    const li = document.createElement('li');
    const divNome = document.createElement('div');
    const divImage = document.createElement('div');
    const img = document.createElement('img');
  
    divNome.innerHTML = data.name;
    img.src = data.imageUrl;
    divImage.appendChild(img);
  
    li.appendChild(divNome);
    li.appendChild(divImage);
  
    ul.appendChild(li);
  }
  
  function extractNameAndImage(pokemonData) {
    return {
        name: pokemonData.name,
        imageUrl: pokemonData.sprites.front_default,
    };
  }
  
  async function fetchPokemon(nomePokemon) {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`);
    const dados = await resposta.json();
    const pokemon = extractNameAndImage(dados);
  
    append(pokemon);
  
  };
  
  async function requestPokemons() {
    await fetchPokemon('charmander');
    await fetchPokemon('pikachu');
    await fetchPokemon('ditto');
    await fetchPokemon('bulbasaur');
    await fetchPokemon('squirtle');
  
  }
  
  window.onload = requestPokemons;