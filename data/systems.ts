export interface SystemData {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    longDescription?: string;
    detailHeadline?: string;
    price: string;
    monthlyFee: string;
    videoId: number;
    videoDriveId?: string;
    features: string[];
}

export const SYSTEMS_DATA: SystemData[] = [
    {
        id: 'content-engine',
        title: "The Content Engine",
        subtitle: "Omnicanalidad Automática",
        description: "Este sistema es una arquitectura completa de IA que toma tu contenido pilar y lo desatomiza.",
        longDescription: "Este sistema es una arquitectura completa de IA que toma tu contenido pilar (YouTube, Zoom o Notas de Voz) y lo desatomiza. Usamos Claude 3.5 Sonnet para analizar tu semántica y replicar tu estilo de escritura, generando hilos virales, posts de LinkedIn con ganchos probados y newsletters que la gente realmente quiere leer. Incluye módulos de Investigación de Competencia y Generación de Ideas para que nunca te enfrentes a la hoja en blanco.",
        detailHeadline: "Tu máquina de omnipresencia.",
        price: "1.000€",
        monthlyFee: "200€",
        videoId: 10,
        videoDriveId: "1HqM9h7RMo2ZyXBvH7J2ryiCc0ZMxOipW",
        features: [
            "De YouTube/Audio a 10 piezas de texto",
            "Sistema \"Parasite\" (Análisis de Tendencias)",
            "Redacción de Hilos y Newsletters",
            "Clonado de Voz y Estilo (Claude 3.5)",
            "Programación directa en borradores"
        ]
    },
    {
        id: 'sales-sniper',
        title: "The Sales Sniper",
        subtitle: "Cualificación & Research",
        description: "Este sistema elimina la improvisación de tu proceso comercial.",
        longDescription: "Este sistema elimina la improvisación de tu proceso comercial. Fusionamos Meeting Prep Monster con un generador de propuestas visuales. Antes de que entres al Zoom, la IA ya ha escaneado la huella digital de tu prospecto, ha encontrado sus puntos débiles y ha redactado las preguntas exactas para cerrar la venta. Además, genera un borrador de tu presentación comercial adaptado al cliente. Tú te centras en conectar y cerrar; el sistema se encarga de la inteligencia y la documentación.",
        detailHeadline: "No vuelvas a entrar a una reunión a ciegas.",
        price: "1.000€",
        monthlyFee: "200€",
        videoId: 20,
        videoDriveId: "1cOaEWTiqqHaLHx4RKux_XuehRlScZQSX",
        features: [
            "Investigación Profunda (Web + LinkedIn)",
            "Detección de Dolores y Ocultos",
            "Generación de Informes de Preparación",
            "Creación Automática de Presentación (Slides)",
            "Sincronización CRM sin tocar teclas"
        ]
    },
    {
        id: 'custom-architecture',
        title: "Arquitectura a Medida",
        subtitle: "Operaciones & Escala",
        description: "Diseño flujos de ingeniería específicos para resolver cuellos de botella operativos.",
        longDescription: "Para negocios que han superado la fase estándar y tienen dolores de crecimiento únicos. Diseño flujos de ingeniería específicos para resolver cuellos de botella operativos: desde la gestión automática de facturas y contratos, hasta la coordinación de equipos o logística. Analizamos tu proceso paso a paso, lo limpiamos de ineficiencias y construimos un \"Sistema de Sombra\" en n8n que trabaja 24/7 sin errores humanos.",
        detailHeadline: "Si es repetitivo, debe morir.",
        price: "Desde 1.500€",
        monthlyFee: "A consultar",
        videoId: 30,
        videoDriveId: "1yIrxFoZdWT0hjbqUlnWXB1nYsKceL4oG",
        features: [
            "Automatización de Procesos Internos",
            "Onboarding Complejo & Legal",
            "Gestión de Logística o RRHH",
            "Dashboards Financieros en Tiempo Real",
            "Conexión de APIs personalizadas"
        ]
    }
];
