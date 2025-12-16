export interface SystemData {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    longDescription?: string;
    price: string;
    videoId: number;
    features: string[];
}

export const SYSTEMS_DATA: SystemData[] = [
    {
        id: 'sales-sniper',
        title: "The Sales Sniper",
        subtitle: "Cualificación & Research",
        description: "Tu IA investiga la web de tu prospecto, analiza sus últimos posts y te prepara un 'Briefing de Guerra' antes de la reunión.",
        longDescription: "Deja de entrar 'en frío' a las llamadas. Este bot visita la web de tu lead, escanea su LinkedIn, busca noticias recientes sobre su empresa y compila un informe PDF de 1 página con: Dolores probables, Puntos de conexión personal y Estrategia de cierre sugerida. Todo entregado en tu Slack 15 minutos antes de la reunión.",
        price: "1.000€",
        videoId: 20,
        features: [
            "Scraping de web y LinkedIn del lead",
            "Análisis de dolores y puntos de mejora",
            "Generación de ganchos personalizados",
            "Actualización automática del CRM",
            "Alertas en Slack pre-reunión"
        ]
    },
    {
        id: 'content-engine',
        title: "The Content Engine",
        subtitle: "Omnicanalidad Automática",
        description: "Convierte 1 vídeo de YouTube en 10 piezas de contenido (LinkedIn, Newsletter, Twitter) manteniendo tu tono de voz.",
        longDescription: "Este sistema es una arquitectura completa de IA que toma tu contenido pilar (YouTube o Zoom) y lo desatomiza. Usamos Claude 3.5 Sonnet para analizar tu semántica y replicar tu estilo de escritura, generando hilos virales, posts de LinkedIn con ganchos probados y newsletters que la gente realmente quiere leer.",
        price: "1.000€",
        videoId: 10,
        features: [
            "Transcripción y análisis de estilo",
            "Generación de hilos de Twitter & LinkedIn",
            "Newsletter formateada en HTML",
            "Programación automática (Buffer/Metricool)",
            "Generación de Clips Cortos (Beta)"
        ]
    },
    {
        id: 'client-concierge',
        title: "The Client Concierge",
        subtitle: "Onboarding Automático",
        description: "La experiencia 'Amazon' para tus servicios. Contratos generados y carpetas creadas en 0 segundos tras cerrar la venta.",
        longDescription: "El momento de mayor arrepentimiento del comprador es justo después de pagar. Elimina eso con velocidad. En el segundo que Stripe confirma el pago: se genera y envía el contrato, se crean las carpetas de Drive, se invita al cliente a Slack y recibe un vídeo de bienvenida personalizado. Sin que tú muevas un dedo.",
        price: "1.000€",
        videoId: 30,
        features: [
            "Generación de Contrato PDF y envío a firma",
            "Creación de carpetas Google Drive",
            "Alta en Slack/Notion del cliente",
            "Email de bienvenida secuenciado",
            "Formulario de Onboarding Automático"
        ]
    }
];
