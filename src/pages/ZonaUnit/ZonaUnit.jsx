import React, { useState, useEffect } from "react";
import ListProducts from "../../components/ListProduct/ListProducts";
import Unit from "../../data/Unit";
import "./ZonaUnit.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import EmptyView from "../../components/EmptyView/EmptyView";
import SideBar from "../../components/SideBar/SideBar";
import useUnit from "../../Hook/useUnit";
import Header from "../../components/Header/Header";
import { TbFilterSearch } from "react-icons/tb";
import { IoExit } from "react-icons/io5";

const ZonaUnit = () => {
  const { categoriaActual, mediciones, checkBox } = useUnit();
  const [searchInput, setSearchInput] = useState("");
  const [resultsFound, setResultsFound] = useState(true);
  const [filteredUnit, setFilteredUnit] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);

  const applyFilters = () => {
    let updatedList = Unit;

    if (categoriaActual.id > 0) {
      updatedList = updatedList.filter(
        (producto) => producto.Category === categoriaActual.nombre
      );
    }
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.Modelo.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }
    if (checkBox.length > 0) {
      updatedList = updatedList.filter((item) =>
        checkBox.every((medicion) => item.Medicion.includes(medicion))
      );
      console.log(updatedList);
    }

    setFilteredUnit(updatedList);
    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    console.log(checkBox);
    applyFilters();
  }, [searchInput, categoriaActual, mediciones, checkBox]);


  return (
    <div className="home">
      <Header
        children={
          <SearchBar
            value={searchInput}
            changeInput={(e) => setSearchInput(e.target.value)}
          />
        }
        filter={<TbFilterSearch onClick={() => setShowSidebar(!showSidebar)} className="filterSearch"/>}
      />

      <div className="home_panelList-wrap">
        <div className={`home_panel-wrap ${showSidebar ? 'show' : 'hide'}`}>
          <div className="ClosePanel" onClick={() => setShowSidebar(false)} ><IoExit /></div>
          
          <SideBar />
        </div>
        <div className="home_list-wrap">
          {resultsFound ? <ListProducts list={filteredUnit} /> : <EmptyView />}
        </div>
      </div>
    </div>
  );
};

export default ZonaUnit;
