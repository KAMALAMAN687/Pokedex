import React from "react";
import "./Pokemon.css";
import { Link } from "react-router-dom";
function Pokemon({ name, image, id }) {
  return (
    <div className="onediv">
      <Link to={`/pokemon/${id}`} className="link">
        <div className="Pokename">{name}</div>
        <div className="Pokimage">
          <img
            className="Pokeimage"
            src={image}
            alt="Image Not Available At This Moment"
          />
        </div>
      </Link>
    </div>
  );
}

export default Pokemon;
