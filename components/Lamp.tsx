import React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

interface LampLineProps {
    className?: string;
    isStatic?: boolean; // If true, line is full width and doesn't pulse as much
}

export function LampLine({ className, isStatic = false }: LampLineProps) {
    return (
        <div className={cn("relative w-full h-[2px] overflow-visible z-50", className)}>
             {/* Core Line - Brand Primary Color */}
             <motion.div
                initial={isStatic ? { width: "100%" } : { width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ 
                    duration: isStatic ? 0 : 1.5, 
                    ease: "easeInOut" 
                }}
                className="absolute top-0 left-1/2 -translate-x-1/2 h-full bg-[#00598A] z-20 shadow-[0_0_15px_rgba(0,89,138,0.9)]"
            />
            
            {/* Soft Glow Underneath - Slightly lighter for visibility but same hue */}
            <motion.div
                initial={isStatic ? { opacity: 0.6, width: "100%" } : { opacity: 0, width: "0%" }}
                animate={{ opacity: 0.6, width: "100%" }}
                transition={{ duration: 1.5, delay: 0.2 }}
                className="absolute top-0 left-1/2 -translate-x-1/2 h-8 w-full bg-[#00598A]/30 blur-xl -translate-y-4 z-10"
            />

            {/* Subtle Pulse */}
            {!isStatic && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
                     <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.3, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-white/30 blur-[1px]"
                     />
                </div>
            )}
        </div>
    )
}

export function LampContainer({ children, className }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={cn("relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full z-0", className)}>
      {children}
    </div>
  );
}