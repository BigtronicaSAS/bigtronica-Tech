import React from 'react'
import './EmptyView.css'
import useUnit from '../../Hook/useUnit'

const EmptyView =() =>{
  const {categoriaActual, checkBox} = useUnit();
  console.log(checkBox)
  return (
    <div className='emptyView-wrap'>
    <p>Si deseas Buscar {categoriaActual.nombre== 'pinza' ? 'una' : 'un'}<span> {categoriaActual.nombre} </span> con las siguientes caracteristicas:  </p>
     {checkBox.map((item)=>(
      <p> {item}, </p>
     )) }

  </div>
  )
}

export default EmptyView

