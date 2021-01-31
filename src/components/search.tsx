import * as React from "react";

export interface SearchProps {
  value: string;
  onChange: Function;
  onSubmit(event: React.MouseEvent<HTMLButtonElement>): void;
}

const Search: React.SFC<SearchProps> = (
  props: React.PropsWithChildren<SearchProps>
) => {
  return (
    <div className="searchBar">
      <div className="searchFormWrapper">
        <form>
          <div className="magnifying-glass"></div>
          <input
            value={props.value}
            className="inputField"
            placeholder={"Search by Pokedex ID"}
            onChange={(e) => props.onChange(e.currentTarget.value)}
          />
          <button className="searchButton" onClick={props.onSubmit}>
            SEARCH
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
