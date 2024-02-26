import React from 'react'
import useUnit from "../../Hook/useUnit";
import './Category.css'

const Category =({Category}) =>{
    const {handleClickCategoria, categoriaActual}= useUnit()
    const { id, label } = Category;
  return (
    <div
    className={`Categoria ${categoriaActual.id === id ? "CategoriaActual" : "Categorias"}`}
    onClick={() => handleClickCategoria(id)}
  >
    <div className="" type="button">
      {label}
    </div>
  </div>
  )
}

export default Category