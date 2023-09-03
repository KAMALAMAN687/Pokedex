import axios from "axios";
import React, { useEffect, useState } from "react";

function usePokemonList() {
  const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon";
  const [pokemonListState, setPokemonListState] = useState({
    POKEDEX_URL: "https://pokeapi.co/api/v2/pokemon",
    pokemonList: [],
    isLoading: true,
    nexturl: "",
    prevurl: "",
    showBtn: "",
  });

  async function downloadPokemons() {
    setPokemonListState((state) => ({
      ...state,
      isLoading: true,
      showBtn: false,
    }));
    const response = await axios.get(pokemonListState.POKEDEX_URL); //this url downloads list of 20 pokemons.
    const pokemonResults = response.data.results; //we get the array of pokemons from result.
    setPokemonListState((state) => ({
      ...state,
      nexturl: response.data.next,
      prevurl: response.data.previous,
    }));

    const pokemonResultPromise = pokemonResults.map((pokemon) =>
      axios.get(pokemon.url)
    );
    const pokemonData = await axios.all(pokemonResultPromise);
    //console.log(pokemonData);
    const res = pokemonData.map((pokeData) => {
      const pokemon = pokeData.data;
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other.dream_world.front_default,
        types: pokemon.types,
      };
    });
    setPokemonListState((state) => ({
      ...state,
      pokemonList: res,
      isLoading: false,
      showBtn: true,
    }));
  }

  useEffect(() => {
    downloadPokemons();
  }, [pokemonListState.POKEDEX_URL]);

  return [pokemonListState, setPokemonListState];
}

export default usePokemonList;
