import React, { useEffect, useState } from "react";
import Pokemon from "../Pokemon/Pokemon.jsx";

import axios from "axios";
import "./PokemonList.css";
import Loader from "../Loader/Loader.jsx";
import usePokemonList from "../../hooks/usePokemonList.js";

function PokemonList() {
  const [pokemonListState, setPokemonListState] = usePokemonList();
  return (
    <div className="pokemon-list-wrapper">
      <div className="Pokeheading">Pokemon List</div>
      <div className="pokemon-wrapper">
        {pokemonListState.isLoading ? (
          <Loader />
        ) : (
          pokemonListState.pokemonList.map((e) => (
            <Pokemon name={e.name} image={e.image} key={e.id} id={e.id} />
          ))
        )}
      </div>
      <div className="buttons">
        {pokemonListState.showBtn ? (
          <div className="buttons">
            <button
              disabled={pokemonListState.prevurl == null}
              onClick={() => {
                setPokemonListState({
                  ...pokemonListState,
                  POKEDEX_URL: pokemonListState.prevurl,
                });
              }}
            >
              Previous
            </button>
            <button
              disabled={pokemonListState.nexturl == null}
              onClick={() => {
                setPokemonListState({
                  ...pokemonListState,
                  POKEDEX_URL: pokemonListState.nexturl,
                });
              }}
            >
              Next
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default PokemonList;
