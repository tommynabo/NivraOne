import React from 'react';
import { GradientButton } from './GradientButton';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-white py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-[-50%] right-[-10%] w-[800px] h-[800px] rounded-full bg-primary blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          ¿Listo para salir de la operativa?
        </h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
          Empecemos con una Auditoría de Viabilidad. Analizo tu flujo de trabajo actual en una sesión de 60 minutos y te digo exactamente qué se puede sistematizar y cuánto te costará.
        </p>

        <div className="flex flex-col items-center gap-4">
          <GradientButton
            variant="white"
            onClick={() => onNavigate('audit')}
            className="px-8 py-4 text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            Reservar Auditoría (197€)
          </GradientButton>
          <p className="text-slate-500 text-sm mt-4">
            *Si decides contratar un Sistema, los 197€ se descuentan del precio final.
          </p>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Tomás Navarro | NivraOne. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <div className="flex gap-6 mt-4 md:mt-0">
              <button onClick={() => onNavigate('legal')} className="hover:text-white transition-colors">Aviso Legal</button>
              <button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors">Privacidad</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};