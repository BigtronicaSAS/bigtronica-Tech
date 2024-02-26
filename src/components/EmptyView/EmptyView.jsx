import React from 'react'
import './EmptyView.css'
import useUnit from '../../Hook/useUnit'

const EmptyView =() =>{
  const {categoriaActual, checkBox} = useUnit();
  console.log(checkBox)
  return (
    <div className='emptyView-wrap'>
    <p>Si deseas Buscar una<span>{categoriaActual.nombre}</span> con las siguientes caracteristicas</p>
    div
    <ul>
     {checkBox.map((item)=>(
      <li>{item}</li>
     )) }
    </ul>
  </div>
  )
}

export default EmptyView

