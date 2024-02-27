import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ children, filter }) => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter h-mobile paddings h-container">
        <div className="container_mobile" >
          <div className="logo-container">
            <a href="https://www.bigtronica.com/" target="blank">
              <img className="logo" src="./logo.svg" alt="logo" width={50} />
            </a>
          </div>

          {filter}
        </div>

        {children}

        <div className="navbar-text">
          <div className="flexCenter h-menu">
            <Link to={"/"}>Inicio</Link>
            <Link to={"/Unit"}>Zona Unit</Link>
            <a href="https://www.bigtronica.com/" target="blank">
              Tienda Online
            </a>
          </div>

          <div className="social-icon">
            <a
              href="https://www.youtube.com/channel/UCT5PM5WeEsXWLeqfDFwuVuQ"
              target="blank"
            >
              <img src="./Youtube.svg" alt="Youtube" />
            </a>
            <a href="https://github.com/BigtronicaSAS" target="blank">
              <img src="./Github.svg" alt="Github" />
            </a>
            <a href="https://www.facebook.com/bigtronica/" target="blank">
              <img src="./Facebook.svg" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/bigtronica/" target="blank">
              <img src="./Instagram.svg" alt="Instagram" />
            </a>
          </div>
          <a
            className="button"
            href="https://api.whatsapp.com/message/YKLYIHRFLUVCI1?autoload=1&app_absent=0"
            target="blank"
          >
            <span>¡Contáctanos!</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
