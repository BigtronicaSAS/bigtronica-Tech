import Botones from "./Botones";
import { Medidas, Aplicacion } from "./Medidas";
const { VAC, VDC, CDC, CAC, R, C, T, F, DIODO, CONTINUIDAD, AUTO, DUTY, NCV, RMS, BL, hFE,
    VFC, RPM, TESTB, LIVE, LPF, LOZ, ANALOGBAR, USB } = Medidas;
const { MOTOR, ElECTRICO, ELECTRONICA, BASIC, BOLSILLO } = Aplicacion
const { TIENDA, PDF, APP } = Botones

const Multimetros = [
    {
        id: 1,
        Category: 'multimetro',
        Modelo: 'UT33A+',
        VoltajeDC: 600,
        VoltajeAC: 600,
        CorrienteDC: 10,
        CorrienteAC: 10,
        Resistencia: 200 , //En MegaOhmios
        Capacitancia: 2, // En MiliFaradios
        Frecuencia: 0, //Khz
        Temperatura: { min: 0, max: 0 }, // Centigrados
        Cuentas: 2000,
        Seguridad: 2,
        ImagenSrc: 'https://meters.uni-trend.com/storage/2022/04/UT33A_1.jpg',
        Medicion: [VAC, VDC, CAC, CDC, R, C, AUTO, DIODO, CONTINUIDAD],
        Aplicacion: BASIC,
        Botones: {
            PDF: { src: 'https://drive.google.com/file/d/1C5Q5byvAnS1rWzsab3rArvPOpFTmoEa7/view', title: PDF },
            Tienda: { src: 'https://www.bigtronica.com/equipos-medicion/multimetros/3201-multimetro-uni-t-ut33a-5053212032012.html', title: TIENDA }
        },
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
        Medicion: [VAC, VDC, CDC, R, T, DIODO, CONTINUIDAD],
        Aplicacion: BASIC,
        Botones: {
            PDF: { src: 'https://drive.google.com/file/d/1C5Q5byvAnS1rWzsab3rArvPOpFTmoEa7/view', title: PDF },
            Tienda: { src: 'https://www.bigtronica.com/equipos-medicion/multimetros/1185-multimetro-uni-t-ut33c-6935750533178.html', title: TIENDA },
        },
        checked: false
        
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
        Capacitancia: 0.1, // En MicroFaradios
        Frecuencia: 100, //Khz
        Temperatura: { min: 0, max: 0 },
        Cuentas: 4000,
        Seguridad: 2,
        ImagenSrc: 'https://meters.uni-trend.com/storage/2022/04/UT120C_1.jpg',
        Medicion: [VAC, VDC, CDC, CAC, R, C, F, DIODO, CONTINUIDAD, AUTO, DUTY],
        Aplicacion: BOLSILLO,
        Botones: {
            PDF: { src: 'https://drive.google.com/file/d/14xqJOjIm83Ezsv9qtqFzKl4jfuknqfva/view?usp=sharing', title: PDF },
            Tienda: { src: 'https://www.bigtronica.com/equipos-medicion/multimetros/1555-multimetro-uni-t-ut120c-6935750512036.html', title: TIENDA },
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
        Temperatura: { min: -40, max: 300 },
        Cuentas: 4000,
        Seguridad: 3,
        ImagenSrc: 'https://meters.uni-trend.com/storage/2022/04/UT123_1.jpg',
        Medicion: [VAC, VDC, R, T, CONTINUIDAD, NCV, AUTO],
        Aplicacion: BOLSILLO,
        Botones: {
            PDF: {src:'https://drive.google.com/file/d/1pLUVsate0H7DiNVHrQNf-zHFhEfpGdfY/view', title: PDF},
            Tienda: {src:'https://www.bigtronica.com/equipos-medicion/multimetros/3000-multimetro-uni-t-ut123-5053212030001.html', title: TIENDA},
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
        Capacitancia: 4, // En MicroFaradios
        Frecuencia: 0, //Khz
        Temperatura: { min: 0, max: 0 },
        Cuentas: 4000,
        Seguridad: 3,
        ImagenSrc: 'https://meters.uni-trend.com/storage/2022/04/UT123D_1.jpg',
        Medicion: [VAC, VDC, CDC, CAC, R, C, DIODO, CONTINUIDAD, AUTO, NCV, RMS
        ],
        Aplicacion: BOLSILLO,
        Botones: {
            PDF: {src:'https://drive.google.com/file/d/1t_Wf-1YjGKXdP7wpqnc6G1FZwi2SebLS/view', title: PDF},
            Tienda: {src:'https://www.bigtronica.com/equipos-medicion/multimetros/3202-multimetro-uni-t-ut123d-5053212032029.html', title: TIENDA},
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
        Capacitancia: 0.1, // En MicroFaradios
        Frecuencia: 60, //Khz
        Temperatura: { min: 0, max: 0 },
        Cuentas: 4000,
        Seguridad: 3,
        ImagenSrc: 'https://meters.uni-trend.com/storage/2022/04/UT125C_1.jpg',
        Medicion: [VAC, VDC, CDC, CAC, R, C,F, DIODO, CONTINUIDAD, AUTO, NCV, RMS, DUTY],
        Aplicacion: BOLSILLO,
        Botones: {
            PDF: {src:'https://drive.google.com/file/d/1fhLg1OPrgIx3HeIi-q7vrGZQfmQSwBwB/view',title: PDF},
            Tienda: {src:'https://www.bigtronica.com/equipos-medicion/multimetros/2827-multimetro-uni-t-ut125c-5053212028275.html', title: TIENDA},
        }
    },
    {
        id: 7,
        Category: 'multimetro',
        Modelo: 'UT60BT',
        VoltajeDC: 1000,
        VoltajeAC: 1000,
        CorrienteDC: 10,
        CorrienteAC: 10,
        Resistencia: 100, //En MegaOhmios
        Capacitancia: 10, 
        Frecuencia: 10000, //Khz
        Temperatura: { min: -40, max: 1000 },
        Cuentas: 9999,
        Seguridad: 3,
        ImagenSrc: 'https://meters.uni-trend.com/storage/2022/04/UT60BT_1.jpg',
        Medicion: [VAC, VDC, CDC, CAC, R, C, F, T, DIODO, CONTINUIDAD, DUTY, AUTO, NCV, RMS, BL],
        Aplicacion: ELECTRONICA,
        Botones: {
            PDF: {src:'https://drive.google.com/file/d/1gXIsE2niMPKbVxz-SKdsvtalW4un_9CD/view', title: PDF},
            Tienda: {src:'https://www.bigtronica.com/equipos-medicion/multimetros/3098-multimetro-uni-t-ut60bt-5053212030988.html', title: TIENDA},
            APP: {src:'https://drive.google.com/file/d/1tQzB5mPFfjIES55YPoiMbC_ZPBejyxf-/view', title: APP}
        }
    },
    {
        id: 8,
        Category: 'multimetro',
        Modelo: 'UT39A+',
        VoltajeDC: 1000,
        VoltajeAC: 750,
        CorrienteDC: 10,
        CorrienteAC: 10,
        Resistencia: 200, //En MegaOhmios
        Capacitancia: 10, // En MicroFaradios
        Frecuencia: 0, //Khz
        Temperatura: { min: 0, max: 0 },
        Cuentas: 4000,
        Seguridad: 3,
        ImagenSrc: 'https://meters.uni-trend.com/storage/2022/04/UT39A_1.jpg',
        Medicion: [VAC, VDC, CDC, CAC, R, C, DIODO, CONTINUIDAD, hFE],
        Aplicacion: ELECTRONICA,
        Botones: {
            PDF: {src:'https://drive.google.com/file/d/1a-MUe6XAKaqG0Yj93V-bPyNdeN5o9O39/view', title: PDF},
            Tienda: {src:'https://www.bigtronica.com/equipos-medicion/multimetros/2142-multimetro-uni-t-ut39a-6935750539200.html', title: TIENDA},
        }
    },
    {
        id: 9,
        Category: 'multimetro',
        Modelo: 'UT39C+',
        VoltajeDC: 1000,
        VoltajeAC: 750,
        CorrienteDC: 10,
        CorrienteAC: 10,
        Resistencia: 40, //En MegaOhmios
        Capacitancia: 10, // En MicroFaradios
        Frecuencia: 1000, //Khz
        Temperatura: { min: -40, max: 1000 },
        Cuentas: 4000,
        Seguridad: 3,
        ImagenSrc: 'https://meters.uni-trend.com/storage/2022/04/UT39C_1.jpg',
        Medicion: [VAC, VDC, CDC, CAC, R, C, F, T, DIODO, CONTINUIDAD, NCV, hFE],
        Aplicacion: ELECTRONICA,
        Botones: {
            PDF: {src:'https://drive.google.com/file/d/1EDO0pwv3JQZFI3QGToFhrHGWfB6RI3cp/view', title: PDF},
            Tienda: {src:'https://www.bigtronica.com/equipos-medicion/multimetros/1865-multimetro-uni-t-ut39c-6935750516393.html', title: TIENDA},
        }
    },
    {
        id: 10,
        Category: 'multimetro',
        Modelo: 'UT136B+',
        VoltajeDC: 1000,
        VoltajeAC: 1000,
        CorrienteDC: 10,
        CorrienteAC: 10,
        Resistencia: 40, //En MegaOhmios
        Capacitancia: 40, // En MicroFaradios
        Frecuencia: 40000, //Khz
        Temperatura: { min: 0, max: 0 },
        Cuentas: 4000,
        Seguridad: 3,
        ImagenSrc: 'https://meters.uni-trend.com/storage/2022/04/UT136B_1.jpg',
        Medicion: [VAC, VDC, CDC, CAC, R, C, F, DIODO, CONTINUIDAD, NCV, hFE, AUTO],
        Aplicacion: ELECTRONICA,
        Botones: {
            PDF: {src:'https://drive.google.com/file/d/1AX0eW3ftO_pfkNPlUEBCh8TO7w21Kwqy/view', title: PDF},
            Tienda: {src:'https://www.bigtronica.com/equipos-medicion/multimetros/2675-multimetro-uni-t-ut136b-6935750513651.html', title: TIENDA},
        }
    },
    {
        id: 11,
        Category: 'multimetro',
        Modelo: 'UT136C+',
        VoltajeDC: 1000,
        VoltajeAC: 1000,
        CorrienteDC: 10,
        CorrienteAC: 10,
        Resistencia: 40, //En MegaOhmios
        Capacitancia: 40, // En MicroFaradios
        Frecuencia: 40000, //Khz
        Temperatura: { min: -40, max: 1000 },
        Cuentas: 4000,
        Seguridad: 3,
        ImagenSrc: 'https://meters.uni-trend.com/storage/2022/04/UT39C_1.jpg',
        Medicion: [VAC, VDC, CDC, CAC, R, C, F, T, DIODO, CONTINUIDAD, hFE, AUTO],
        Aplicacion: ELECTRONICA,
        Botones: {
            PDF: {src:'https://drive.google.com/file/d/1AX0eW3ftO_pfkNPlUEBCh8TO7w21Kwqy/view', title: PDF},
            Tienda: {src:'https://www.bigtronica.com/equipos-medicion/multimetros/3165-multimetro-uni-t-ut136c-5053212031657.html', title: TIENDA},
        }
    },
    {
        id: 12,
        Category: 'multimetro',
        Modelo: 'UT105+',
        VoltajeDC: 1000,
        VoltajeAC: 1000,
        CorrienteDC: 10,
        CorrienteAC: 10,
        Resistencia: 40, //En MegaOhmios
        Capacitancia: 0, // En MicroFaradios
        Frecuencia: 10000, //Khz
        Temperatura: { min: -40, max: 1000 },
        Cuentas: 4000,
        Seguridad: 3,
        ImagenSrc: 'https://meters.uni-trend.com/storage/2022/07/UT105_1.jpg',
        Medicion: [VAC, VDC, CDC, CAC, R, DUTY, F, T, DIODO, CONTINUIDAD, hFE,  RMS, VFC, RPM],
        Aplicacion: MOTOR,
        Botones: {
            PDF: {src:'https://drive.google.com/file/d/1ZV-FtIaDLiMb8yz60gVcFCsprZ8cfpyt/view', title: PDF},
            Tienda: {src:'https://www.bigtronica.com/equipos-medicion/multimetros/3204-multimetro-automotriz-uni-t-ut105-5053212032043.html', title:TIENDA},
        }
    },
    {
        id: 13,
        Category: 'multimetro',
        Modelo: 'UT107+',
        VoltajeDC: 1000,
        VoltajeAC: 1000,
        CorrienteDC: 10,
        CorrienteAC: 10,
        Resistencia: 60, //En MegaOhmios
        Capacitancia: 100, // En MicroFaradios
        Frecuencia: 10000, //Khz
        Temperatura: { min: -40, max: 1000 },
        Cuentas: 6000,
        Seguridad: 3,
        ImagenSrc: 'https://meters.uni-trend.com/storage/2022/07/UT107_1.jpg',
        Medicion: [VAC, VDC, CDC, CAC, R, C, F, T, DUTY, DIODO, CONTINUIDAD, hFE, RMS, VFC, RPM, TESTB],
        Aplicacion: MOTOR,
        Botones: {
            PDF: {src:'https://drive.google.com/file/d/1ZV-FtIaDLiMb8yz60gVcFCsprZ8cfpyt/view', title: PDF},
            Tienda: {src:'https://www.bigtronica.com/equipos-medicion/multimetros/3203-multimetro-automotriz-uni-t-ut107-5053212032036.html', title: TIENDA},
        }
    },
    {
        id: 14,
        Category: 'multimetro',
        Modelo: 'UT89XD',
        VoltajeDC: 1000,
        VoltajeAC: 1000,
        CorrienteDC: 20,
        CorrienteAC: 20,
        Resistencia: 60, //En MegaOhmios
        Capacitancia: 100, // En MicroFaradios
        Frecuencia: 10000, //Khz
        Temperatura: { min: 0, max: 0 },
        Cuentas: 6000,
        Seguridad: 3,
        ImagenSrc: 'https://meters.uni-trend.com/storage/2022/04/UT89XD_1.jpg',
        Medicion: [VAC, VDC, CDC, CAC, R, C, F,  DUTY, NCV, DIODO, CONTINUIDAD, hFE, RMS, VFC, LIVE],
        Aplicacion: ElECTRICO,
        Botones: {
            PDF: {src:'https://drive.google.com/file/d/15kS9hwHVW_afbBAtTyWkT-ACdJ6LWdgF/view', title:PDF},
            Tienda: {src:'https://www.bigtronica.com/equipos-medicion/multimetros/3235-multimetro-uni-t-ut89xd-5053212032357.html', title: TIENDA},
        }
    },
    {
        id: 15,
        Category: 'multimetro',
        Modelo: 'UT139C',
        VoltajeDC: 600,
        VoltajeAC: 600,
        CorrienteDC: 10,
        CorrienteAC: 10,
        Resistencia: 60, //En MegaOhmios
        Capacitancia: 100, // En MicroFaradios
        Frecuencia: 10000, //Khz
        Temperatura: { min: -40, max: 1000 },
        Cuentas: 6000,
        Seguridad: 3,
        ImagenSrc: 'https://meters.uni-trend.com/storage/2022/04/UT139C_1.jpg',
        Medicion: [VAC, VDC, CDC, CAC, R, C, F, T, DUTY, NCV, AUTO, DIODO, CONTINUIDAD, RMS, VFC],
        Aplicacion: ELECTRONICA,
        Botones: {
            PDF: {src:'https://drive.google.com/file/d/1RBjIj22cBjDOUylUXVZ_XOfcbOhYMldX/view?usp=sharing', title: PDF},
            Tienda: {src:'https://www.bigtronica.com/equipos-medicion/multimetros/2830-multimetro-uni-t-ut139c-5053212028305.html', title: TIENDA},
        }
    },
    {
        id: 16,
        Category: 'multimetro',
        Modelo: 'UT191T',
        VoltajeDC: 600,
        VoltajeAC: 600,
        CorrienteDC: 20,
        CorrienteAC: 20,
        Resistencia: 60, //En MegaOhmios
        Capacitancia: 60, // En MicroFaradios
        Frecuencia: 1000, //Khz
        Temperatura: { min: -40, max: 400 },
        Cuentas: 6000,
        Seguridad: 3,
        ImagenSrc: 'https://meters.uni-trend.com/storage/2022/04/UT191T_1.jpg',
        Medicion: [VAC, VDC, CDC, CAC, R, C, F, T, DUTY, AUTO, DIODO, CONTINUIDAD, RMS, LPF, LOZ, ANALOGBAR],
        Aplicacion: ElECTRICO,
        Botones: {
            PDF: {src:'https://drive.google.com/file/d/1r3GjctzrEKqP0OJOyUV8PIsXlcE4z6cw/view', title: PDF},
            Tienda: {src:'https://www.bigtronica.com/equipos-medicion/multimetros/2831-multimetro-uni-t-pro-ut191t-5053212028312.html', title: TIENDA},
        }
    },
    {
        id: 17,
        Category: 'multimetro',
        Modelo: 'UT61D+',
        VoltajeDC: 1000,
        VoltajeAC: 1000,
        CorrienteDC: 20,
        CorrienteAC: 20,
        Resistencia: 60, //En MegaOhmios
        Capacitancia: 60, // En MicroFaradios
        Frecuencia: 10000, //Khz
        Temperatura: { min: -40, max: 1000 },
        Cuentas: 6000,
        Seguridad: 4,
        ImagenSrc: 'https://meters.uni-trend.com/storage/2022/04/UT61D_1.jpg',
        Medicion: [VAC, VDC, CDC, CAC, R, C, F, T, NCV, DUTY, AUTO, DIODO, CONTINUIDAD, RMS, ANALOGBAR, USB],
        Aplicacion: ELECTRONICA,
        Botones: {
            PDF: {src:'https://drive.google.com/file/d/12n3zkJLKsUsw2QAM65fxV5wQGfpetUOC/view', title: PDF},
            Tienda: {src:'https://www.bigtronica.com/equipos-medicion/multimetros/1033-multimetro-uni-t-ut61d-5053212010331.html', title: TIENDA},
        }
    },
    {
        id: 18,
        Category: 'multimetro',
        Modelo: 'UT121B',
        VoltajeDC: 1000,
        VoltajeAC: 750,
        CorrienteDC: 0,
        CorrienteAC: 0,
        Resistencia: 60, //En MegaOhmios
        Capacitancia: 60, // En MicroFaradios
        Frecuencia: 10000, //Khz
        Temperatura: { min: -40, max: 1000 }, // Centigrados
        Cuentas: 6199,
        Seguridad: 3,
        ImagenSrc: 'https://meters.uni-trend.com/storage/2022/11/UT121B-1-.jpg',
        Medicion: [VDC, VAC, R, C, T, F, AUTO, RMS, DIODO, CONTINUIDAD,NCV],
        Aplicacion: ElECTRICO,
        Botones: {
            PDF: { src: 'https://drive.google.com/file/d/1lg9yQADiL486uBC7ThY9Jl1hVdXl2_7q/view', title: PDF },
            Tienda: { src: 'https://www.bigtronica.com/equipos-medicion/multimetros/3331-multimetro-uni-t-ut121b-5053212033316.html', title: TIENDA }
        }
    },

]

export default Multimetros;