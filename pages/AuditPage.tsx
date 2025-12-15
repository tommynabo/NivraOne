import React from 'react';
import { GradientButton } from '../components/GradientButton';
import { CheckCircle2, ShieldCheck, Microscope, FileText, Video, Workflow, Terminal } from 'lucide-react';

export const AuditPage: React.FC = () => {
    return (
        <div className="pt-32 pb-24 bg-white min-h-screen relative overflow-hidden">
             
             <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
                
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="inline-block bg-blue-50 text-primary px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest mb-4 animate-pulse">
                        Sesión de Arquitectura
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                        De la Teoría a <span className="text-primary">Montar el Sistema</span>
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Esta no es una llamada de ventas. Es una sesión de trabajo intensiva para diseñar, en vivo, la infraestructura IA de tu negocio.
                    </p>
                </div>

                {/* What we get - Cards for Scannability */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <div className="bg-white/80 backdrop-blur p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-primary mb-4">
                            <Microscope size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Disección Operativa</h3>
                        <p className="text-slate-600 text-sm">Analizaré tus procesos actuales para encontrar exactamente dónde pierdes tiempo y dinero.</p>
                    </div>

                    <div className="bg-white/80 backdrop-blur p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full -mr-4 -mt-4"></div>
                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-primary mb-4">
                            <Workflow size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Arquitectura en Vivo</h3>
                        <p className="text-slate-600 text-sm">Diseñaremos en pizarra virtual el diagrama de flujo exacto que tu negocio necesita.</p>
                    </div>

                    <div className="bg-white/80 backdrop-blur p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-primary mb-4">
                            <Terminal size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Plan de Acción</h3>
                        <p className="text-slate-600 text-sm">Stack tecnológico definido (n8n, OpenAI, Claude) y cronograma de implementación.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    {/* Deliverables List */}
                    <div>
                         <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                            Tus Entregables
                        </h3>
                        <div className="bg-soft-gray rounded-2xl p-8 border border-gray-200">
                            <ul className="space-y-4">
                                <li className="flex items-center gap-4 text-slate-800 font-medium">
                                    <div className="bg-white p-2 rounded-full shadow-sm text-primary"><FileText size={20} /></div>
                                    El Mapa de Arquitectura (PDF)
                                </li>
                                <li className="flex items-center gap-4 text-slate-800 font-medium">
                                    <div className="bg-white p-2 rounded-full shadow-sm text-primary"><Video size={20} /></div>
                                    Grabación de la Estrategia
                                </li>
                                <li className="flex items-center gap-4 text-slate-800 font-medium">
                                    <div className="bg-white p-2 rounded-full shadow-sm text-primary"><CheckCircle2 size={20} /></div>
                                    Propuesta de Implementación
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* The BLUE CARD - Guarantee */}
                    <div className="relative group">
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                        <div className="relative bg-primary text-white p-8 md:p-10 rounded-2xl shadow-2xl overflow-hidden">
                             {/* Background pattern */}
                             <div className="absolute top-0 right-0 opacity-10 transform translate-x-10 -translate-y-10">
                                 <ShieldCheck size={200} />
                             </div>

                             <h4 className="text-2xl font-bold flex items-center gap-3 mb-6 relative z-10">
                                <ShieldCheck size={32} className="text-blue-200" />
                                Garantía "Riesgo Cero"
                             </h4>
                             
                             <div className="space-y-4 relative z-10 text-blue-50">
                                 <p className="leading-relaxed font-medium">
                                    Entiendo el escepticismo con la consultoría. Por eso mi promesa es absoluta:
                                 </p>
                                 <ul className="space-y-3 pl-2">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-blue-200" />
                                        <span><strong>100% Reembolsable:</strong> Si al terminar no sientes claridad total, te devuelvo el dinero. Sin preguntas.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-blue-200" />
                                        <span><strong>Deducible:</strong> Si trabajamos juntos, la auditoría te sale <strong>GRATIS</strong> (se descuenta del proyecto).</span>
                                    </li>
                                 </ul>
                             </div>
                        </div>
                    </div>
                </div>

                <div className="text-center border-t border-gray-100 pt-16">
                    <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                        Reserva tu hora abajo y pasemos de la teoría a <span className="text-slate-900 font-bold underline decoration-primary decoration-4 underline-offset-4">montar el sistema</span>.
                    </p>
                    <a href="https://cal.com/tomanavarro/auditoria" target="_blank" rel="noopener noreferrer">
                        <GradientButton className="text-xl px-16 py-6 shadow-blue-500/30 hover:shadow-blue-500/50 shadow-2xl hover:scale-105 transition-all duration-300 rounded-xl">
                            Reservar Auditoría
                        </GradientButton>
                    </a>
                </div>

            </div>
        </div>
    );
};