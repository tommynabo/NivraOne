import React from 'react';

export const Authority: React.FC = () => {
  return (
    <section id="metodo" className="py-24 bg-slate-50 border-y border-gray-200">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-white p-2">
                {/* Visual representation of a complex node graph */}
                <div className="bg-[#1C1C1E] p-4 rounded-lg overflow-hidden relative h-[400px]">
                    {/* SVG to simulate N8N nodes */}
                    <svg className="w-full h-full opacity-80" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#333" strokeWidth="0.5"/>
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                        
                        {/* Nodes */}
                        <g transform="translate(50, 180)">
                            <rect x="0" y="0" width="120" height="40" rx="4" fill="#ff6d5a" />
                            <text x="60" y="25" textAnchor="middle" fill="white" fontSize="12" fontFamily="sans-serif">Webhook Start</text>
                            <path d="M 120 20 L 180 20" stroke="white" strokeWidth="2" />
                        </g>

                         <g transform="translate(180, 160)">
                            <rect x="0" y="0" width="120" height="80" rx="4" fill="#4d53e0" />
                            <text x="60" y="45" textAnchor="middle" fill="white" fontSize="12" fontFamily="sans-serif">OpenAI Agent</text>
                             <path d="M 120 40 L 180 40" stroke="white" strokeWidth="2" />
                        </g>

                        <g transform="translate(350, 100)">
                            <rect x="0" y="0" width="120" height="40" rx="4" fill="#00c853" />
                            <text x="60" y="25" textAnchor="middle" fill="white" fontSize="12" fontFamily="sans-serif">Google Sheets</text>
                        </g>
                         <path d="M 300 200 L 350 120" stroke="white" strokeWidth="2" strokeDasharray="5,5" />


                        <g transform="translate(350, 260)">
                            <rect x="0" y="0" width="120" height="40" rx="4" fill="#ffab00" />
                            <text x="60" y="25" textAnchor="middle" fill="white" fontSize="12" fontFamily="sans-serif">Slack Notify</text>
                        </g>
                        <path d="M 300 200 L 350 280" stroke="white" strokeWidth="2" />

                         <g transform="translate(520, 100)">
                            <rect x="0" y="0" width="120" height="40" rx="4" fill="#2979ff" />
                            <text x="60" y="25" textAnchor="middle" fill="white" fontSize="12" fontFamily="sans-serif">Create Draft</text>
                        </g>
                        <path d="M 470 120 L 520 120" stroke="white" strokeWidth="2" />

                        {/* Connection dots */}
                         <circle cx="170" cy="200" r="3" fill="white" />
                         <circle cx="340" cy="200" r="3" fill="white" />
                    </svg>
                    
                    {/* Floating label */}
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur text-white text-xs px-2 py-1 rounded border border-white/20">
                        Workflow: Client Onboarding v2.4
                    </div>
                </div>
            </div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              No es magia, es Lógica. <br/>
              <span className="text-primary">Así se ve tu negocio cuando funciona solo.</span>
            </h2>
            <div className="prose text-slate-600 space-y-4 text-lg">
                <p>
                    Cuando ves un flujo bien diseñado, todo cobra sentido. Cada cuadrado es una tarea que tú ya no haces. Cada línea es un dato moviéndose a la velocidad de la luz.
                </p>
                <p>
                    Mi trabajo no es solo "conectar herramientas". Es <strong>Ingeniería de Procesos</strong>. Analizo dónde pierdes dinero y tiempo, diseño la lógica para solucionarlo, y luego construyo el sistema que lo ejecuta.
                </p>
                <p className="font-medium text-slate-900 pt-4 border-l-4 border-primary pl-4">
                    "Sistematizar un proceso ineficiente solo magnifica la ineficiencia. Primero simplificamos, luego sistematizamos."
                </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};