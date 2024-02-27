import React from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

const SearchBar = ({ value, changeInput }) => {
  return (
    <div className="searchBar-wrap">
      <FaSearch className="searchBar-icon" />
      <input
        type="text"
        placeholder="Buscando Multimetro..."
        value={value}
        onChange={changeInput}
      />
    </div>
  );
};

export default SearchBar;
