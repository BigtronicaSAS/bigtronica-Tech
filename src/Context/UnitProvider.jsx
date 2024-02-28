import { createContext, useState, useEffect, useRef } from "react";
import { categoryList } from "../data/CategoryList";
import { Medidas } from "../data/Medidas";
import Unit from "../data/Unit";
import Product from "../components/Product/Product";

const UnitContext = createContext();

const UnitProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({});
  const [mediciones, setMediciones] = useState({});
  const [productos, setProductos] = useState({});
  const [checkBox, setCheckBox] = useState([]);
  const [compareProduct, setCompareProduct] = useState([]);
  const [modal, setModal] = useState(false);

  const CompareProducts = (ProductItem)=>{
    if(compareProduct.includes(ProductItem)){
      setCompareProduct((prevCompareProduct) =>
      prevCompareProduct.filter((item) => item !== ProductItem))
    }else{
      setCompareProduct((prevCompareProduct) => [...prevCompareProduct, ProductItem])
    }
    
  }
  const obtenerProductos = () => {
    setProductos(Unit);
  };
  const cleanProductos = () => {
    setModal(false);
    setCompareProduct([]);
  };
  const Resetfilter = () => {
    setCategoriaActual({});
    setCheckBox([]);
  };

  const handleClickModal = () => {
    setModal(!modal);
  };

  const obtenerMediciones = async () => {
    setMediciones(Medidas);
  };

  const obtenerCategorias = async () => {
    setCategorias(categoryList);
  };
  const handleClickCategoria = (id) => {
    const categoria = categorias.filter((categoria) => categoria.id === id)[0];
    setCategoriaActual(categoria);
  };

  const handleCheckedMedicion = (key) => {
    if (checkBox.includes(key)) {
      // Si ya está, lo remueve
      setCheckBox((prevCheckBox) =>
        prevCheckBox.filter((item) => item !== key)
      );
    } else {
      // Si no está, lo agrega
      setCheckBox((prevCheckBox) => [...prevCheckBox, key]);
    }
  };

  useEffect(() => {
    obtenerCategorias();
    obtenerMediciones();
    obtenerProductos();
  }, []);

  return (
    <UnitContext.Provider
      value={{
        obtenerProductos,
        productos,
        categorias,
        obtenerCategorias,
        handleClickCategoria,
        categoriaActual,
        obtenerMediciones,
        mediciones,
        handleCheckedMedicion,
        checkBox,
        Resetfilter,
        cleanProductos,
        CompareProducts,
        handleClickModal,
        compareProduct,
        modal,
      }}
    >
      {children}
    </UnitContext.Provider>
  );
};

export { UnitProvider };
export default UnitContext;
