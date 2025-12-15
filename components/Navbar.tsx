import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Home, LayoutGrid, User, Zap } from "lucide-react"
import { cn } from "../lib/utils"

interface NavbarProps {
    onNavigate: (page: string) => void;
}

export function Navbar({ onNavigate }: NavbarProps) {
  const [activeTab, setActiveTab] = useState("Inicio")
  const [isMobile, setIsMobile] = useState(false)

  const items = [
    { name: "Inicio", id: "home", icon: Home },
    { name: "Sistemas", id: "systems", icon: LayoutGrid },
    { name: "Contacto", id: "contact", icon: User },
    { name: "Auditoría", id: "audit", icon: Zap },
  ]

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-6 md:bottom-auto md:top-6 left-1/2 -translate-x-1/2 z-50",
      )}
    >
      <div className="flex items-center gap-3 bg-white/80 border border-primary/10 backdrop-blur-lg py-2 px-2 rounded-full shadow-2xl shadow-primary/10">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <button
              key={item.name}
              onClick={() => {
                setActiveTab(item.name)
                onNavigate(item.id)
              }}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors outline-none select-none",
                "text-slate-500 hover:text-primary",
                isActive && "text-primary",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={20} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/10 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}