import * as React from "react";
import "./App.css";
import Results from "./components/results";
import Search from "./components/search";
import { fetchPokemon } from "./services/pokemonApiService";
import { Pokemon } from "./interfaces/pokemon";
export interface AppState {
  pokemons: Array<any>;
  searchWord: string;
  filteredPokemons: Array<any>;
}

class App extends React.Component<any, AppState> {
  state = { pokemons: [], searchWord: "", filteredPokemons: [] };

  handleSearch = (query: string) => {
    this.setState({ searchWord: query });
  };

  getQueriedPokemons = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const { pokemons: allPokemons, searchWord } = this.state;

    const searched = allPokemons.filter((pokemon: Pokemon) => {
      // ignore esLint warning: this is a use case for loose equals operator ==
      // eslint-disable-next-line
      return searchWord == pokemon.id || pokemon.name.includes(searchWord);
    });

    this.setState({ filteredPokemons: searched });
  };

  removePokemon = (selectedPokemon: Pokemon) => {
    const filteredPokemons = [...this.state.filteredPokemons];
    const index = filteredPokemons.findIndex((currentdPokemon: Pokemon) => {
      return currentdPokemon.id === selectedPokemon.id;
    });
    filteredPokemons.splice(index, 1);
    this.setState({ filteredPokemons });
  };

  formatIndexNumber = (indexNumber: string) => {
    let parsed = parseInt(indexNumber);

    if (parsed < 10) {
      const arr = parsed.toString(10).split("").map(Number);
      arr.splice(0, 0, 0, 0);
      return arr.join("");
    } else if (parsed < 100) {
      const arr = parsed.toString(10).split("").map(Number);
      arr.unshift(0);
      return arr.join("");
    } else return parsed;
  };

  async componentDidMount() {
    this.setState({ pokemons: await fetchPokemon() });
    this.setState({ filteredPokemons: this.state.pokemons });
  }

  render() {
    return (
      <div className="container">
        <h1>Find your favorite Pokemon</h1>
        <Search
          value={this.state.searchWord}
          onChange={this.handleSearch}
          onSubmit={this.getQueriedPokemons}
        />
        <Results
          pokemons={this.state.filteredPokemons}
          onRemove={this.removePokemon}
          formatIndexNumber={this.formatIndexNumber}
        />
      </div>
    );
  }
}

export default App;
