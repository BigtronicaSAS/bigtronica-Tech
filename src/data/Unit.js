import Medidas from "./Medidas";
const { VAC, VDC, CDC, CAC, R, C, T, F, DIODO, CONTINUIDAD, AUTO, DUTY, NCV, RMS } = Medidas;

const  Unit = [
    {
        id: 1,
        Category: 'multimetro',
        Modelo: 'UT33A+',
        VoltajeDC: 600,
        VoltajeAC: 600,
        CorrienteDC: 10,
        CorrienteAC: 10,
        Resistencia: 200, //En MegaOhmios
        Capacitancia: 2000, // En MicroFaradios
        Frecuencia: 0, //Khz
        Temperatura: { min: 0, max: 0 }, // Centigrados
        Cuentas: 2000,
        Seguridad: 2,
        ImagenSrc: 'https://meters.uni-trend.com/storage/2022/04/UT33A_1.jpg',
        Medicion: [VAC, VDC, CAC, CDC, R, C, T, DIODO, CONTINUIDAD],
        aplicacion: 'Básico',
        Botones: {
            PDF: 'https://drive.google.com/file/d/1C5Q5byvAnS1rWzsab3rArvPOpFTmoEa7/view',
            Tienda: 'https://www.bigtronica.com/equipos-medicion/multimetros/3201-multimetro-uni-t-ut33a-5053212032012.html',
        }
    },
    {
        id: 2,
        Category: 'multimetro',
        Modelo: 'UT33C+',
        VoltajeDC: 600,
        VoltajeAC: 600,
        CorrienteDC: 10,
        CorrienteAC: 0,
        Resistencia: 20, //En MegaOhmios
        Capacitancia: 0, // En MicroFaradios
        Frecuencia: 0, //Khz
        Temperatura: { min: -40, max: 1000 }, // Centigrados
        Frecuencia: 0, //Khz
        Cuentas: 2000,
        Seguridad: 2,
        ImagenSrc: 'https://meters.uni-trend.com/storage/2022/04/UT33C_1.jpg',
        Medicion: [VAC, VDC, CDC, R, T, DIODO, CONTINUIDAD, AUTO],
        aplicacion: 'Básico',
        Botones: {
            PDF: 'https://drive.google.com/file/d/1C5Q5byvAnS1rWzsab3rArvPOpFTmoEa7/view',
            Tienda: 'https://www.bigtronica.com/equipos-medicion/multimetros/1185-multimetro-uni-t-ut33c-6935750533178.html',
        }
    },
    {
        id: 3,
        Category: 'multimetro',
        Modelo: 'UT120C',
        VoltajeDC: 600,
        VoltajeAC: 600,
        CorrienteDC: 0.4,
        CorrienteAC: 0.4,
        Resistencia: 40, //En MegaOhmios
        Capacitancia: 100, // En MicroFaradios
        Frecuencia: 100, //Khz
        Temperatura: { min: 0, max: 0 },
        Cuentas: 4000,
        Seguridad: 2,
        ImagenSrc: 'https://meters.uni-trend.com/storage/2022/04/UT120C_1.jpg',
        Medicion: [VAC, VDC, CDC, CAC, R, C, F, DIODO, CONTINUIDAD, AUTO, DUTY],
        aplicacion: 'Bolsillo',
        Botones: {
            PDF: 'https://drive.google.com/file/d/14xqJOjIm83Ezsv9qtqFzKl4jfuknqfva/view?usp=sharing',
            Tienda: 'https://www.bigtronica.com/equipos-medicion/multimetros/1555-multimetro-uni-t-ut120c-6935750512036.html',
        }
    },
    {
        id: 4,
        Category: 'multimetro',
        Modelo: 'UT123',
        VoltajeDC: 600,
        VoltajeAC: 600,
        CorrienteDC: 0,
        CorrienteAC: 0,
        Resistencia: 20, //En MegaOhmios
        Capacitancia: 0, // En MicroFaradios
        Frecuencia: 0, //Khz
        Temperatura: { min: 0, max: 0 },
        Cuentas: 4000,
        Seguridad: 3,
        ImagenSrc: 'https://meters.uni-trend.com/storage/2022/04/UT123_1.jpg',
        Medicion: [VAC, VDC, R, CONTINUIDAD, NCV, AUTO],
        aplicacion: 'Bolsillo',
        Botones: {
            PDF: 'https://drive.google.com/file/d/1pLUVsate0H7DiNVHrQNf-zHFhEfpGdfY/view',
            Tienda: 'https://www.bigtronica.com/equipos-medicion/multimetros/3000-multimetro-uni-t-ut123-5053212030001.html',
        }
    },
    {
        id: 5,
        Category: 'multimetro',
        Modelo: 'UT123D',
        VoltajeDC: 600,
        VoltajeAC: 600,
        CorrienteDC: 10,
        CorrienteAC: 10,
        Resistencia: 40, //En MegaOhmios
        Capacitancia: 4000, // En MicroFaradios
        Frecuencia: 0, //Khz
        Temperatura: { min: 0, max: 0 },
        Cuentas: 4000,
        Seguridad: 3,
        ImagenSrc: 'https://meters.uni-trend.com/storage/2022/04/UT123D_1.jpg',
        Medicion: [VAC, VDC, CDC, CAC, R, C, DIODO, CONTINUIDAD, AUTO, NCV, RMS
        ],
        aplicacion: 'Bolsillo',
        Botones: {
            PDF: 'https://drive.google.com/file/d/1t_Wf-1YjGKXdP7wpqnc6G1FZwi2SebLS/view',
            Tienda: 'https://www.bigtronica.com/equipos-medicion/multimetros/3202-multimetro-uni-t-ut123d-5053212032029.html',
        }
    },
    {
        id: 6,
        Category: 'multimetro',
        Modelo: 'UT125C',
        VoltajeDC: 600,
        VoltajeAC: 600,
        CorrienteDC: 0.4,
        CorrienteAC: 0.4,
        Resistencia: 40, //En MegaOhmios
        Capacitancia: 100, // En MicroFaradios
        Frecuencia: 60, //Khz
        Temperatura: { min: 0, max: 0 },
        Cuentas: 4000,
        Seguridad: 3,
        ImagenSrc: 'https://meters.uni-trend.com/storage/2022/04/UT125C_1.jpg',
        Medicion: [VAC, VDC, CDC, CAC, R, C, DIODO, CONTINUIDAD, AUTO, NCV, RMS],
        aplicacion: 'Bolsillo',
        Botones: {
            PDF: 'https://drive.google.com/file/d/1t_Wf-1YjGKXdP7wpqnc6G1FZwi2SebLS/view',
            Tienda: 'https://www.bigtronica.com/equipos-medicion/multimetros/3202-multimetro-uni-t-ut123d-5053212032029.html',
        }
    },
]

export default Unit;