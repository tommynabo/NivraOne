import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Systems } from './components/Systems';
import { Authority } from './components/Authority';
import { Footer } from './components/Footer';
import { SystemsPage } from './pages/SystemsPage';
import { ContactPage } from './pages/ContactPage';
import { SystemDetailPage } from './pages/SystemDetailPage';
import { AuditPage } from './pages/AuditPage';
import { LegalNotice } from './pages/LegalNotice';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import VaporizeTextCycle, { Tag } from './components/VaporizeTextCycle';
import { SYSTEMS_DATA } from './data/systems';


function App() {
    const [loading, setLoading] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);

        // Audio Logic
        const audio = new Audio("https://cdn.pixabay.com/audio/2022/03/10/audio_510344b58f.mp3");
        audio.volume = 0.5;
        audioRef.current = audio;

        // Try to play audio (will fail if no interaction)
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

        const timer = setTimeout(() => {
            setLoading(false);
        }, 3800);

        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timer);
            if (audioRef.current) audioRef.current.pause();
        };
    }, []);

    // Helper to keep the Navbar interface compatible
    const handleNavigate = (path: string) => {
        if (path === 'home') navigate('/');
        else navigate(`/${path}`);
        window.scrollTo(0, 0);
    };

    if (loading) {
        return (
            <div className='bg-black h-screen w-screen flex flex-col justify-center items-center overflow-hidden px-4'>
                {isMobile ? (
                    <>
                        <div className="h-[60px] w-full flex justify-center items-end">
                            <VaporizeTextCycle
                                texts={["TOMAS"]}
                                font={{ fontFamily: "Inter, sans-serif", fontSize: "45px", fontWeight: 800 }}
                                color="rgb(0, 89, 138)"
                                spread={2} density={4}
                                animation={{ vaporizeDuration: 1.5, fadeInDuration: 0.5, waitDuration: 5 }}
                                direction="left-to-right" alignment="center" tag={Tag.H1}
                            />
                        </div>
                        <div className="h-[60px] w-full flex justify-center items-start">
                            <VaporizeTextCycle
                                texts={["NAVARRO"]}
                                font={{ fontFamily: "Inter, sans-serif", fontSize: "45px", fontWeight: 800 }}
                                color="rgb(0, 89, 138)"
                                spread={2} density={4}
                                animation={{ vaporizeDuration: 1.5, fadeInDuration: 0.5, waitDuration: 5 }}
                                direction="left-to-right" alignment="center" tag={Tag.H1}
                            />
                        </div>
                    </>
                ) : (
                    <VaporizeTextCycle
                        texts={["TOMAS NAVARRO"]}
                        font={{ fontFamily: "Inter, sans-serif", fontSize: "60px", fontWeight: 800 }}
                        color="rgb(0, 89, 138)"
                        spread={2} density={4}
                        animation={{ vaporizeDuration: 1.5, fadeInDuration: 0.5, waitDuration: 0.8 }}
                        direction="left-to-right" alignment="center" tag={Tag.H1}
                    />
                )}
            </div>
        )
    }

    return (
        <div className="font-sans antialiased text-slate-900 min-h-screen">
            <Navbar onNavigate={handleNavigate} currentPath={location.pathname} />

            <main>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Hero onNavigate={handleNavigate} />
                            <Problem />
                            <Systems systems={SYSTEMS_DATA} onViewSystem={(id) => navigate(`/sistemas/${id}`)} variant="landing" />
                            <Authority />
                        </>
                    } />
                    <Route path="/sistemas" element={
                        <SystemsPage
                            onBack={() => navigate('/')}
                            systems={SYSTEMS_DATA}
                            onViewSystem={(id) => navigate(`/sistemas/${id}`)}
                        />
                    } />
                    <Route path="/sistemas/:id" element={<SystemDetailPage onBack={() => navigate(-1)} onScheduleAudit={() => navigate('/auditoria')} />} />
                    <Route path="/contacto" element={<ContactPage />} />
                    <Route path="/auditoria" element={<AuditPage />} />

                    {/* Redirects/Aliases for safety */}
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/audit" element={<AuditPage />} />

                    <Route path="/legal" element={<LegalNotice />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                </Routes>
            </main>

            <Footer onNavigate={handleNavigate} />
        </div>
    );
}

export default App;