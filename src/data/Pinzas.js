import Botones from "./Botones";
import { Medidas, Aplicacion } from "./Medidas";
const { VAC, VDC, CDC, CAC, R, C, T, F, DIODO, CONTINUIDAD, AUTO, DUTY, NCV, RMS, BL, hFE,
    VFC, RPM, TESTB, LIVE, LPF, LOZ, ANALOGBAR, USB, INRUSH } = Medidas;
const { ElECTRICO } = Aplicacion
const { TIENDA, PDF, APP } = Botones

const Pinzas = [
    {
        id: 20,
        Category: 'pinza',
        Modelo: 'UT200A+',
        Glamp: 28, // En mm
        VoltajeDC: 600,
        VoltajeAC: 600,
        CorrienteDC: 0,
        CorrienteAC: 200,
        Resistencia: 3, //En MegaOhmios
        Capacitancia: 0, // En MicroFaradios
        Frecuencia: 10, //Khz
        Temperatura: { min: 0, max: 0 }, // Centigrados
        Cuentas: 3099,
        Seguridad: 2,
        ImagenSrc: 'https://meters.uni-trend.com/storage/2023/02/UT200A-1.jpg',
        Medicion: [VAC, VDC, CAC, R, F, DIODO, CONTINUIDAD, LIVE, RMS],
        Aplicacion: ElECTRICO,
        Botones: {
            PDF: { src: 'https://drive.google.com/file/d/1M0RNf2zMiMlM7euuaLYoGYYfWahxLTs3/view', title: PDF },
            Tienda: { src: 'https://www.bigtronica.com/equipos-medicion/pinzas-voltiamperimetricas/2510-pinza-voltiamperimetrica-uni-t-ut200a-5053212025106.html', title: TIENDA }
        }
    },
    {
        id: 21,
        Category: 'pinza',
        Modelo: 'UT202A+',
        Glamp: 28, // En mm
        VoltajeDC: 600,
        VoltajeAC: 600,
        CorrienteDC: 0,
        CorrienteAC: 600,
        Resistencia: 60, //En MegaOhmios
        Capacitancia: 60, // En MicroFaradios
        Frecuencia: 10000, //Khz
        Temperatura: { min: 0, max: 0 }, // Centigrados
        Cuentas: 6000,
        Seguridad: 2,
        ImagenSrc: 'https://meters.uni-trend.com/storage/2022/04/UT202A_1.jpg',
        Medicion: [RMS, DIODO, CONTINUIDAD, DUTY, NCV, AUTO, VDC, VAC, CAC, R, C, F],
        Aplicacion: ElECTRICO,
        Botones: {
            PDF: { src: 'https://drive.google.com/file/d/1xuzUlbIYQ5RWoD5-ABRTJj0fBxVGTpRU/view', title: PDF },
            Tienda: { src: 'https://www.bigtronica.com/equipos-medicion/pinzas-voltiamperimetricas/1034-pinza-voltiamperimetrica-uni-t-ut202a-6935750520277.html', title: TIENDA }
        },
        checked: false
    },
    {
        id: 22,
        Category: 'pinza',
        Modelo: 'UT200B+',
        Glamp: 28, // En mm
        VoltajeDC: 600,
        VoltajeAC: 600,
        CorrienteDC: 0,
        CorrienteAC: 600,
        Resistencia: 3, //En MegaOhmios
        Capacitancia: 1, // En MicroFaradios
        Frecuencia: 10, //Khz
        Temperatura: { min: 0, max: 0 }, // Centigrados
        Cuentas: 3099,
        Seguridad: 2,
        ImagenSrc: 'https://meters.uni-trend.com/storage/2023/02/UT200B-1.jpg',
        Medicion: [VDC, VAC, CAC, R, C, F, DIODO, CONTINUIDAD],
        Aplicacion: ElECTRICO,
        Botones: {
            PDF: { src: 'https://drive.google.com/file/d/1evzYRy8InQShh7qs93EJIeyJ7o8tOm9y/view', title: PDF },
            Tienda: { src: 'https://www.bigtronica.com/equipos-medicion/pinzas-voltiamperimetricas/3330-pinza-voltiamperimetrica-uni-t-ut200b-5053212033309.html', title: TIENDA }
        }
    },
    {
        id: 23,
        Category: 'pinza',
        Modelo: 'UT202+',
        Glamp: 28, // En mm
        VoltajeDC: 600,
        VoltajeAC: 600,
        CorrienteDC: 0,
        CorrienteAC: 600,
        Resistencia: 40, //En MegaOhmios
        Capacitancia: 4, // En MicroFaradios
        Frecuencia: 0, //Khz
        Temperatura: { min: -40, max: 1000 }, // Centigrados
        Cuentas: 4000,
        Seguridad: 2,
        ImagenSrc: 'https://meters.uni-trend.com/storage/2022/04/UT202A_1.jpg',
        Medicion: [VDC, VAC, CAC, R, C, T, AUTO, RMS, DIODO, CONTINUIDAD,],
        Aplicacion: ElECTRICO,
        Botones: {
            PDF: { src: 'https://drive.google.com/file/d/1CBEqsov1407BjQK03xfaOucXCrxsFDmZ/view?usp=sharing', title: PDF },
            Tienda: { src: 'https://www.bigtronica.com/equipos-medicion/pinzas-voltiamperimetricas/1867-pinza-voltiamperimetrica-uni-t-ut202-6935750520260.html', title: TIENDA }
        }
    },
    {
        id: 24,
        Category: 'pinza',
        Modelo: 'UT203+',
        Glamp: 28, // En mm
        VoltajeDC: 600,
        VoltajeAC: 600,
        CorrienteDC: 400,
        CorrienteAC: 400,
        Resistencia: 40, //En MegaOhmios
        Capacitancia: 40, // En MicroFaradios
        Frecuencia: 10000, //Khz
        Temperatura: { min: -40, max: 1000 }, // Centigrados
        Cuentas: 4000,
        Seguridad: 2,
        ImagenSrc: 'https://meters.uni-trend.com/storage/2022/04/UT202A_1.jpg',
        Medicion: [VDC, VAC, CAC, CDC, R, C, T, F, AUTO, RMS, DIODO, CONTINUIDAD],
        Aplicacion: ElECTRICO,
        Botones: {
            PDF: { src: 'https://drive.google.com/file/d/1CBEqsov1407BjQK03xfaOucXCrxsFDmZ/view', title: PDF },
            Tienda: { src: 'https://www.bigtronica.com/equipos-medicion/pinzas-voltiamperimetricas/2983-pinza-voltiamperimetrica-uni-t-ut203-5053212029838.html', title: TIENDA }
        }
    },
    {
        id: 25,
        Category: 'pinza',
        Modelo: 'UT202BT',
        Glamp: 28, // En mm
        VoltajeDC: 600,
        VoltajeAC: 600,
        CorrienteDC: 0,
        CorrienteAC: 600,
        Resistencia: 6, //En MegaOhmios
        Capacitancia: 100, // En MicroFaradios
        Frecuencia: 1, //Khz
        Temperatura: { min: -40, max: 1000 }, // Centigrados
        Cuentas: 9999,
        Seguridad: 2,
        ImagenSrc: 'https://meters.uni-trend.com/storage/2022/04/UT202BT-1.jpg',
        Medicion: [VDC, VAC, CAC, R, C, T, F, AUTO, RMS, DIODO, CONTINUIDAD, NCV, APP, INRUSH, LPF, BL],
        Aplicacion: ElECTRICO,
        Botones: {
            PDF: { src: 'https://drive.google.com/file/d/1u1BJSBMkiE1p1Ho43okKFvKrxUUMdyFV/view', title: PDF },
            Tienda: { src: 'https://www.bigtronica.com/equipos-medicion/pinzas-voltiamperimetricas/3097-pinza-voltiamperimetrica-uni-t-ut202bt-5053212030971.html', title: TIENDA },
            APP: { src: 'https://drive.google.com/file/d/1tQzB5mPFfjIES55YPoiMbC_ZPBejyxf-/view', title: APP }
        }
    },
    {
        id: 26,
        Category: 'pinza',
        Modelo: 'UT210E',
        Glamp: 17, // En mm
        VoltajeDC: 600,
        VoltajeAC: 600,
        CorrienteDC: 100,
        CorrienteAC: 100,
        Resistencia: 20, //En MegaOhmios
        Capacitancia: 20, // En MicroFaradios
        Frecuencia: 0, //Khz
        Temperatura: { min: 0, max: 0 }, // Centigrados
        Cuentas: 2000,
        Seguridad: 2,
        ImagenSrc: 'https://meters.uni-trend.com/storage/2022/04/UT210E_1.jpg',
        Medicion: [VDC, VAC, CAC, CDC, R, C, F, AUTO, RMS, DIODO, CONTINUIDAD, NCV, VFC],
        Aplicacion: ElECTRICO,
        Botones: {
            PDF: { src: 'https://drive.google.com/file/d/15BvLt6j5N5DeL5PDagXxviqnGrpj6AO7/view', title: PDF },
            Tienda: { src: 'https://www.bigtronica.com/equipos-medicion/pinzas-voltiamperimetricas/2828-pinza-voltiamperimetrica-uni-t-ut210e-5053212028282.html', title: TIENDA }
        }
    },
    {
        id: 27,
        Category: 'pinza',
        Modelo: 'UT207B',
        Glamp: 42, // En mm
        VoltajeDC: 1000,
        VoltajeAC: 1000,
        CorrienteDC: 1000,
        CorrienteAC: 1000,
        Resistencia: 60, //En MegaOhmios
        Capacitancia: 60, // En MicroFaradios
        Frecuencia: 10_000, //Khz
        Temperatura: { min: 0, max: 0 }, // Centigrados
        Cuentas: 6000,
        Seguridad: 3,
        ImagenSrc: 'https://meters.uni-trend.com/storage/2022/04/UT207B_1.jpg',
        Medicion: [VDC, VAC, CAC, CDC, R, C, F, AUTO, RMS, DIODO, CONTINUIDAD, DUTY, NCV],
        Aplicacion: ElECTRICO,
        Botones: {
            PDF: { src: 'https://drive.google.com/file/d/1njr7mn7frhjG7DAi-iIbky1IVQYSJq7A/view', title: PDF },
            Tienda: { src: 'https://www.bigtronica.com/equipos-medicion/pinzas-voltiamperimetricas/3267-pinza-voltiamperimetrica-uni-t-ut207b-5053212032678.html', title: TIENDA }
        }
    },
    {
        id: 28,
        Category: 'pinza',
        Modelo: 'UT204+',
        Glamp: 28, // En mm
        VoltajeDC: 600,
        VoltajeAC: 600,
        CorrienteDC: 600,
        CorrienteAC: 600,
        Resistencia: 60, //En MegaOhmios
        Capacitancia: 60, // En MicroFaradios
        Frecuencia: 10000, //Khz
        Temperatura: { min: -40, max: 1000 }, // Centigrados
        Cuentas: 6000,
        Seguridad: 2,
        ImagenSrc: 'https://meters.uni-trend.com/storage/2022/04/UT202A_1.jpg',
        Medicion: [VDC, VAC, CAC, CDC, R, C, T, F, AUTO, RMS, DIODO, CONTINUIDAD],
        Aplicacion: ElECTRICO,
        Botones: {
            PDF: { src: 'https://drive.google.com/file/d/1t6elwVzlcTIn7WklScaTqCiAJNvipwRG/view', title: PDF },
            Tienda: { src: 'https://www.bigtronica.com/equipos-medicion/pinzas-voltiamperimetricas/2829-pinza-voltiamperimetrica-uni-t-ut204-5053212028299.html', title: TIENDA }
        }
    },

]

export default Pinzas;