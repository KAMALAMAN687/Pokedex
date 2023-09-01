import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PokemonDetails.css";
function PokemonDetails() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  async function downloadPokemon() {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setPokemon({
      name: response.data.name,
      image: response.data.sprites.other.dream_world.front_default,
      weight: response.data.weight,
      height: response.data.height,
      types: response.data.types.map((t) => t.type.name),
    });
    console.log(pokemon);
  }
  useEffect(() => {
    downloadPokemon();
  }, []);

  return (
    <div className="full">
      <Link to="/">
        <h1 id="pokedex-detail-heading">Pokedex</h1>
      </Link>

      <div className="detail-wrapper">
        <div className="detail-image">
          <img src={pokemon.image} alt="Not Able To Load Image" />
        </div>
        <div className="detail">
          <h1 className="detail-name">{pokemon.name}</h1>
          <h1 className="detail-height">Height : {pokemon.height}</h1>
          <h1 className="detail-weight">Weight : {pokemon.weight}</h1>
          <div className="type-div">
            {pokemon.types &&
              pokemon.types.map((e) => (
                <div key={e} className="type">
                  {e}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;
