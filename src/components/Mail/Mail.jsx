import React from 'react'
import './Mail.css';

function Mail() {
  return (
    <section className="m-wrapper">
        <div className="paddings innerWidth mail-container">
           <div className="flexColCenter inner-container">
              <span>Cotiza con nosotros</span><span>TEXTO AQUI CORTO</span>
              <a className="button mail" href="mailto:ventas@bigtronica.com" target="blank"><span>¡Contáctanos!</span></a>
            </div> 
        </div>
    </section>
  )
}

export default Mail