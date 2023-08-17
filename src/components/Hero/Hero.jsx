import React from "react";
import "./Hero.css";
import CountUp from "react-countup";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="flexColStart hero-left">
          <div className="hero-text">
            <div className="arrow_title">
              <img src="./hero-title.svg" alt="" />
            </div>
            <div className="hero-title flexColStart">
              <h1>
                Bigtronica:
                <br />
                Al Alcance De
                <br />
                Tus<span className="titleSpan"> Proyectos</span>
              </h1>
              <div className="hero-des flexColStart">
                <p className="textParagraph">
                  Nos enorgullece ser tu mejor opción para tus  compras de suministros electrónicos
                </p>

              </div>

              <div className="flexCenter stats">
                <div className="flexColCenter stat">
                  <span>
                    <CountUp start={3800} end={4000} duration={4} />
                    <span>+</span>
                  </span>
                  <span className="secondaryText">Productos</span>
                </div>
                <div className="flexColCenter stat">
                  <span>
                    <CountUp start={4950} end={5000} duration={4} />
                    <span>+</span>
                  </span>
                  <span className="secondaryText">Clientes Felices</span>
                </div>
                <div className="flexColCenter stat">
                  <span>
                    <CountUp end={7} />
                    <span>+</span>
                  </span>
                  <span className="secondaryText">Años</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flexCenter hero-right">

          <div className="image-container animate__animated animate__zoomIn">
            <img src="hero-img.svg" alt="bigtronica" />
          </div>
        </div>
      </div>
    </section>
  );
};
