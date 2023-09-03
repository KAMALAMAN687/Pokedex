import axios from "axios";
import React, { useEffect, useState } from "react";
import usePokemonList from "./usePokemonList";

function usePokemonDetails(id, pokemonName) {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);
  async function downloadPokemon() {
    setLoading(true);
    let response;
    if (pokemonName) {
      response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
    } else {
      response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    }

    const pokemonOfSameTypes = await axios.get(
      `https://pokeapi.co/api/v2/type/${
        response.data.types ? response.data.types[0].type.name : " "
      }`
    );
    console.log("s", pokemonOfSameTypes);
    setPokemon({
      name: response.data.name,
      image: response.data.sprites.other.dream_world.front_default,
      weight: response.data.weight,
      height: response.data.height,
      types: response.data.types.map((t) => t.type.name),
      similarPokemons: pokemonOfSameTypes.data.pokemon.slice(0, 10),
    });

    setPokemonListState({
      ...pokemonListState,
      type: response.data.types ? response.data.types[0] : "fire",
    });

    setLoading(false);
    console.log(pokemon);
  }

  const [pokemonListState, setPokemonListState] = useState({});

  useEffect(() => {
    downloadPokemon();
  }, []);

  return [pokemon, loading];
}

export default usePokemonDetails;
