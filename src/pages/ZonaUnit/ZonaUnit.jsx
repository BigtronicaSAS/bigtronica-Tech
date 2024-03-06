import React, { useState, useEffect } from "react";
import ListProducts from "../../components/ListProduct/ListProducts";
import "./ZonaUnit.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import EmptyView from "../../components/EmptyView/EmptyView";
import SideBar from "../../components/SideBar/SideBar";
import useUnit from "../../Hook/useUnit";
import Header from "../../components/Header/Header";
import { TbFilterSearch } from "react-icons/tb";
import { LuSquareEqual } from "react-icons/lu";
import { Link } from "react-router-dom";
import { FaWandMagicSparkles } from "react-icons/fa6";
import Driver from "../../utils/Driver";
const ZonaUnit = () => {
  const { productos, categoriaActual, mediciones, checkBox, compareProduct } =
    useUnit();
  const [searchInput, setSearchInput] = useState("");
  const [resultsFound, setResultsFound] = useState(true);
  const [filteredUnit, setFilteredUnit] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  let Compare = compareProduct.length !== 0;

  const DriverRun =()=>{Driver()}

  const applyFilters = () => {
    let updatedList = productos;

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
    }

    setFilteredUnit(updatedList);
    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    setFilteredUnit();
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
        filter={
          <TbFilterSearch
            onClick={() => setShowSidebar(!showSidebar)}
            className="filterSearch"
          />
        }
      />

      <div className="home_panelList-wrap">
        <div className={`home_panel-wrap ${showSidebar ? "show" : "hide"}`}>
          <SideBar />
          <div
            className="ClosePanel"
            onClick={() => setShowSidebar(false)}
          ></div>
        </div>
        <div className="home_list-wrap">
          {resultsFound ? <ListProducts list={filteredUnit} /> : <EmptyView />}
        </div>
      </div>
      {Compare ? (
        <Link to={"/Comparar"} className="BotonComparar">
          <LuSquareEqual /> Comparar Productos
        </Link>
      ) : <div className="StartTour" onClick={DriverRun}><FaWandMagicSparkles />Iniciar Tour</div>}
    </div>
  );
};

export default ZonaUnit;
