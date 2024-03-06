import React from "react";
import useUnit from "../../Hook/useUnit";
import Category from "../Category/Category";
import "./SideBar.css";
import CheckBox from "../CheckBox/CheckBox";

function SideBar() {
  const { categorias, mediciones, Resetfilter } = useUnit();
  return (
    <div className="containerSiderBar">
      <h1 className="primaryText">Categorias...</h1>

      <div className="sectionCategorias">
        {categorias.map((categoria) => (
          <Category key={categoria.id} Category={categoria} />
        ))}
      </div>

      <div>
        <CheckBox mediciones={mediciones} />
      </div>
    </div>
  );
}

export default SideBar;
