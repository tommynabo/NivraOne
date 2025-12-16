import React, { useState, useEffect, useRef } from 'react';
import { FileText, Users, Video, Zap } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

// --- Types & Data ---
interface TimelineItem {
    id: number;
    title: string;
    date: string;
    content: string;
    status: "completed" | "in-progress" | "pending";
    energy: number;
    icon: React.ElementType;
    relatedIds: number[];
}

const TIMELINE_DATA: TimelineItem[] = [
    {
        id: 1,
        title: "Infierno Administrativo",
        date: "Operativa Manual",
        content: "Pierdes horas redactando contratos, persiguiendo facturas impagadas y organizando carpetas en Drive manualmente. Eres el secretario más caro del mundo.",
        status: "in-progress",
        energy: 90,
        icon: FileText,
        relatedIds: [2]
    },
    {
        id: 2,
        title: "Ventas Inconsistentes",
        date: "Seguimiento Manual",
        content: "Si tú no haces el seguimiento manual, el lead se enfría. No tienes un sistema que 'toque' al prospecto por ti mientras duermes o trabajas con clientes.",
        status: "pending",
        energy: 65,
        icon: Users,
        relatedIds: [1, 3]
    },
    {
        id: 3,
        title: "Contenido Esporádico",
        date: "Sin Sistema",
        content: "Tienes ideas brillantes pero no tienes tiempo para editar, formatear y publicar en todas las redes. Tu marca sufre y te vuelves irrelevante.",
        status: "pending",
        energy: 40,
        icon: Video,
        relatedIds: [2]
    }
];

// --- Sub-components ---
const Badge = ({ children, className }: { children?: React.ReactNode, className?: string }) => (
    <span className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", className)}>
        {children}
    </span>
);

const Card = ({ children, className, style }: { children?: React.ReactNode, className?: string, style?: React.CSSProperties }) => (
    <div className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)} style={style}>
        {children}
    </div>
);

const CardHeader = ({ children, className }: { children?: React.ReactNode, className?: string }) => (
    <div className={cn("flex flex-col space-y-1.5 p-6", className)}>{children}</div>
);

const CardTitle = ({ children, className }: { children?: React.ReactNode, className?: string }) => (
    <h3 className={cn("text-2xl font-semibold leading-none tracking-tight", className)}>{children}</h3>
);

const CardContent = ({ children, className }: { children?: React.ReactNode, className?: string }) => (
    <div className={cn("p-6 pt-0", className)}>{children}</div>
);

