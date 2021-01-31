const apiEndpoint = "https://pokeapi.co/api/v2/pokemon?limit=151";

interface PokemonApiItem {
  name: string;
  url: string;
}

const fetchPokemon = async () => {
  const response = await fetch(apiEndpoint);
  const data = await response.json();

  const output = data.results.map((pokemon: PokemonApiItem) => {
    return populatePokemonData(pokemon);
  });

  return Promise.all(output);
};

const populatePokemonData = async (pokemon: PokemonApiItem) => {
  let url = pokemon.url;

  const response = await fetch(url);
  const data = await response.json();

  return data;
};

export { fetchPokemon };
