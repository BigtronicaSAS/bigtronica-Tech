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
    name: "DC (V)",
    selector: (row) => row.VoltajeDC,
    sortable: true,
  },
  {
    name: "AC (V)",
    selector: (row) => row.VoltajeAC,
    sortable: true,
  },
  {
    name: "DC (A)",
    selector: (row) => row.CorrienteDC,
    sortable: true,
  },
  {
    name: "AC (A)",
    selector: (row) => row.CorrienteAC,
    sortable: true,
  },
  {
    name: "Resis... (MΩ)",
    selector: (row) => row.Resistencia,
    sortable: true,
  },
  {
    name: "Conden... (mF)",
    selector: (row) => row.Capacitancia,
    sortable: true,
  },

  {
    name: "Frecue... (Khz)",
    selector: (row) => row.Frecuencia,
    sortable: true,
  },
  {
    name: "°C Min",
    selector: (row) => row.Temperatura.min,
    sortable: true,
  },
  {
    name: "°C Max",
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
      row.Medicion.includes("Continuidad") ? <FaCheckCircle className="CheckCircle" /> : "",
  },
  {
    name: "Diodo",
    selector: (row) =>
      row.Medicion.includes("Diodo") ? <FaCheckCircle className="CheckCircle" /> : " ",
  },
  {
    name: "Duty",
    selector: (row) =>
      row.Medicion.includes("Duty") ? <FaCheckCircle className="CheckCircle" /> : " ",
  },
  {
    name: "NCV",
    selector: (row) => (row.Medicion.includes("NCV") ? <FaCheckCircle className="CheckCircle" /> : " "),
  },
  {
    name: "Auto Rango",
    selector: (row) =>
      row.Medicion.includes("AutoRango") ? <FaCheckCircle className="CheckCircle" /> : " ",
  },
  {
    name: "True RMS",
    selector: (row) =>
      row.Medicion.includes("TrueRMS") ? <FaCheckCircle className="CheckCircle" /> : " ",
  },
  {
    name: "hFE",
    selector: (row) =>
      row.Medicion.includes("Transistor") ? <FaCheckCircle className="CheckCircle" /> : " ",
  },
  {
    name: "VFC",
    selector: (row) => (row.Medicion.includes("VFC") ? <FaCheckCircle className="CheckCircle" /> : " "),
  },
  {
    name: "RPM",
    selector: (row) => (row.Medicion.includes("RPM") ? <FaCheckCircle className="CheckCircle" /> : " "),
  },
  {
    name: "USB",
    selector: (row) =>
      row.Medicion.includes("Interfaz USB") ? <FaCheckCircle className="CheckCircle" /> : " ",
  },
  {
    name: "Bluetooth",
    selector: (row) =>
      row.Medicion.includes("Bluetooth") ? <FaCheckCircle className="CheckCircle" /> : "",
  },
  {
    name: "Test Bateria",
    selector: (row) =>
      row.Medicion.includes("Bateria Test") ? <FaCheckCircle className="CheckCircle" /> : "",
  },
];

export { columns, features };