// --- Main Orbital Component ---
export const Problem: React.FC = () => {
    const timelineData = TIMELINE_DATA;
    const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});

    // Rotation Logic State
    const [rotationAngle, setRotationAngle] = useState<number>(0);
    const [targetRotation, setTargetRotation] = useState<number | null>(null);
    const [autoRotate, setAutoRotate] = useState<boolean>(true);

    const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
    const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const orbitRef = useRef<HTMLDivElement>(null);
    const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

    // Mobile Detection
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === containerRef.current || e.target === orbitRef.current) {
            setExpandedItems({});
            setActiveNodeId(null);
            setPulseEffect({});
            setAutoRotate(true);
            setTargetRotation(null);
        }
    };

    const toggleItem = (id: number) => {
        setExpandedItems((prev) => {
            const newState = { ...prev };
            Object.keys(newState).forEach((key) => {
                if (parseInt(key) !== id) {
                    newState[parseInt(key)] = false;
                }
            });

            const isOpening = !prev[id];
            newState[id] = isOpening;

            if (isOpening) {
                setActiveNodeId(id);
                setAutoRotate(false);

                // Animate rotation on Desktop and Mobile
                const index = timelineData.findIndex(item => item.id === id);
                const total = timelineData.length;
                const nodeBaseAngle = (index / total) * 360;
                let target = 270 - nodeBaseAngle;
                setTargetRotation(target);

            } else {
                setActiveNodeId(null);
                setAutoRotate(true);
                setPulseEffect({});
                setTargetRotation(null);
            }

            return newState;
        });
    };

    useEffect(() => {
        let rotationTimer: ReturnType<typeof setInterval>;

        rotationTimer = setInterval(() => {
            if (autoRotate) {
                setRotationAngle((prev) => (prev + 0.1) % 360);
            } else if (targetRotation !== null) {
                setRotationAngle((prev) => {
                    const diff = targetRotation - prev;
                    if (Math.abs(diff) < 0.5) return targetRotation;
                    return prev + diff * 0.2;
                });
            }
        }, 16);

        return () => {
            if (rotationTimer) clearInterval(rotationTimer);
        };
    }, [autoRotate, targetRotation]);

    const calculateNodePosition = (index: number, total: number) => {
        const angle = ((index / total) * 360 + rotationAngle) % 360;

        // Critical: Strict separation between mobile (130) and desktop (220) radii
        const radius = isMobile ? 130 : 220;

        const radian = (angle * Math.PI) / 180;

        const x = radius * Math.cos(radian);
        const y = radius * Math.sin(radian);

        const zIndex = Math.round(100 + 50 * Math.cos(radian));
        const opacity = Math.max(
            0.4,
            Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))
        );

        return { x, y, angle, zIndex, opacity };
    };

    const getStatusStyles = (status: TimelineItem["status"]): string => {
        switch (status) {
            case "completed":
                return "text-white bg-black border-white";
            case "in-progress":
                return "text-black bg-white border-black";
            case "pending":
                return "text-white bg-black/40 border-white/50";
            default:
                return "text-white bg-black/40 border-white/50";
        }
    };

    // Text Reveal Animation variants
    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2,
                staggerChildren: 0.03
            }
        }
    };

    return (
        <section className="py-20 bg-slate-900 relative overflow-hidden min-h-[900px] flex flex-col items-center">

            {/* Header Section */}
            <div className="container mx-auto px-6 md:px-12 relative z-10 mb-10 pointer-events-none">
                <div className="text-center max-w-4xl mx-auto">

                    {/* Dynamic Title */}
                    <motion.h2
                        className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
                        variants={sentence}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <span className="block md:inline whitespace-normal md:whitespace-nowrap">
                            ¿Tu negocio depende 100% de que
                        </span>
                        <br className="hidden md:block" />
                        <motion.span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 inline-block mt-2 md:mt-0"
                            animate={{
                                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                            }}
                            transition={{
                                duration: 5,
                                ease: "linear",
                                repeat: Infinity
                            }}
                            style={{ backgroundSize: "200% 200%" }}
                        >
                            tú estés delante del ordenador?
                        </motion.span>
                    </motion.h2>

                    <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
                        Escalar una consultoría a base de "trabajar más duro" tiene un límite biológico. Probablemente ya lo has alcanzado.
                    </p>
                </div>
            </div>

            {/* Orbital Visualization */}
            <div
                className="w-full flex-grow flex flex-col items-center justify-center relative overflow-hidden"
                ref={containerRef}
                onClick={handleContainerClick}
            >
                <div className="relative w-full max-w-4xl h-[500px] md:h-[600px] flex items-center justify-center">
                    <div
                        className="absolute w-full h-full flex items-center justify-center"
                        ref={orbitRef}
                        style={{ perspective: "1000px" }}
                    >
                        {/* Core Sun/Center */}
                        <div className="absolute w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#00598A] via-blue-600 to-sky-500 animate-pulse flex items-center justify-center z-10 shadow-[0_0_50px_rgba(0,89,138,0.5)]">
                            <div className="absolute w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/20 animate-ping opacity-70"></div>
                            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/90 backdrop-blur-md"></div>
                        </div>

                        {/* Orbit Ring - Sized Explicitly for Mobile vs Desktop */}
                        <div className={cn(
                            "absolute rounded-full border border-white/10 transition-all duration-500",
                            isMobile ? "w-[260px] h-[260px]" : "w-[440px] h-[440px]"
                        )}></div>

                        {timelineData.map((item, index) => {
                            const position = calculateNodePosition(index, timelineData.length);
                            const isExpanded = expandedItems[item.id];
                            const isPulsing = pulseEffect[item.id];
                            const Icon = item.icon;

                            const nodeStyle = {
                                transform: `translate(${position.x}px, ${position.y}px)`,
                                zIndex: isExpanded ? 200 : position.zIndex,
                                opacity: isExpanded ? 1 : position.opacity,
                            };

                            return (
                                <div
                                    key={item.id}
                                    ref={(el) => (nodeRefs.current[item.id] = el)}
                                    className="absolute transition-all duration-700 cursor-pointer"
                                    style={nodeStyle}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleItem(item.id);
                                    }}
                                >
                                    {/* Energy Field */}
                                    <div
                                        className={`absolute rounded-full -inset-1 ${isPulsing ? "animate-pulse duration-1000" : ""
                                            }`}
                                        style={{
                                            background: `radial-gradient(circle, rgba(0,89,138,0.4) 0%, rgba(0,89,138,0) 70%)`,
                                            width: `${item.energy * 0.5 + 40}px`,
                                            height: `${item.energy * 0.5 + 40}px`,
                                            left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                                            top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                                        }}
                                    ></div>

                                    {/* Node Circle */}
                                    <div
                                        className={`
                            rounded-full flex items-center justify-center
                            ${isMobile ? "w-10 h-10" : "w-12 h-12"}
                            ${isExpanded
                                                ? "bg-white text-black"
                                                : "bg-slate-900 text-white"
                                            }
                            border-2 
                            ${isExpanded
                                                ? "border-[#00598A] shadow-[0_0_20px_rgba(0,89,138,0.5)]"
                                                : "border-[#00598A]/50"
                                            }
                            transition-all duration-300 transform
                            ${isExpanded ? "scale-125" : "hover:scale-110"}
                            `}
                                    >
                                        <Icon size={isMobile ? 16 : 20} />
                                    </div>

                                    {/* Label */}
                                    <div
                                        className={`
                            absolute top-12 md:top-14 left-1/2 -translate-x-1/2 whitespace-nowrap
                            text-[10px] md:text-xs font-bold tracking-wider uppercase
                            transition-all duration-300
                            ${isExpanded ? "text-[#00598A] scale-110" : "text-slate-400"}
                            `}
                                    >
                                        {item.title.split(' ')[0]}
                                    </div>
                                </div>
                            );
                        })}

                        {/* Expanded Card - Centered Overlay */}
                        <AnimatePresence>
                            {timelineData.map(item => {
                                if (!expandedItems[item.id]) return null;
                                return (
                                    <div key={item.id} className="absolute inset-0 flex items-center justify-center z-[300] pointer-events-none">
                                        {/* Pointer events auto for card */}
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            transition={{ duration: 0.2 }}
                                            className="pointer-events-auto"
                                        >
                                            <Card className={cn(
                                                "bg-slate-900/95 backdrop-blur-xl border border-slate-700 shadow-2xl shadow-black/50 overflow-hidden",
                                                isMobile ? "w-64" : "w-72"
                                            )}>
                                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00598A] to-blue-600"></div>
                                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-[#00598A]/50"></div>
                                                <CardHeader className="pb-2 p-4 md:p-6">
                                                    <div className="flex justify-between items-center mb-1">
                                                        <Badge className={`px-2 py-0.5 text-[10px] uppercase ${getStatusStyles(item.status)}`}>
                                                            {item.status === 'in-progress' ? 'PROBLEMA' : 'SÍNTOMA'}
                                                        </Badge>
                                                    </div>
                                                    <CardTitle className="text-base md:text-lg text-white font-bold leading-tight">
                                                        {item.title}
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent className="text-sm text-slate-300 p-4 pt-0 md:p-6 md:pt-0">
                                                    <p className="mb-4 leading-relaxed text-xs md:text-sm">{item.content}</p>

                                                    <div className="mt-4 pt-3 border-t border-white/10">
                                                        <div className="flex justify-between items-center text-xs mb-1 text-slate-400">
                                                            <span className="flex items-center">
                                                                <Zap size={12} className="mr-1 text-yellow-400" />
                                                                Impacto
                                                            </span>
                                                            <span className="font-mono text-white">{item.energy}%</span>
                                                        </div>
                                                        <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                                                            <div
                                                                className="h-full bg-gradient-to-r from-[#00598A] to-blue-500"
                                                                style={{ width: `${item.energy}%` }}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    </div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};