import React from "react";
import './Product.css';
const Product = ({ProductItem})=>  {
   const { ImagenSrc, Modelo, Botones, Aplicacion } = ProductItem;
  return (
    <div className="listItem-wrap">
      <img src={ImagenSrc} alt={Modelo} />
      <div>
        <h4>{Modelo}</h4>
        <div className="moreInfo">
          <div className="Buttons">
          {Object.entries(Botones).map(([key,item]) => (
            <a key={key} target="_blank" href={item.src}>{item.title}</a>
          ))}
          </div>
          <p>{Aplicacion}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
