import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PokemonDetails.css";
import Loader from "../Loader/Loader";
import usePokemonDetails from "../../hooks/usePokemonDetails";
function PokemonDetails() {
  const { id } = useParams();
  const [pokemon, loading] = usePokemonDetails(id);
  return (
    <div className="full">
      <Link to="/">
        <h1 id="pokedex-detail-heading">Pokedex</h1>
      </Link>
      {loading ? (
        <Loader />
      ) : (
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
      )}

      {pokemon.types && pokemon.similarPokemons && (
        <div className="more-types">
          <h1 className="heading">More {pokemon.types[0]} type pokemons</h1>
          <ul className="ullist-div">
            {pokemon.similarPokemons.map((e) => (
              <li className="li-div" key={e.pokemon.id}>
                {e.pokemon.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PokemonDetails;
