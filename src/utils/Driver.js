import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

const Driver = () => {
  const currentPath = window.location.pathname;
  const driverObj = driver({
    showProgress: true,
    nextBtnText: 'Siguiente',
    prevBtnText: 'Atrás',
    doneBtnText: 'Salir',
    steps: [
      {
        element: ".home_panel-wrap",
        popover: {
          title: "Bienvenid@s a ZonaUnit😎",
          description:
            "¡Hola! Soy BigBot🤖, experto en Multimetros UNIT. ¿Necesitas ayuda para elegir el tuyo? ¡Yo Te enseño! ",
          side: "left",
          align: "start",
        },
      },
      {
        element: ".sectionCategorias .Categoria:nth-child(2)",
        popover: {
          title: "Filtra por Categoria",
          description:
            "¡Supongamos que estas buscando una Pinza que mida corriente DC; selecciona 'Pinzas'",
          side: "bottom",
          align: "start",
        },
      },
      {
        element:
          ".checkbox:nth-child(3)",
        popover: {
          title: "Filtra por Características✔️",
          description:
            "Selecciona el Check de Corriente DC; puedes seleccionar varios",
          side: "bottom",
          align: "start",
        },
      },
      {
        element: ".listItem-wrap",
        popover: {
          title: "Producto",
          description:
            "Encuentra un botón para comparar y un menú con más info: hoja técnica, enlace de compra y app (si tiene bluetooth). ¡Explora todas las opciones! 🌐📲",
          side: "left",
          align: "start",
        },
      },
      {
        element: ".list-wrap",
        popover: {
          title: "Comparar Productos",
          description:
            "Selecciona los productos que desea comparar; simplemente haz clic en el botón 'Comparar' hasta que diga 'Agregado'. ¡Así de fácil! 🛠️🔍",
          side: "left",
          align: "start",
        },
      },
      {
        popover: {
          title: "Generar Reporte",
          description:
            "¡Generar una tabla comparativa es tan fácil como hacer clic en 'COMPARAR PRODUCTOS'",
          side: "left",
          align: "start",
        },
      },
    ],
  });

  if (currentPath === '/Unit') {
    driverObj.drive();
  }

  else {
    driverObj.destroy();
  }
};


export default Driver