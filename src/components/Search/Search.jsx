import React from "react";
import "./Search.css";
function Search() {
  return (
    <div className="search-wrapper">
      <input
        type="text"
        id="pokemon-name-search"
        placeholder="Enter Pokemon Name"
      />
    </div>
  );
}

export default Search;
