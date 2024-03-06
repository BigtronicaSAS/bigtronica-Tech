import React from "react";
import useUnit from "../../Hook/useUnit";
import "./CompareProduct.css";
import DataTable from "react-data-table-component";
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
      <div></div>
      <Link to={"/Unit"} className="goBack" onClick={() => cleanProductos()}>
        <p>
          <IoCaretBackCircleSharp />
        </p>
        <p>Regresar </p>
      </Link>
      <div className="ContainerInfo">
        <p>Es probable que no puedas visualizar toda la información debido al tamaño de tu dispositivo. Te sugerimos desplazarte y utilizar la barra de desplazamiento de la tabla para acceder a más detalles.
        </p>
      </div>
      <div className="DatatableContainer">
        <div>
          <h3>Mediciones:</h3>
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
          <h3>Características:</h3>
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

export default CompareProduct;
