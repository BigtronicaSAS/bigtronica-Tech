import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer flexColCenter'>
      <div className='SectionSocial flexCenter '>
        <div className='ContentSocial'>
          <div className='tittle_Social flexColCenter'>
            <div className="logo-container">
              <a href="https://www.bigtronica.com/" target="blank"><img className="logo" src="./logo.svg" alt="logo" width={50} />
              </a>
            </div>
            <p>Al Alcance De Tus <span class="titleSpan">Ideas</span></p>
          </div>
          <a className="button" href="https://api.whatsapp.com/message/YKLYIHRFLUVCI1?autoload=1&app_absent=0" target="blank"><span>¡Contáctanos!</span></a>
          <div className="social-Footer flexAround innerWidth" >
            <a href="https://www.instagram.com/bigtronica/" target="blank">
              <img src="./Instagram.svg" alt="Instagram" />
            </a>
            <a href="https://github.com/BigtronicaSAS" target="blank">
              <img src="./Github.svg" alt="Github" />
            </a>
            <a href="https://www.facebook.com/bigtronica/" target="blank">
              <img src="./Facebook.svg" alt="Facebook" />
            </a>
            <a href="https://www.youtube.com/channel/UCT5PM5WeEsXWLeqfDFwuVuQ" target="blank">
              <img src="./Youtube.svg" alt="Youtube" />
            </a>
          </div>
        </div>
      </div>
      <div className='subFooter flexAround'>
        <div className="article_info">
          <h4>Contabilidad</h4>
          <ul>
            <li><a href="#">Whatsapp: 350 340 71 71</a></li>
            <li><a href="mailto:contabilidad@bigtronica.com" target="blank">Correo: contabilidad@bigtronica.com</a></li>
          </ul>
        </div>
        <div className="article_info">
          <h4>Ventas</h4>
          <ul>
            <li><a href="https://api.whatsapp.com/message/YKLYIHRFLUVCI1?autoload=1&app_absent=0" target="blank">Whatsapp: 315 643 53 52</a> </li>
            <li><a href="mailto:ventas@bigtronica.com" target="blank">Correo: ventas@bigtronica.com </a></li>
            <li><a href="#">Telefono: 322 24 64</a></li>
          </ul>
        </div>
        <div className="article_info">
          <h4>Más información</h4>
          <ul>
            <li><a href="https://www.bigtronica.com/content/5-como-comprar" target="blank">Como comprar</a> </li>
            <li><a href="https://www.bigtronica.com/content/19-como-pagar" target="blank">Métodos de pago</a></li>
            <li><a href="https://www.bigtronica.com/content/20-envios-y-domicilios" target="blank">Envios y domicilios</a></li>
          </ul>
        </div>


      </div>
      <div className="copyright">
        <ul className="copylist">
          <li><a href="https://www.bigtronica.com/content/22-conocenos" target="blank">Bigtronica Since 2015</a></li>
          <li><a
            href="https://maps.app.goo.gl/fR3MFdp4Kq8aJEGE9" target="blank"><strong>Carrera 53# 50-51, C.C LA CASCADA, LOCAL 212H, Medellín, Antioquia</strong>
          </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer