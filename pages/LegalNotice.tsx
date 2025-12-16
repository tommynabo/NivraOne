import React from 'react';

export const LegalNotice: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="container mx-auto px-6 py-32">
                <h1 className="text-3xl font-bold text-slate-900 mb-8">Aviso Legal</h1>
                <div className="prose max-w-none text-slate-700">
                    <p>1. Datos Identificativos</p>
                    <p>En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico...</p>
                    <p className="italic text-slate-500">[Inserte aquí sus datos legales completos]</p>

                    <h2 className="text-xl font-bold mt-6 mb-4">2. Propiedad Intelectual e Industrial</h2>
                    <p>Todos los signos distintivos, marcas, nombres comerciales, contenidos, estructura, diseño y forma de presentación de los elementos y cualquier otra información que aparezca en este sitio Web son propiedad de...</p>
                </div>
            </div>
        </div>
    );
};
