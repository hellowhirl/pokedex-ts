import * as React from "react";
import { Pokemon } from "../interfaces/pokemon";

export interface PokemonListingProps {
  singlePokemon: Pokemon;
  onRemove: Function;
  formatIndexNumber: Function;
}

const imgUrl = "https://pokeres.bastionbot.org/images/pokemon/";

const PokemonListing: React.SFC<PokemonListingProps> = (
  props: React.PropsWithChildren<PokemonListingProps>
) => {
  return (
    <div className="pokemonListing">
      <div className="imageContainer">
        <img
          alt={props.singlePokemon.name}
          src={imgUrl + props.singlePokemon.id + ".png"}
        />
      </div>
      <div className="basicInfo">
        <div className="pokemonName">{props.singlePokemon.name}</div>
        <div className="pokemonId">
          #{props.formatIndexNumber(props.singlePokemon.id)}
        </div>
      </div>
      <ul className="pokemonTypes">
        {props.singlePokemon.types.map((item, index) => (
          <li key={index} className="pokemonSingleType">
            {item.type.name}
          </li>
        ))}
      </ul>
      <div className="columnEnd">
        <button
          className="closeButton"
          onClick={() => props.onRemove(props.singlePokemon)}
        >
          <div className="circle">
            <div className="before"></div>
            <div className="after"></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default PokemonListing;
