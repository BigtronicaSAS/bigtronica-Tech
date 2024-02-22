import React from "react";
import Product from "../Product/Product";
import './ListProduct.css'

const ListProducts = ({ list }) => {
  return (
    <div className='list-wrap'>
      {list.map((ProductItem) => (
        <Product key={ProductItem.id} ProductItem={ProductItem} />
      ))}
    </div>
  );
};

export default ListProducts;
