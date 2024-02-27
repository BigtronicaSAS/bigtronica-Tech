import { FaCheckCircle } from "react-icons/fa";
const ImageTable = ({ src }) => {
  return <img width={"70px"} src={src} alt="" />;
};

const SeguridadDiccionario = {
  1: "I 600V",
  2: "II 600V",
  3: "III 600V",
  4: "IV 600V",
  5: "v 600v",
};

const columns = [
  {
    name: "",
    selector: (row) => <ImageTable src={row.ImagenSrc} />,
  },
  {
    name: "Modelo",
    selector: (row) => row.Modelo,
  },
  {
    name: "Voltaje DC (V)",
    selector: (row) => row.VoltajeDC,
    sortable: true,
  },
  {
    name: "Voltaje AC (V)",
    selector: (row) => row.VoltajeAC,
    sortable: true,
  },
  {
    name: "Corriente DC (A)",
    selector: (row) => row.CorrienteDC,
    sortable: true,
  },
  {
    name: "Corriente AC (A)",
    selector: (row) => row.CorrienteAC,
    sortable: true,
  },
  {
    name: "Resistencia (MΩ)",
    selector: (row) => row.Resistencia,
    sortable: true,
  },
  {
    name: "Capacitancia (uF)",
    selector: (row) => row.Capacitancia,
    sortable: true,
  },

  {
    name: "Frecuencia (Khz)",
    selector: (row) => row.Frecuencia,
    sortable: true,
  },
  {
    name: "Temperatura Min",
    selector: (row) => row.Temperatura.min,
    sortable: true,
  },
  {
    name: "Temperatura Max",
    selector: (row) => row.Temperatura.max,
    sortable: true,
  },
];

const features = [
  {
    name: "",
    selector: (row) => <ImageTable src={row.ImagenSrc} />,
  },
  {
    name: "Modelo",
    selector: (row) => row.Modelo,
  },
  {
    name: "Glamp",
    selector: (row) => row.Glamp,
    sortable: true,
  },
  {
    name: "Cuentas",
    selector: (row) => row.Cuentas,
    sortable: true,
  },
  {
    name: "Seguridad",
    selector: (row) => SeguridadDiccionario[row.Seguridad] || row.Seguridad,
  },
  {
    name: "Continuidad",
    selector: (row) =>
      row.Medicion.includes("Continuidad") ? <FaCheckCircle /> : "",
  },
  {
    name: "Diodo",
    selector: (row) =>
      row.Medicion.includes("Diodo") ? <FaCheckCircle /> : " ",
  },
  {
    name: "Duty",
    selector: (row) =>
      row.Medicion.includes("Duty") ? <FaCheckCircle /> : " ",
  },
  {
    name: "NCV",
    selector: (row) => (row.Medicion.includes("NCV") ? <FaCheckCircle /> : " "),
  },
  {
    name: "Auto Rango",
    selector: (row) =>
      row.Medicion.includes("AutoRango") ? <FaCheckCircle /> : " ",
  },
  {
    name: "True RMS",
    selector: (row) =>
      row.Medicion.includes("TrueRMS") ? <FaCheckCircle /> : " ",
  },
  {
    name: "hFE",
    selector: (row) =>
      row.Medicion.includes("Transistor") ? <FaCheckCircle /> : " ",
  },
  {
    name: "VFC",
    selector: (row) => (row.Medicion.includes("VFC") ? <FaCheckCircle /> : " "),
  },
  {
    name: "RPM",
    selector: (row) => (row.Medicion.includes("RPM") ? <FaCheckCircle /> : " "),
  },
  {
    name: "USB",
    selector: (row) =>
      row.Medicion.includes("Interfaz USB") ? <FaCheckCircle /> : " ",
  },
  {
    name: "Bluetooth",
    selector: (row) =>
      row.Medicion.includes("Bluetooth") ? <FaCheckCircle /> : "",
  },
];

export { columns, features };
