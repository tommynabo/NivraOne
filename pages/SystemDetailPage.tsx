import React, { useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, Check, Play, Zap } from 'lucide-react';
import { GradientButton } from '../components/GradientButton';
import { SYSTEMS_DATA } from '../data/systems';

interface SystemDetailPageProps {
    // system prop removed, using URL param
    onBack: () => void;
    onScheduleAudit: () => void;
}

export const SystemDetailPage: React.FC<SystemDetailPageProps> = ({ onBack, onScheduleAudit }) => {
    const { id } = useParams<{ id: string }>();

    // Find system by ID
    const system = useMemo(() => SYSTEMS_DATA.find(s => s.id === id), [id]);

    // If not found, redirect to systems page (or show 404, but redirect is safer)
    if (!system) {
        return <Navigate to="/sistemas" replace />;
    }

    return (
        <div className="pt-24 pb-12 bg-white min-h-screen">
            <div className="container mx-auto px-6 md:px-12 mb-8">
                <GradientButton variant="variant" onClick={onBack} className="min-w-0 px-4 py-2 mb-8 border-gray-300 text-slate-600 hover:bg-gray-50">
                    <ArrowLeft size={16} /> <span className="ml-2">Volver</span>
                </GradientButton>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Video Area */}
                    <div>
                        <div className="rounded-2xl overflow-hidden shadow-2xl bg-slate-900 aspect-video relative group border border-slate-800">
                            <img
                                src={`https://picsum.photos/1200/800?random=${system.videoId}&grayscale`}
                                alt="Video Thumbnail"
                                className="w-full h-full object-cover opacity-50"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                                    <Play className="fill-white text-white ml-2" size={32} />
                                </button>
                            </div>
                        </div>
                        <p className="text-center text-sm text-slate-500 mt-4">Demo detallada de 5 minutos</p>
                    </div>

                    {/* Right: Info */}
                    <div>
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                            <Zap size={14} /> Sistema Llave en Mano
                        </div>
                        <h1 className="text-4xl font-bold text-slate-900 mb-2">{system.title}</h1>
                        <h2 className="text-xl text-primary font-medium mb-6">{system.subtitle}</h2>

                        {system.detailHeadline && (
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{system.detailHeadline}</h3>
                        )}

                        <p className="text-slate-700 text-lg leading-relaxed mb-8">
                            {system.longDescription || system.description}
                        </p>

                        <div className="bg-soft-gray p-6 rounded-xl border border-gray-200 mb-8">
                            <h3 className="font-bold text-slate-900 mb-4">Lo que incluye la instalación:</h3>
                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="text-4xl font-bold text-slate-900">{system.price}</span>
                                <span className="text-lg font-medium text-slate-500">inicio</span>
                            </div>
                            <div className="flex items-baseline gap-2 mb-6">
                                <span className="text-2xl font-bold text-primary">+ {system.monthlyFee}</span>
                                <span className="text-sm font-medium text-slate-500">/ mes (mantenimiento)</span>
                            </div>

                            <div className="space-y-4 mb-8 text-left">
                                <div className="flex gap-3">
                                    <div className="bg-blue-50 p-2 rounded-full h-fit">
                                        <Check className="w-4 h-4 text-primary" />
                                    </div>
                                    <span className="text-sm text-slate-600">Instalación y configuración completa</span>
                                </div>
                                <div className="flex gap-3">
                                    <div className="bg-blue-50 p-2 rounded-full h-fit">
                                        <Check className="w-4 h-4 text-primary" />
                                    </div>
                                    <span className="text-sm text-slate-600">Soporte y optimización continua</span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-gray-100">
                            {/* Price removed, just CTA */}
                        </div>
                        <GradientButton onClick={onScheduleAudit} className="w-full sm:w-auto px-8 py-4 text-lg">
                            Solicitar Este Sistema
                        </GradientButton>
                    </div>
                </div>
            </div>
        </div>

    );
};