import React from 'react';
import { GradientButton } from '../components/GradientButton';
import { CheckCircle2, ShieldCheck, Microscope, FileText, Video, Workflow, Terminal, ArrowRight } from 'lucide-react';

export const AuditPage: React.FC = () => {
    return (
        <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl">

                {/* Header Simple */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                        De la Teoría a <span className="text-primary">Montar el Sistema</span>
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        Esta no es una llamada de ventas. Es una sesión de trabajo intensiva para diseñar, en vivo, la infraestructura IA de tu negocio.
                    </p>
                </div>

                {/* Main Offer Card */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2">

                        {/* Left: What you get */}
                        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-100">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">En 60 minutos:</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <div className="bg-blue-50 p-2 rounded-lg text-primary mt-1"><Microscope size={20} /></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Disección Operativa</h4>
                                        <p className="text-sm text-slate-600">Encuentro dónde pierdes dinero.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="bg-blue-50 p-2 rounded-lg text-primary mt-1"><Workflow size={20} /></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Arquitectura en Vivo</h4>
                                        <p className="text-sm text-slate-600">Diseño el diagrama de flujo exacto.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="bg-blue-50 p-2 rounded-lg text-primary mt-1"><Terminal size={20} /></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Plan de Acción</h4>
                                        <p className="text-sm text-slate-600">Stack tecnológico y cronograma.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Right: The Guarantee & Price */}
                        <div className="p-8 md:p-12 bg-slate-900 text-white flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-2 text-blue-300 font-bold mb-4 uppercase tracking-wider text-sm">
                                    <ShieldCheck size={18} />
                                    Garantía Riesgo Cero
                                </div>
                                <h3 className="text-3xl font-bold mb-6 text-white">
                                    Si no te sirve, <br />
                                    <span className="text-blue-400">te devuelvo el 100%.</span>
                                </h3>
                                <p className="text-slate-400 mb-8 leading-relaxed">
                                    Si al terminar la sesión no tienes claridad absoluta, te reembolso el dinero. Sin preguntas.
                                </p>

                                <div className="p-4 bg-white/10 rounded-xl mb-8 border border-white/10">
                                    <p className="font-medium text-sm flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-green-400" />
                                        100% Deducible si contratas un Sistema
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-slate-400">Inversión única</span>
                                    <span className="text-3xl font-bold">197€</span>
                                </div>
                                <a href="https://cal.com/tomanavarro/auditoria" target="_blank" rel="noopener noreferrer" className='block'>
                                    <GradientButton className="w-full justify-center py-4 text-lg font-bold">
                                        Reservar Auditoría <ArrowRight className="ml-2" size={20} />
                                    </GradientButton>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Deliverables Simple */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200">
                        <FileText className="w-8 h-8 mx-auto text-primary mb-3" />
                        <h4 className="font-bold text-slate-900">Mapa de Arquitectura (PDF)</h4>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-200">
                        <Video className="w-8 h-8 mx-auto text-primary mb-3" />
                        <h4 className="font-bold text-slate-900">Grabación de la Estrategia</h4>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-200">
                        <CheckCircle2 className="w-8 h-8 mx-auto text-primary mb-3" />
                        <h4 className="font-bold text-slate-900">Propuesta de Implementación</h4>
                    </div>
                </div>

            </div>
        </div>
    );
};