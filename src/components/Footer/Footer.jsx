import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
        <section className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">
                <div className="flexColStart f-left">
                    <img src="./logo.svg" alt="" />
                    <span className='secondaryName'>
                        somos una empresa de electronica en medellin
                    </span>
                </div>

                <div className="flexColStart f-right">
                    <span className='primaryTextg'>Informacion</span>
                    <span> Direccion Medellin</span>
                    <div className="flexCenter f-menu">
                        <span>Tienda Online</span>
                        <span>texto</span>
                        <span>sdfsd</span>
                        <span>sdf</span>
                        <span>sdf</span>
                    </div>
                </div>
               
            </div>
            <p className='copy flexCenter'>Desarrollado por Bigtronica SAS 2023</p>
        </section>
    )
}

export default Footer