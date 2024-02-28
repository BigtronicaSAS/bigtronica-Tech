import "./Product.css";
import useUnit from "../../Hook/useUnit";
const Product = ({ ProductItem, BtnComparar }) => {
  const { CompareProducts } = useUnit();
  const { ImagenSrc, Modelo, Botones, Aplicacion } = ProductItem;
  return (
    <div className="listItem-wrap">
      <div className="checkbox productCheck ">
        <div onClick={() => CompareProducts(ProductItem)}>
          {BtnComparar}
        </div>
      </div>
      <div><img src={ImagenSrc} alt={Modelo} /></div>
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
