import React from "react";
import "./EmptyView.css";
import useUnit from "../../Hook/useUnit";

const EmptyView = () => {
  const { categoriaActual, checkBox } = useUnit();
  return (
    <div className="emptyView-wrap">
      <div className="sectionSearch">
        <div>
          <h2>¡Ups! No hemos encontrado la referencia</h2>
          
        </div>
      </div>

      <div className="imgSearch">
        <img src="./NoFoundSearch.svg" alt="" />
      </div>
    </div>
  );
};

export default EmptyView;
