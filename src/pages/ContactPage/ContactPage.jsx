import './ContactPage.css';
import { FaWhatsapp } from 'react-icons/fa';
import { AiFillMail } from 'react-icons/ai';
import { MdLocationOn } from "react-icons/md";
import { FaSearch } from 'react-icons/fa';
import 'animate.css'
const ContactPage = () => {
    return (
        <div className="ContactPage">
            <div className="ContactContainer animate__animated animate__fadeIn">
                <div className="circuit-top">
                    <img src="circuits.svg" alt="" />
                </div>
                <div className="headerContact">
                    <h1>Informacion</h1>
                </div>
                <div className="menuContact">
                    <a href="https://api.whatsapp.com/message/YKLYIHRFLUVCI1?autoload=1&app_absent=0" target="blank"><span className='iconContact'><FaWhatsapp /></span>Chatea con Nosotros</a>
                    <a href="mailto:ventas@bigtronica.com" target="blank"><span className='iconContact'><AiFillMail /></span>Envianos un correo</a>
                    <a href="https://goo.gl/maps/GdeMeaQdQkEz7tRS7" target="blank"><span className='iconContact'><MdLocationOn /></span>¿Cómo llegar?</a>
                    <a href="https://www.bigtronica.com/" target='blank'><span className='iconContact'><FaSearch /></span>Explora nuestro sitio web</a>
                </div>
                <div className="circuit-bottom">
                    <img src="circuits.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default ContactPage