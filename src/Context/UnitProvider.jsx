import { createContext, useState, useEffect, useRef } from "react";
import { categoryList } from "../data/CategoryList";
import { Medidas } from "../data/Medidas";

const UnitContext = createContext();

const UnitProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({});
  const [mediciones, setMediciones] = useState({});
  const [checkBox, setCheckBox] = useState([]);

  const Resetfilter = () => {
    setCategoriaActual({});
    setCheckBox([]);
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
  }, []);

  return (
    <UnitContext.Provider
      value={{
        categorias,
        obtenerCategorias,
        handleClickCategoria,
        categoriaActual,
        obtenerMediciones,
        mediciones,
        handleCheckedMedicion,
        checkBox,
        Resetfilter,
      }}
    >
      {children}
    </UnitContext.Provider>
  );
};

export { UnitProvider };
export default UnitContext;
