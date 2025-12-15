import React from 'react';
import { Systems, SystemData } from '../components/Systems';
import { GradientButton } from '../components/GradientButton';

interface SystemsPageProps {
    onBack: () => void;
    systems: SystemData[];
    onViewSystem: (id: string) => void;
}

export const SystemsPage: React.FC<SystemsPageProps> = ({ systems, onViewSystem }) => {
    return (
        <div className="pt-24 pb-12 bg-white min-h-screen">
            {/* Spacing adjustments */}
            <div className="mb-4"></div>
            
            <Systems systems={systems} onViewSystem={onViewSystem} variant="page" />
            
            <div className="container mx-auto px-6 md:px-12 mt-12 text-center">
                 <div className="bg-soft-gray p-8 rounded-xl border border-gray-200 inline-block max-w-2xl">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">¿Necesitas algo a medida?</h3>
                    <p className="text-slate-600 mb-6">
                        Si tu caso es más complejo, podemos diseñar una arquitectura personalizada.
                    </p>
                    <GradientButton>Agendar Consultoría Personalizada</GradientButton>
                 </div>
            </div>
        </div>
    );
};