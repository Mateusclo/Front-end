const offset = 1;
const limit = 11;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonHtml(pokemon){
    return`
        <li>
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        <li class="type">Glass</li>
                        <li class="type">Poison</li>
                    </ol>

                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" 
                    alt="${pokemon.name}">
                
                </div> 
            </li>
        `
}
const pokemonList = document.getElementById('pokeList')

pokeApi.getPokemons().then((pokemon)=> {

    const listItens = []

    for (let i = 0; i < pokemon.length; i++) {
        const pokemons = pokemon[i];
        listItens.push(convertPokemonHtml(pokemons))
        
    }
    console.log(listItens)

    pokemonList.innerHTML += convertPokemonHtml(pokemons)
})

