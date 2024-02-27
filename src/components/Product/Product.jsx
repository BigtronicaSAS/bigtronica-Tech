import React from "react";
import "./Product.css";
import useUnit from "../../Hook/useUnit";
const Product = ({ ProductItem }) => {
  const {CompareProducts} = useUnit();
  const { ImagenSrc, Modelo, Botones, Aplicacion } = ProductItem;
  return (
    <div className="listItem-wrap">
      <div className="checkbox productCheck ">
        <input type="checkbox" onChange={() => CompareProducts(ProductItem)} />
      </div>
      <img src={ImagenSrc} alt={Modelo} />
      <div>
        <h4>{Modelo}</h4>
        <div className="moreInfo">
          <div className="Buttons">
            {Object.entries(Botones).map(([key, item]) => (
              <a key={key} target="_blank" href={item.src}>
                {item.title}
              </a>
            ))}
          </div>
          <p>{Aplicacion}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
