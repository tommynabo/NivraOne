import React from 'react';

export const Authority: React.FC = () => {
  return (
    <section id="metodo" className="py-24 bg-slate-50 border-y border-gray-200">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-white p-1">
              <img
                src="/logic-diagram.png"
                alt="Diagrama de Lógica de Negocio"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              No es magia, es Lógica. <br />
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