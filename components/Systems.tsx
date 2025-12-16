import React, { useState, useEffect } from 'react';
import { cn } from "../lib/utils";
import { motion, useSpring, useTransform } from "framer-motion";
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
  variant?: "landing" | "page"; // Control styling
}

// --- Helper Components ---

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

// Framer Motion Number Ticker - reused for static feel or slight animation
const NumberTicker = ({ value }: { value: string }) => {
  return <span className="tabular-nums tracking-tight">{value}</span>;
};

// --- Main Component ---
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center">
        {systems.map((sys, index) => {
          // Best Seller logic: Middle item (index 1)
          const isPopular = index === 1;

          // Styles based on Variant
          const isLanding = variant === "landing";

          const cardBaseClasses = isLanding
            ? "group rounded-3xl p-8 text-center flex flex-col relative transition-all duration-300 text-white border-0 shadow-2xl hover:-translate-y-2"
            : "group rounded-3xl border p-8 bg-white text-center flex flex-col relative shadow-xl transition-all duration-300";

          const cardPopularClasses = isPopular
            ? (isLanding
              ? "min-h-[620px] scale-105 z-20 shadow-[0_0_60px_rgba(0,89,138,0.5)] border-2 border-[#00c6ff]/50"
              : "border-primary border-2 shadow-primary/20 min-h-[620px]")
            : (isLanding
              ? "min-h-[580px] opacity-90 hover:opacity-100"
              : "border-gray-200 hover:border-primary/50 min-h-[580px]");

          const textPrimary = isLanding ? "text-white" : "text-slate-900";
          const textSecondary = isLanding ? "text-blue-100" : "text-slate-500";
          const textAccent = isLanding ? "text-blue-200" : "text-primary";
          const iconColor = isLanding ? "text-blue-200" : "text-green-600";
          const iconBg = isLanding ? "bg-white/10" : "bg-green-100";

          // Dynamic background logic
          // Popular card gets a solid, powerful gradient. Standard cards get a subtler one.
          const landingBackgroundStyle = isLanding ? {
            background: isPopular
              ? 'linear-gradient(180deg, #00598A 0%, #002d4a 100%)'
              : 'linear-gradient(135deg, #00598A 0%, #003F61 100%)'
          } : undefined;

          return (
            <motion.div
              key={sys.id}
              initial={{ y: 50, opacity: 1 }}
              whileInView={
                isDesktop
                  ? {
                    y: 0,
                    opacity: 1,
                    x: 0,
                    scale: isPopular ? 1.05 : 0.95,
                    zIndex: isPopular ? 20 : 10
                  }
                  : undefined
              }
              viewport={{ once: true }}
              transition={{
                duration: 1.6,
                type: "spring",
                stiffness: 100,
                damping: 30,
                delay: 0.4,
                opacity: { duration: 0.5 },
              }}
              className={cn(cardBaseClasses, cardPopularClasses)}
              style={landingBackgroundStyle}
            >
              {isPopular && (
                <div className={cn(
                  "absolute -top-6 right-0 left-0 mx-auto w-fit py-2 px-6 rounded-full flex items-center z-30",
                  isLanding
                    ? "bg-white text-[#00598A] shadow-[0_0_20px_rgba(255,255,255,0.6)] border border-blue-100"
                    : "bg-primary text-white"
                )}>
                  <Star className={cn("h-5 w-5 fill-current", isLanding ? "text-[#00598A]" : "text-white")} />
                  <span className="ml-2 font-sans font-extrabold text-sm tracking-widest uppercase">
                    Más Vendido
                  </span>
                </div>
              )}

              {/* Enhanced Glow for Popular Card */}
              {isLanding && isPopular && (
                <>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00c6ff] to-transparent opacity-50"></div>
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#00c6ff] opacity-10 blur-[80px] rounded-full pointer-events-none"></div>
                </>
              )}

              <div className="flex-1 flex flex-col relative z-10">
                <p className={cn("text-lg font-bold", textPrimary)}>
                  {sys.title}
                </p>
                <p className={cn("text-xs font-bold uppercase tracking-widest mb-4", textAccent)}>
                  {sys.subtitle}
                </p>

                <div className="mt-4 flex flex-col items-center justify-center gap-y-1 h-20">
                  <div className="flex items-baseline gap-1">
                    <span className={cn("text-4xl font-bold tracking-tight", textPrimary)}>
                      {sys.price}
                    </span>
                    <span className={cn("text-sm font-medium opacity-80", textPrimary)}>inicio</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className={cn("text-lg font-bold", textAccent)}>
                      + {sys.monthlyFee}
                    </span>
                    <span className={cn("text-xs font-medium opacity-80", textSecondary)}>
                      / mes
                    </span>
                  </div>
                </div>

                <p className={cn("text-xs leading-5 mt-2 h-4", textSecondary)}>
                  Setup inicial + Mantenimiento
                </p>

                <ul className="mt-8 gap-3 flex flex-col text-left mb-8 flex-grow">
                  {sys.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={cn("rounded-full p-0.5 mt-0.5", iconBg)}>
                        <Check className={cn("h-3 w-3 flex-shrink-0", iconColor)} />
                      </div>
                      <span className={cn("text-sm", isLanding ? "text-gray-100" : "text-slate-600")}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className={cn("mt-auto pt-6 w-full", isLanding ? "border-t border-white/10" : "border-t border-gray-100")}>
                  <GradientButton
                    onClick={() => onViewSystem(sys.id)}
                    variant={isLanding ? "white" : (isPopular ? "default" : "variant")}
                    className={cn(
                      "w-full transition-all duration-300",
                      isLanding && "group-hover:scale-105 group-hover:shadow-lg hover:shadow-blue-500/20"
                    )}
                  >
                    <span className="flex items-center gap-2">
                      Ver Detalles
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </GradientButton>
                  <p className={cn("mt-4 text-xs leading-5 px-4", isLanding ? "text-blue-200" : "text-slate-400")}>
                    {sys.description.substring(0, 80)}...
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}