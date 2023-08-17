import { MdLocationOn } from "react-icons/md";
import { AiOutlineCreditCard } from 'react-icons/ai';
import { FaTruck } from 'react-icons/fa';
const data = [
  {
    icon: <MdLocationOn />,
    UrlInfo: "https://goo.gl/maps/gfUaEndPXuBahGvAA",
    buttonInfo: "¡Iniciar Ruta!",
    heading: "¿Donde estan Ubicados?",
    detail:
      "¡Te esperamos en nuestro punto de venta en Medellín, ubicado en la Carrera 53 # 50 - 51, C.C. LA CASCADA, LOCAL 212H! Estamos a solo unos pasos de la estación Parque Berrío, en el reconocido centro comercial La Cascada",
  },
  {
    icon: <AiOutlineCreditCard/>,
    UrlInfo: "https://www.bigtronica.com/content/19-como-pagar",
    buttonInfo:  "Mas Información",
    heading: "Metodos de pago",
    detail:
      "¡En Bigtronica ofrecemos una amplia variedad de métodos de pago para tu comodidad! Si deseas más información sobre nuestros medios de pagos, ¡haz clic en 'Más información' para conocer todas las opciones disponibles!",
  },
  {
    icon: <FaTruck />,
    UrlInfo: "https://www.bigtronica.com/content/20-envios-y-domicilios",
    buttonInfo:  "Mas Información",
    heading: "Domicilios y Envios",
    detail:
      "¡Claro que sí! ¡Llevamos tus productos hasta tu hogar sin importar dónde te encuentres! Nuestros envíos y domicilios cubren todo el país, somos tu mejor opción",
  },
];
export default data;