import React, { useState } from 'react';
import { GradientButton } from './GradientButton';
import { ArrowRight, Play } from 'lucide-react';
import { TextShimmer } from './TextShimmer';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <section className="relative pt-24 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">

      {/* CSS for Neon Snake Border Animation - Slowed down to 4s */}
      <style>{`
        .neon-box {
            position: relative;
            overflow: hidden;
        }
        .neon-box span {
            position: absolute;
            display: block;
        }
        .neon-box span:nth-child(1) {
            top: 0;
            left: -100%;
            width: 100%;
            height: 3px;
            background: linear-gradient(90deg, transparent, #00c6ff);
            animation: btn-anim1 4s linear infinite;
        }
        @keyframes btn-anim1 {
            0% { left: -100%; }
            50%,100% { left: 100%; }
        }
        .neon-box span:nth-child(2) {
            top: -100%;
            right: 0;
            width: 3px;
            height: 100%;
            background: linear-gradient(180deg, transparent, #00c6ff);
            animation: btn-anim2 4s linear infinite;
            animation-delay: 1s;
        }
        @keyframes btn-anim2 {
            0% { top: -100%; }
            50%,100% { top: 100%; }
        }
        .neon-box span:nth-child(3) {
            bottom: 0;
            right: -100%;
            width: 100%;
            height: 3px;
            background: linear-gradient(270deg, transparent, #00c6ff);
            animation: btn-anim3 4s linear infinite;
            animation-delay: 2s;
        }
        @keyframes btn-anim3 {
            0% { right: -100%; }
            50%,100% { right: 100%; }
        }
        .neon-box span:nth-child(4) {
            bottom: -100%;
            left: 0;
            width: 3px;
            height: 100%;
            background: linear-gradient(360deg, transparent, #00c6ff);
            animation: btn-anim4 4s linear infinite;
            animation-delay: 3s;
        }
        @keyframes btn-anim4 {
            0% { bottom: -100%; }
            50%,100% { bottom: 100%; }
        }
      `}</style>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">

          {/* Left Column: Copy */}
          <div className="flex flex-col space-y-6 md:space-y-8 max-w-2xl pt-4 md:pt-0">

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
              Dejas de ser el{' '}
              <div className="inline-block relative">
                {/* 
                    Injecting CSS variables directly here to force the Brand Blue color.
                    --base-color: #00598A (Brand Blue)
                    --base-gradient-color: #ffffff (White shine)
                 */}
                {/* 
                    Injecting CSS variables directly here to force the Brand Blue color.
                    --base-color: #00598A (Brand Blue)
                    --base-gradient-color: #ffffff (White shine)
                 */}
                <span className="text-[#00598A] drop-shadow-[0_0_15px_rgba(0,89,138,0.3)]">
                  freno de mano
                </span>
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </div>{' '}
              de tu propio negocio.
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg">
              Ayudo a Consultores y Expertos a recuperar <strong className="text-slate-800">20h/semana</strong> sistematizando operaciones complejas con IA. Sin promesas vacías, solo ingeniería aplicada.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <GradientButton
                onClick={() => onNavigate('systems')}
                className="flex items-center gap-2 group w-full sm:w-auto"
              >
                Ver los Sistemas
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </GradientButton>
            </div>
          </div>

          {/* Right Column: VSL Video with Horizontal Aspect Ratio */}
          <div className="relative group perspective-1000 mt-8 lg:mt-0 flex justify-center">

            {/* The Container with Neon Snake Border - REMOVED hover:scale to fix jitter/displacement */}
            <div className="relative w-full max-w-[550px] aspect-video rounded-xl shadow-2xl bg-slate-900 neon-box">

              {/* The 4 Spans for the Snake Animation */}
              <span></span>
              <span></span>
              <span></span>
              <span></span>

              {/* Inner Content Container (Video) */}
              <div className="absolute inset-[3px] bg-slate-900 rounded-lg overflow-hidden z-10">
                {!playVideo ? (
                  <div
                    className="w-full h-full relative cursor-pointer group"
                    onClick={() => setPlayVideo(true)}
                  >
                    {/* 
                            !!! IMPORTANTE !!!
                            Thumbnail updated locally.
                        */}
                    <img
                      src="/vsl-thumbnail.png"
                      alt="Consultoría VSL Thumbnail"
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    />

                    {/* Centered Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/50 rounded-full blur-xl animate-pulse"></div>
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm border border-white/50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                          <Play className="w-8 h-8 text-white fill-white ml-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <iframe
                    src="https://drive.google.com/file/d/1nc5LNttft1UqcBNWv3JlHYabS9qJdkG2/preview"
                    className="w-full h-full"
                    allow="autoplay; fullscreen"
                    title="VSL NivraOne"
                  ></iframe>
                )}
              </div>

            </div>

            {/* Background Blob */}
            <div className="absolute -inset-10 bg-gradient-to-tr from-primary/30 to-purple-500/20 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

          </div>
        </div>
      </div>
    </section>
  );
};