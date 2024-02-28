import React from "react";
import Product from "../Product/Product";
import "./ListProduct.css";
import useUnit from "../../Hook/useUnit";
import { ImFilter } from "react-icons/im";
import { FaFilterCircleXmark } from "react-icons/fa6";

const ListProducts = ({ list }) => {
  const { compareProduct } = useUnit();
  return (
    <div className="list-wrap">
      {list.map((ProductItem) => {
        const isProductInCompare = compareProduct.some(
          (item) => item.id == ProductItem.id
        );
        const BtnComparar = isProductInCompare ? (
          <FaFilterCircleXmark className="FilterCircle" />
        ) : (
          <ImFilter className="UnFiltered" />
        );
        return (
          <Product
            key={ProductItem.id}
            ProductItem={ProductItem}
            BtnComparar={BtnComparar}
          />
        );
      })}
    </div>
  );
};

export default ListProducts;
