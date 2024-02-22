import React, { useState, useEffect } from "react";
import ListProducts from "../../components/ListProduct/ListProducts";
import Unit from "../../data/Unit";
import "./ZonaUnit.css";
import SearchBar from "../../components/SearchBar/SearchBar";

const ZonaUnit = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredUnit, setFilteredUnit] = useState(Unit); 

  const applyFilters = () => {
    let updatedList = Unit;
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.Modelo.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }
    setFilteredUnit(updatedList);
  };

  useEffect(() => {
    applyFilters();
  }, [searchInput]);
  return (
    <div className="home">
      <SearchBar
        value={searchInput}
        changeInput={(e) => setSearchInput(e.target.value)}
      />
      <div className="home_panelList-wrap">
        <div className="home_panel-wrap"></div>
        <div className="home_list-wrap">
          <ListProducts list={filteredUnit} />
        </div>
      </div>
    </div>
  );
};

export default ZonaUnit;
