import React from 'react';

export const Authority: React.FC = () => {
  return (
    <section id="metodo" className="py-24 bg-slate-50 border-y border-gray-200">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-white p-1">
              <img
                src="/logic-diagram-final.png"
                alt="Diagrama de Lógica de Negocio"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Soy Tomás. No soy un don nadie. <br />
              <span className="text-primary">Soy un arquitecto de sistemas.</span>
            </h2>
            <div className="prose text-slate-600 space-y-4 text-lg">
              <p>
                Mi obsesión es simple: Si una tarea se repite más de 3 veces, debe morir (ser sistematizada).
              </p>
              <p>
                Ayudo a empresas, consutlores, coaches mentores y expertos a recuperar el activo más valioso que tienen y que no se reupera: <strong className="text-primary uppercase">EL TIEMPO</strong>
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