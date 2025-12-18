import React from 'react';
import { GradientButton } from './GradientButton';
import { ArrowRight } from 'lucide-react';
import { TextShimmer } from './TextShimmer';
import { DriveVideoPlayer } from './DriveVideoPlayer';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {

  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">

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
        @keyframes shine {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
        }
        .shine-text {
            background: linear-gradient(90deg, #00598A 0%, #00c6ff 50%, #00598A 100%);
            background-size: 200% auto;
            color: transparent;
            -webkit-background-clip: text;
            background-clip: text;
            animation: shine 3s linear infinite;
            will-change: background-position;
        }
        @media (max-width: 768px) {
            .neon-box span { display: none !important; }
            .neon-box { 
                border: 1px solid #00c6ff; 
                box-shadow: 0 0 20px rgba(0, 198, 255, 0.2); 
                min-height: 200px; /* Force height to prevent collapse */
                z-index: 20;
            }
        }
      `}</style>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 xl:gap-16 2xl:gap-32 items-center">

          {/* Left Column: Copy */}
          <div className="flex flex-col space-y-6 md:space-y-8 max-w-2xl pt-4 md:pt-0 items-center text-center mx-auto lg:mx-0 lg:text-left lg:items-start">

            <h1 className="text-3xl md:text-4xl lg:text-3xl xl:text-5xl 2xl:text-6xl font-extrabold text-slate-900 leading-[1.15] tracking-tight text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="inline-block relative mb-2 origin-center lg:origin-left z-10">
                <span className="shine-text drop-shadow-sm font-black text-4xl md:text-5xl lg:text-4xl xl:text-6xl 2xl:text-8xl">
                  Sistematizando
                </span>
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </div>{' '}
              <span className="block mt-2 whitespace-nowrap text-2xl md:text-3xl lg:text-2xl xl:text-4xl 2xl:text-5xl">
                tu operativa con Ingeniería de IA
              </span>
            </h1>

            <p className="text-base md:text-lg lg:text-sm xl:text-xl 2xl:text-2xl text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
              No implemento 'chatbots'. Diseño e instalo Sistemas de Trabajo Autónomos para Consultores y Expertos que quieren escalar sin contratar más personal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start w-full">
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
          <div className="relative group perspective-1000 mt-8 lg:mt-0 flex justify-center lg:justify-end">

            {/* The Container with Neon Snake Border - REMOVED hover:scale to fix jitter/displacement */}
            <div className="relative w-full max-w-[450px] lg:max-w-[380px] xl:max-w-[500px] 2xl:max-w-[700px] aspect-video rounded-xl shadow-2xl bg-slate-900 neon-box">

              {/* The 4 Spans for the Snake Animation */}
              <span></span>
              <span></span>
              <span></span>
              <span></span>

              {/* Inner Content Container (Video) */}
              <div className="absolute inset-[3px] bg-slate-900 rounded-lg overflow-hidden z-10">
                <DriveVideoPlayer
                  videoId="1nc5LNttft1UqcBNWv3JlHYabS9qJdkG2"
                  thumbnailUrl="/vsl-thumbnail.png"
                  preloadStrategy="immediate"
                />
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