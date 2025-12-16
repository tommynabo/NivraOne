import React, { useState, useEffect } from 'react';
import { cn } from "../lib/utils";
import { motion } from "framer-motion";
import { Check, Star, ArrowRight } from "lucide-react";
import { GradientButton } from './GradientButton';

// --- Data Types ---
export interface SystemData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  price: string;
  monthlyFee: string;
  features: string[];
  videoId: number;
}

interface SystemsProps {
  systems: SystemData[];
  onViewSystem: (id: string) => void;
  variant?: "landing" | "page";
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);
  return matches;
}

export const Systems: React.FC<SystemsProps> = ({ systems, onViewSystem, variant = "page" }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <section id="sistemas" className="container py-24 mx-auto px-6">
      <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-slate-900">
          Sistemas "Llave en Mano". <br />
          <span className="text-primary">Instalados en tu negocio.</span>
        </h2>
        <p className="text-slate-600 text-lg whitespace-pre-line">
          No vendo horas de consultoría sueltas. Vendo activos digitales que sistematizan problemas específicos de raíz.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {systems.map((sys, index) => {
          const isPopular = index === 1;
          const isLanding = variant === "landing";

          // Card Classes - Enforcing White Background style for 'page' variant as requested by "Restore content"
          // If isLanding -> Blue/Dark theme.
          // If !isLanding -> White/Light theme.
          const cardBaseClasses = isLanding
            ? "group rounded-3xl p-8 text-center flex flex-col relative transition-all duration-300 text-white border-0 shadow-2xl hover:-translate-y-2"
            : "group rounded-3xl border border-gray-200 p-8 bg-white text-center flex flex-col relative shadow-xl transition-all duration-300 hover:border-blue-200 hover:shadow-2xl hover:-translate-y-1";

          const cardPopularClasses = isPopular
            ? (isLanding
              ? "min-h-[620px] scale-105 z-20 shadow-[0_0_60px_rgba(0,89,138,0.5)] border-2 border-[#00c6ff]/50"
              : "min-h-[620px] border-primary/50 shadow-blue-900/10 scale-105 z-20 ring-1 ring-primary/20")
            : "min-h-[580px]";

          // Text Colors
          const textPrimary = isLanding ? "text-white" : "text-slate-900";
          const textSecondary = isLanding ? "text-blue-100" : "text-slate-500";
          const textAccent = isLanding ? "text-blue-200" : "text-primary";
          const iconColor = isLanding ? "text-blue-200" : "text-green-600";
          const iconBg = isLanding ? "bg-white/10" : "bg-green-100";

          const landingBackgroundStyle = isLanding ? {
            background: isPopular
              ? 'linear-gradient(180deg, #00598A 0%, #002d4a 100%)'
              : 'linear-gradient(135deg, #00598A 0%, #003F61 100%)'
          } : undefined;

          return (
            <motion.div
              key={sys.id}
              initial={{ y: 50, opacity: 1 }}
              whileInView={isDesktop ? { y: 0, opacity: 1, scale: isPopular ? 1.05 : 0.95 } : undefined}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={cn(cardBaseClasses, cardPopularClasses)}
              style={landingBackgroundStyle}
            >
              {isPopular && (
                <div className={cn(
                  "absolute -top-5 right-0 left-0 mx-auto w-fit py-1.5 px-4 rounded-full flex items-center z-30 shadow-lg",
                  isLanding
                    ? "bg-white text-[#00598A]"
                    : "bg-[#00598A] text-white"
                )}>
                  <Star className="h-4 w-4 fill-current" />
                  <span className="ml-2 font-bold text-xs tracking-widest uppercase">Más Vendido</span>
                </div>
              )}

              <div className="flex-1 flex flex-col relative z-10">
                <p className={cn("text-lg font-bold mb-1", textPrimary)}>{sys.title}</p>
                <p className={cn("text-xs font-bold uppercase tracking-widest mb-6", textAccent)}>{sys.subtitle}</p>

                {/* PRICING SECTION */}
                <div className="flex flex-col items-center justify-center min-h-[100px] mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className={cn("text-5xl font-extrabold tracking-tight", textPrimary)}>
                      {sys.price}
                    </span>
                  </div>
                  <p className={cn("text-xs font-medium opacity-80 mt-1", textSecondary)}>Pago Inicial (Auditoría incluida)</p>

                  <div className="flex items-baseline gap-1 mt-3">
                    <span className={cn("text-xl font-bold", textAccent)}>+ {sys.monthlyFee}</span>
                    <span className={cn("text-sm font-medium", textSecondary)}>/ mes</span>
                  </div>
                </div>

                <hr className={cn("my-6 border-dashed", isLanding ? "border-white/20" : "border-slate-200")} />

                <ul className="gap-4 flex flex-col text-left mb-8 flex-grow">
                  {sys.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={cn("rounded-full p-1 mt-0.5", iconBg)}>
                        <Check className={cn("h-3 w-3 flex-shrink-0", iconColor)} />
                      </div>
                      <span className={cn("text-sm font-medium leading-tight", isLanding ? "text-blue-50" : "text-slate-600")}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <GradientButton
                    onClick={() => onViewSystem(sys.id)}
                    variant={isLanding ? "white" : (isPopular ? "default" : "variant")} /// Ensure default variant is blue for popular
                    className="w-full shadow-lg"
                  >
                    <span className="flex items-center gap-2">
                      Ver Detalles <ArrowRight className="w-4 h-4" />
                    </span>
                  </GradientButton>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}