import React, { useState, useRef, useEffect } from 'react';
import { cn } from "../lib/utils";
import { motion, useSpring, useTransform } from "framer-motion";
import { Check, Star, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";
import { GradientButton } from './GradientButton';

// --- Data Types ---
export interface SystemData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  price: string;
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

// Framer Motion Number Ticker
const NumberTicker = ({ value }: { value: number }) => {
  const spring = useSpring(value, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => 
    Math.round(current).toLocaleString("es-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 0 })
  );

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  return <motion.span>{display}</motion.span>;
};

const Label = ({ children, className }: { children?: React.ReactNode, className?: string }) => (
    <div className={cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className)}>
        {children}
    </div>
);

const Switch = React.forwardRef<HTMLButtonElement, { checked: boolean; onCheckedChange: (c: boolean) => void; className?: string }>(
  ({ checked, onCheckedChange, className }, ref) => (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      ref={ref}
      onClick={() => onCheckedChange(!checked)}
      className={cn(
        "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
        checked ? "bg-primary" : "bg-gray-200",
        className
      )}
    >
      <span
        className={cn(
          "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform",
           checked ? "translate-x-5" : "translate-x-0"
        )}
      />
    </button>
  )
);
Switch.displayName = "Switch";

// --- Main Component ---
export const Systems: React.FC<SystemsProps> = ({ systems, onViewSystem, variant = "page" }) => {
  const [isOneTime, setIsOneTime] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const switchRef = useRef<HTMLButtonElement>(null);

  const handleToggle = (checked: boolean) => {
    setIsOneTime(!checked);
    
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      confetti({
        particleCount: 50,
        spread: 60,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: ["#00598A", "#00c6ff", "#F3F4F6"],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"],
      });
    }
  };

  return (
    <section id="sistemas" className="container py-24 mx-auto px-6">
      <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-slate-900">
           Sistemas "Llave en Mano". <br/>
           <span className="text-primary">Instalados en tu negocio.</span>
        </h2>
        <p className="text-slate-600 text-lg whitespace-pre-line">
            No vendo horas de consultoría sueltas. Vendo activos digitales que sistematizan problemas específicos de raíz.
        </p>
      </div>

      <div className="flex justify-center mb-16">
        <label className="relative inline-flex items-center cursor-pointer select-none group">
          <Label className="mr-3 text-slate-600">
            <Switch
              ref={switchRef}
              checked={!isOneTime}
              onCheckedChange={handleToggle}
              className="relative"
            />
          </Label>
          <span className="font-semibold text-slate-700 group-hover:text-primary transition-colors">
             Pago Fraccionado <span className="text-primary font-bold">(Flexible)</span>
          </span>
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center">
        {systems.map((sys, index) => {
          const basePrice = parseInt(sys.price.replace(/\./g, '').replace('€', '')) || 1000;
          const displayPrice = isOneTime ? basePrice : Math.round(basePrice / 2 * 1.1); 
          
          // Best Seller logic: Middle item (index 1)
          const isPopular = index === 1;

          // Styles based on Variant
          const isLanding = variant === "landing";
          
          const cardBaseClasses = isLanding
             ? "group rounded-3xl p-8 text-center flex flex-col relative transition-all duration-300 text-white border-0 shadow-2xl hover:-translate-y-2 overflow-hidden"
             : "group rounded-3xl border p-8 bg-white text-center flex flex-col relative shadow-xl transition-all duration-300";

          // FIXED: More robust styling for the popular card
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
                    "absolute top-0 right-0 left-0 mx-auto w-fit -translate-y-1/2 py-2 px-6 rounded-full flex items-center z-30",
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

                <div className="mt-4 flex items-center justify-center gap-x-1 h-16">
                  <span className={cn("text-5xl font-bold tracking-tight", textPrimary)}>
                    <NumberTicker value={displayPrice} />
                  </span>
                  {!isOneTime && (
                     <span className={cn("text-sm font-semibold leading-6 tracking-wide self-end mb-2", textSecondary)}>
                        / mes (x2)
                     </span>
                  )}
                </div>

                <p className={cn("text-xs leading-5 mt-2 h-4", textSecondary)}>
                  {isOneTime ? "Pago único. Sin cuotas mensuales." : "Financiación simple en 2 plazos."}
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