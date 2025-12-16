import React, { useState } from 'react';
import { Mail, User, Briefcase, Send, Sparkles, ArrowLeft, ArrowRight } from 'lucide-react';
import { GradientButton } from '../components/GradientButton';
import { motion, AnimatePresence } from 'framer-motion';
import DisplayCards, { DisplayCardProps } from '../components/DisplayCards';
import { cn } from '../lib/utils';

export const ContactPage: React.FC = () => {
    const [expandedCard, setExpandedCard] = useState<string | null>(null);

    const cardsData: DisplayCardProps[] = [
        {
            id: 'about',
            title: "Sobre Mí",
            description: "Construyendo sistemas de IA.",
            date: "Founder",
            icon: <User className="size-5 text-primary" />,
            titleClassName: "text-slate-900",
            onClick: () => setExpandedCard('about')
        },
        {
            id: 'mission',
            title: "Sobre NivraOne",
            description: "Liberar el talento humano de la esclavitud administrativa.",
            date: "Vision",
            // Changed icon color to primary (blue)
            icon: <Sparkles className="size-5 text-primary" />,
            titleClassName: "text-slate-900",
            onClick: () => setExpandedCard('mission')
        },
        {
            id: 'contact',
            title: "Contacto",
            description: "Sin intermediarios. Bandeja de entrada personal.",
            date: "Acción",
            icon: <Mail className="size-5 text-primary" />, // Green -> Primary (Blue) for consistency or keep green? User said "cambia los colores a azul... vision aparece lila, cambialo a azul". Contact was green, I'll keep green or make blue? "cambia los colores a azul de cada carta". Okay, all blue.
            titleClassName: "text-slate-900",
            onClick: () => setExpandedCard('contact')
        }
    ];

    return (
        <div className="pt-24 pb-20 bg-white min-h-screen relative overflow-hidden flex flex-col items-center justify-center">

            {/* Background Decoration - Hidden on Mobile for Performance */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden hidden md:block">
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">

                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 text-center tracking-tight">
                    Ingeniería & <span className="text-primary">Estrategia</span>
                </h1>

                <AnimatePresence mode="wait">
                    {expandedCard === null ? (
                        <motion.div
                            key="stack"
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -20 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="flex flex-col items-center"
                        >
                            <DisplayCards cards={cardsData} />
                            <p className="text-center text-slate-400 mt-8 text-sm animate-pulse font-medium">
                                Haz clic en una carta para desplegar
                            </p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="detail"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                            className="relative w-full"
                        >
                            {/* Expanded Card Container */}
                            <div className={cn(
                                "relative w-full rounded-3xl p-[2px] overflow-hidden shadow-2xl transition-all duration-500",
                                "bg-gradient-to-br from-blue-200 via-white to-blue-200",
                                "hover:shadow-[0_0_40px_rgba(0,89,138,0.15)]"
                            )}>

                                {/* Inner Card Content */}
                                <div className="bg-white/95 backdrop-blur-xl rounded-[22px] p-8 md:p-12 min-h-[500px] flex flex-col relative overflow-hidden">

                                    {/* Decoration Glows inside card - Hidden on Mobile */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none hidden md:block"></div>
                                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/5 rounded-full blur-[60px] -ml-12 -mb-12 pointer-events-none hidden md:block"></div>

                                    {/* --- ABOUT SECTION --- */}
                                    {expandedCard === 'about' && (
                                        <div className="flex flex-col gap-8 flex-1 relative z-10">
                                            <div className="flex items-center justify-between border-b border-gray-100 pb-6">
                                                <div className="flex items-center gap-4">
                                                    {/* User Icon Removed */}
                                                    <div>
                                                        <p className="text-sm font-bold text-primary uppercase tracking-wider">El Ingeniero <span className="text-blue-500 ml-1">Founder</span></p>
                                                        <h2 className="text-3xl font-bold text-slate-900">Tomás Navarro</h2>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                                                <div className="relative group">
                                                    <div className="absolute -inset-2 bg-gradient-to-br from-primary to-blue-300 rounded-2xl opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
                                                    <img
                                                        src="/profile-contact.jpg"
                                                        alt="Tomas"
                                                        className="w-40 h-40 rounded-xl object-cover shadow-lg relative z-10 border-2 border-white"
                                                    />
                                                </div>
                                                <div className="prose text-slate-600 flex-1">
                                                    <p className="text-xl font-bold text-slate-900 mb-6 leading-relaxed">
                                                        "Construyendo sistemas de IA."
                                                    </p>
                                                    <div className="space-y-4 text-base leading-relaxed text-slate-600">
                                                        {/* Removed paragraph as requested */}
                                                        <p>
                                                            Vivimos apagando fuegos, atrapados en la operativa, siendo el cuello de botella de nuestro propio crecimiento. <strong>Eso no es emprender, es autoempleo de alto riesgo.</strong>
                                                        </p>
                                                        <p className="text-slate-900 font-medium">
                                                            Mi obsesión es eliminar la fricción humana.
                                                        </p>
                                                        <p>
                                                            Diseño arquitecturas de Inteligencia Artificial que trabajan mientras duermes. Activos digitales que ejecutan procesos complejos con precisión quirúrgica.
                                                        </p>
                                                        <p>
                                                            Para que tú recuperes lo único que no se puede recuperar: <strong>Tu Tiempo.</strong>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* --- MISSION SECTION (Updated to Blue & New Star Image) --- */}
                                    {expandedCard === 'mission' && (
                                        <div className="flex flex-col gap-8 flex-1 relative z-10">
                                            <div className="flex items-center justify-between border-b border-gray-100 pb-6">
                                                <div className="flex items-center gap-4">
                                                    {/* Icon Removed */}
                                                    <div>
                                                        <p className="text-sm font-bold text-primary uppercase tracking-wider">La Visión</p>
                                                        <h2 className="text-3xl font-bold text-slate-900">NivraOne</h2>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden group hover:border-blue-200 transition-colors">
                                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-all duration-500">
                                                    {/* Replaced Icon with Image */}
                                                    <img src="/star-symbol.png" alt="Star" className="w-[120px] h-[120px] object-contain drop-shadow-[0_0_15px_rgba(0,89,138,0.5)]" />
                                                </div>
                                                <p className="text-xl text-slate-800 italic leading-relaxed font-serif relative z-10">
                                                    "Liberar el talento humano de la esclavitud administrativa. Queremos que te dediques exclusivamente a pensar, crear y liderar. Las máquinas se encargarán del resto."
                                                </p>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                                    <h3 className="font-bold text-slate-900 text-lg mb-2">Ingeniería Real</h3>
                                                    <p className="text-slate-500">Nada de "prompt engineering" básico. Construimos software a medida.</p>
                                                </div>
                                                <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                                    <h3 className="font-bold text-slate-900 text-lg mb-2">Sin Agencias</h3>
                                                    <p className="text-slate-500">Trato directo. Sin account managers que no saben programar.</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* --- CONTACT SECTION (Updated to Blue) --- */}
                                    {expandedCard === 'contact' && (
                                        <div className="flex flex-col gap-8 flex-1 relative z-10">
                                            <div className="flex items-center justify-between border-b border-gray-100 pb-6">
                                                <div className="flex items-center gap-4">
                                                    {/* Icon Removed */}
                                                    <div>
                                                        <p className="text-sm font-bold text-primary uppercase tracking-wider">Acción Inmediata</p>
                                                        <h2 className="text-3xl font-bold text-slate-900">Contacto Directo</h2>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
                                                <div className="flex flex-col justify-center space-y-6">
                                                    <p className="text-lg text-slate-600 leading-relaxed">
                                                        Sin formularios interminables. Sin intermediarios. Tu mensaje llega directamente a mi bandeja de entrada personal.
                                                    </p>
                                                    <a href="mailto:tomasnivraone@gmail.com" className="group flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-gray-200 hover:border-primary hover:bg-blue-50/50 transition-all">
                                                        <div className="bg-white p-2 rounded-full shadow-sm text-primary group-hover:scale-110 transition-transform flex-shrink-0">
                                                            <Mail size={20} />
                                                        </div>
                                                        <span className="font-bold text-slate-900 text-sm sm:text-lg group-hover:text-primary transition-colors break-all">tomasnivraone@gmail.com</span>
                                                    </a>
                                                </div>

                                                <form className="space-y-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-lg">
                                                    <div>
                                                        <label className="text-xs font-bold text-slate-400 uppercase ml-1 mb-1 block">Tu Email</label>
                                                        <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                                                    </div>
                                                    <div>
                                                        <label className="text-xs font-bold text-slate-400 uppercase ml-1 mb-1 block">Mensaje</label>
                                                        <textarea className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all h-32 resize-none"></textarea>
                                                    </div>
                                                    <GradientButton className="w-full">
                                                        <Send size={18} /> Enviar Mensaje
                                                    </GradientButton>
                                                </form>
                                            </div>
                                        </div>
                                    )}

                                    <div className="pt-8 mt-auto border-t border-gray-100 flex items-center justify-between">
                                        <button
                                            onClick={() => setExpandedCard(null)}
                                            className="group flex items-center text-sm font-bold text-slate-400 hover:text-primary transition-colors"
                                        >
                                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mr-2 group-hover:bg-primary group-hover:text-white transition-all">
                                                <ArrowLeft size={16} />
                                            </div>
                                            Volver al Stack
                                        </button>

                                        {/* Bottom-right dots removed */}
                                    </div>

                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </div>
    );
};