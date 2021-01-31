import * as React from "react";
import PokemonListing from "./pokemonListing";
import { Pokemon } from "../interfaces/pokemon";

export interface ResultsProps {
  pokemons: Array<any>;
  onRemove: Function;
  formatIndexNumber: Function;
}

const Results: React.SFC<ResultsProps> = (
  props: React.PropsWithChildren<ResultsProps>
) => {
  return (
    <div className="resultsPage">
      {props.pokemons.map((pokemon: Pokemon) => (
        <PokemonListing
          singlePokemon={pokemon}
          key={pokemon.id}
          onRemove={props.onRemove}
          formatIndexNumber={props.formatIndexNumber}
        />
      ))}
      {props.pokemons.length === 0 ? (
        <div className="notFound">
          Sorry, your search did not match any Pokemon
        </div>
      ) : null}
    </div>
  );
};

export default Results;
