import "./Product.css";
import useUnit from "../../Hook/useUnit";
const Product = ({ ProductItem, BtnComparar }) => {
  const { CompareProducts } = useUnit();
  const { ImagenSrc, Modelo, Botones, Aplicacion } = ProductItem;
  return (
    <div className="listItem-wrap">
      <div className="checkbox productCheck ">
        <div onClick={() => CompareProducts(ProductItem)}>{BtnComparar}</div>
      </div>
      <div>
        <img src={ImagenSrc} alt={Modelo} />
      </div>
      <div>
        <h4>{Modelo}</h4>
        <div className="moreInfo">
          <div className="DropdownMenu">
            <select onChange={(e) => window.open(e.target.value, "_blank")}>
              <option value="" disabled selected>
                Mas Info
              </option>
              {Object.entries(Botones).map(([key, item]) => (
                <option className="optionContainer" key={key} value={item.src}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
          <p>{Aplicacion}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
