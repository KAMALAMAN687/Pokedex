import React, { useEffect, useState } from "react";
import Search from "../Search/Search";
import "./Pokedex.css";
import PokemonList from "../PokemonList/PokemonList";
import PokemonDetails from "../PokemonDetails/PokemonDetails";

function Pokedex() {
  const [searchTerm, setSearchterm] = useState("");
  useEffect(() => {}, [searchTerm]);
  return (
    <div className="pokedex-wrapper">
      <h1 id="pokedex-heading">Pokedex</h1>
      <Search updateSearchTerm={setSearchterm} />

      {!searchTerm ? (
        <PokemonList />
      ) : (
        <PokemonDetails key={searchTerm} pokemonName={searchTerm} />
      )}
    </div>
  );
}

export default Pokedex;
