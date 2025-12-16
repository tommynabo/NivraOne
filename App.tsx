import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Systems, SystemData } from './components/Systems';
import { Authority } from './components/Authority';
import { Footer } from './components/Footer';
import { SystemsPage } from './pages/SystemsPage';
import { ContactPage } from './pages/ContactPage';
import { SystemDetailPage } from './pages/SystemDetailPage';
import { AuditPage } from './pages/AuditPage';
import { LegalNotice } from './pages/LegalNotice';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import VaporizeTextCycle, { Tag } from './components/VaporizeTextCycle';

// Centralized Data
const SYSTEMS_DATA: SystemData[] = [
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

type Page = 'home' | 'systems' | 'contact' | 'system-detail' | 'audit' | 'legal' | 'privacy';

function App() {
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState<Page>('home');
    const [selectedSystemId, setSelectedSystemId] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);

        // Create audio instance
        const audio = new Audio("https://cdn.pixabay.com/audio/2022/03/10/audio_510344b58f.mp3");
        audio.volume = 0.5;
        audioRef.current = audio;

        const playAudio = async () => {
            try {
                await audio.play();
            } catch (err) {
                // Autoplay blocked handling
                const enableAudio = () => {
                    audio.play().catch(() => { });
                    document.removeEventListener('click', enableAudio);
                    document.removeEventListener('keydown', enableAudio);
                };
                document.addEventListener('click', enableAudio);
                document.addEventListener('keydown', enableAudio);
            }
        };

        playAudio();

        // Loader timer
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3800);

        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timer);
            if (audioRef.current) {
                audioRef.current.pause();
            }
        };
    }, []);

    const navigate = (page: string) => {
        if (page === 'home' || page === 'systems' || page === 'contact' || page === 'audit' || page === 'legal' || page === 'privacy') {
            setCurrentPage(page as Page);
        }
        window.scrollTo(0, 0);
    };

    const handleViewSystem = (id: string) => {
        setSelectedSystemId(id);
        setCurrentPage('system-detail');
        window.scrollTo(0, 0);
    };

    const getSelectedSystem = () => SYSTEMS_DATA.find(s => s.id === selectedSystemId) || SYSTEMS_DATA[0];

    if (loading) {
        return (
            <div className='bg-black h-screen w-screen flex flex-col justify-center items-center overflow-hidden px-4'>
                {isMobile ? (
                    <>
                        {/* Mobile: Two lines animating simultaneously */}
                        <div className="h-[60px] w-full flex justify-center items-end">
                            <VaporizeTextCycle
                                texts={["TOMAS"]}
                                font={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "45px",
                                    fontWeight: 800
                                }}
                                color="rgb(0, 89, 138)"
                                spread={2}
                                density={4}
                                animation={{
                                    vaporizeDuration: 1.5,
                                    fadeInDuration: 0.5,
                                    waitDuration: 5
                                }}
                                direction="left-to-right"
                                alignment="center"
                                tag={Tag.H1}
                            />
                        </div>
                        <div className="h-[60px] w-full flex justify-center items-start">
                            <VaporizeTextCycle
                                texts={["NAVARRO"]}
                                font={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "45px",
                                    fontWeight: 800
                                }}
                                color="rgb(0, 89, 138)"
                                spread={2}
                                density={4}
                                animation={{
                                    vaporizeDuration: 1.5,
                                    fadeInDuration: 0.5,
                                    waitDuration: 5
                                }}
                                direction="left-to-right"
                                alignment="center"
                                tag={Tag.H1}
                            />
                        </div>
                    </>
                ) : (
                    /* Desktop: Single line */
                    <VaporizeTextCycle
                        texts={["TOMAS NAVARRO"]}
                        font={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "60px",
                            fontWeight: 800
                        }}
                        color="rgb(0, 89, 138)"
                        spread={2}
                        density={4}
                        animation={{
                            vaporizeDuration: 1.5,
                            fadeInDuration: 0.5,
                            waitDuration: 0.8
                        }}
                        direction="left-to-right"
                        alignment="center"
                        tag={Tag.H1}
                    />
                )}
            </div>
        )
    }

    return (
        <div className="font-sans antialiased text-slate-900 min-h-screen">
            <Navbar onNavigate={navigate} />

            <main>
                {currentPage === 'home' && (
                    <>
                        <Hero onNavigate={navigate} />
                        <Problem />
                        {/* Variant 'landing' makes cards look like gradient buttons */}
                        <Systems systems={SYSTEMS_DATA} onViewSystem={handleViewSystem} variant="landing" />
                        <Authority />
                    </>
                )}

                {currentPage === 'systems' && (
                    <SystemsPage
                        onBack={() => navigate('home')}
                        systems={SYSTEMS_DATA}
                        onViewSystem={handleViewSystem}
                    />
                )}

                {currentPage === 'contact' && (
                    <ContactPage />
                )}

                {currentPage === 'audit' && (
                    <AuditPage />
                )}

                {currentPage === 'system-detail' && (
                    <SystemDetailPage
                        system={getSelectedSystem()}
                        onBack={() => navigate('home')}
                        onScheduleAudit={() => navigate('audit')}
                    />
                )}

                {currentPage === 'legal' && <LegalNotice />}
                {currentPage === 'privacy' && <PrivacyPolicy />}
            </main>

            <Footer onNavigate={navigate} />
        </div>
    );
}

export default App;