"use client";

import React from "react";
import { cn } from "../lib/utils";
import { Sparkles } from "lucide-react";

export interface DisplayCardProps {
  id?: string;
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
  onClick?: () => void;
}

const DisplayCard: React.FC<DisplayCardProps> = ({
  className,
  icon = <Sparkles className="size-4 text-blue-300" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  iconClassName = "text-blue-500",
  titleClassName = "text-blue-500",
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative flex h-40 w-[18rem] md:h-48 md:w-[22rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 bg-white/95 backdrop-blur-md px-6 py-5 transition-all duration-500",
        "shadow-[0_0_20px_rgba(0,0,0,0.1)] hover:shadow-[0_0_30px_rgba(0,89,138,0.2)]",
        "after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-background after:to-transparent after:content-['']",
        "hover:border-primary hover:bg-white hover:scale-105 cursor-pointer",
        className
      )}
    >
      <div>
        <span className="relative inline-block rounded-full bg-blue-50 p-2 mb-2">
          {icon}
        </span>
        <p className={cn("text-xl font-bold truncate pr-4", titleClassName)}>{title}</p>
      </div>
      <p className="whitespace-normal text-slate-600 text-sm leading-relaxed line-clamp-2">{description}</p>
      <p className="text-slate-400 text-xs mt-2 uppercase tracking-wider">{date}</p>
    </div>
  );
};

interface DisplayCardsProps {
  cards: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  
  // Updated stack logic for perfect centering and visibility
  const getStackClass = (index: number) => {
      // Base class for stacking
      const base = "[grid-area:stack] transition-all duration-500 ease-in-out transform";
      
      // Z-index: Front card is highest by default. Hovering brings back cards forward.
      const zIndex = `z-${(3-index) * 10} hover:z-50`;
      
      if (index === 0) {
          // Front card: Centered
          return cn(base, zIndex, "hover:-translate-y-2");
      }
      
      if (index === 1) {
          // Middle card: Shifted slightly left and down
          return cn(base, zIndex, "-translate-x-12 translate-y-6 md:-translate-x-16 md:translate-y-8 rotate-[-2deg] hover:-translate-x-20 hover:translate-y-4 hover:rotate-[-5deg] opacity-100");
      }
      
      if (index === 2) {
           // Back card: Shifted slightly right and down (balancing the visual weight)
          return cn(base, zIndex, "translate-x-12 translate-y-6 md:translate-x-16 md:translate-y-8 rotate-[2deg] hover:translate-x-20 hover:translate-y-4 hover:rotate-[5deg] opacity-100");
      }
      
      return "";
  };

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700 py-12 md:py-20 group perspective-1000 w-full justify-center">
      {cards.map((cardProps, index) => (
        <DisplayCard 
            key={index} 
            {...cardProps} 
            className={cn(cardProps.className, getStackClass(index))}
        />
      ))}
    </div>
  );
}