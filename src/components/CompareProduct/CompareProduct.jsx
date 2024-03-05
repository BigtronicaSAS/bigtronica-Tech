import React from "react";
import useUnit from "../../Hook/useUnit";
import "./CompareProduct.css";
import DataTable  from "react-data-table-component";
import { columns, features } from "../../data/Columns";
import { Link } from "react-router-dom";
import { IoCaretBackCircleSharp } from "react-icons/io5";

const paginationComponentOptions = {
  rowsPerPageText: "Filas por página",
  rangeSeparatorText: "de",
  selectAllRowsItem: true,
  selectAllRowsItemText: "Todos",
};



const CompareProduct = () => {
  const { cleanProductos, compareProduct } = useUnit();
  return (
    <div className="ContainerPadre">
        <Link to={"/Unit"} className="goBack" onClick={() => cleanProductos()}>
          <p>
            Regresar{" "}
            <span>
              <IoCaretBackCircleSharp />
            </span>
          </p>
        </Link>


      <div className="DatatableContainer">
        <div>
          <h3>Mediciones</h3>
          <DataTable
            columns={columns}
            data={compareProduct}
            pagination
            paginationComponentOptions={paginationComponentOptions}
            fixedHeader
            highlightOnHover
            pointerOnHover
          />
        </div>
        <div>
          <h3>Características</h3>
          <DataTable
            columns={features}
            data={compareProduct}
            pagination
            paginationComponentOptions={paginationComponentOptions}
            fixedHeader
            highlightOnHover
            pointerOnHover
          />
        </div>
      </div>
    </div>
  );
};

export default CompareProduct;
