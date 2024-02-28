import React from "react";
import useUnit from "../../Hook/useUnit";
import "./ModalProducto.css";
import ListProducts from "../ListProduct/ListProducts";
import DataTable from "react-data-table-component";
import { columns, features } from "../../data/Columns";
const paginationComponentOptions = {
  rowsPerPageText: "Filas por página",
  rangeSeparatorText: "de",
  selectAllRowsItem: true,
  selectAllRowsItemText: "Todos",
};

const ModalProducto = () => {
  const { cleanProductos, compareProduct } = useUnit();
  return (
    <div className="ContainerPadre">
      <div className="closeModal" onClick={() => cleanProductos()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div className="ModalContainer">
        <div>
          <h3>Mediciones</h3>
          <DataTable
            columns={columns}
            data={compareProduct}
            pagination
            paginationComponentOptions={paginationComponentOptions}
            fixedHeader
            fixedHeaderScrollHeight="400px"
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
            fixedHeaderScrollHeight="400px"
            highlightOnHover
            pointerOnHover
          />
        </div>
      </div>
    </div>
  );
};

export default ModalProducto;
