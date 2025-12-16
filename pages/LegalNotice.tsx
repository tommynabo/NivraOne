import React from 'react';
import { Navbar } from '../components/Navbar'; // Re-adding if needed, but previously we removed it. Wait, the design was to REMOVE navbar from inside.
// Actually, looking at the file content in Step 152:
// 1: export const LegalNotice: React.FC = () => {
// It uses React.FC so it NEEDS React imported.
// It DOES NOT use Navbar/Footer inside anymore (App.tsx handles it?). 
// Wait, looking at App.tsx (Step 66/Viewed Files), we saw:
// {currentPage === 'legal' && <LegalNotice />}
// And App.tsx likely has Navbar/Footer OUTSIDE these conditionals? 
// Let's check App.tsx to be sure. 
// If App.tsx puts Navbar/Footer around everything, then we don't need them here.
// But we definitely need `import React from 'react';`
import React from 'react';

export const LegalNotice: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-screen font-sans text-slate-800">
            <div className="container mx-auto px-6 py-32 max-w-4xl">
                <h1 className="text-4xl font-bold mb-10 text-slate-900 border-b pb-4">Aviso Legal</h1>

                <div className="prose prose-slate max-w-none">
                    <p className="mb-6">
                        En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se facilitan a continuación los siguientes datos de información general de este sitio web.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">1. DATOS IDENTIFICATIVOS</h2>
                    <p className="mb-4">
                        La titularidad de este sitio web la ostenta el Prestador de Servicios (en adelante, el "Titular"), cuyos datos de contacto se indican a continuación para cualquier comunicación relacionada con el uso de este sitio web. Al navegar por este sitio, el usuario acepta estar sujeto a los términos y condiciones aquí expuestos.
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li><strong>Titular:</strong> Tomás Navarro</li>
                        <li><strong>Nombre Comercial:</strong> NivraOne</li>
                        <li><strong>Email de contacto:</strong> [Inserte su email de contacto aquí]</li>
                        <li><strong>Actividad:</strong> Consultoría y Desarrollo de Software</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">2. USUARIOS</h2>
                    <p className="mb-4">
                        El acceso y/o uso de este portal atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas. Las citadas Condiciones serán de aplicación independientemente de las Condiciones Generales de Contratación que en su caso resulten de obligado cumplimiento.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">3. USO DEL PORTAL</h2>
                    <p className="mb-4">
                        El sitio web proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, "los contenidos") en Internet pertenecientes al Titular o a sus licenciantes a los que el USUARIO pueda tener acceso. El USUARIO asume la responsabilidad del uso del portal. Dicha responsabilidad se extiende al registro que fuese necesario para acceder a determinados servicios o contenidos.
                    </p>
                    <p className="mb-6">
                        El USUARIO se compromete a hacer un uso adecuado de los contenidos y servicios que el Titular ofrece a través de su portal y, con carácter enunciativo pero no limitativo, a no emplearlos para:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.</li>
                        <li>Difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico-ilegal, de apología del terrorismo o atentatorio contra los derechos humanos.</li>
                        <li>Provocar daños en los sistemas físicos y lógicos del Titular, de sus proveedores o de terceras personas, introducir o difundir en la red virus informáticos o cualesquiera otros sistemas físicos o lógicos que sean susceptibles de provocar los daños anteriormente mencionados.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">4. PROPIEDAD INTELECTUAL E INDUSTRIAL</h2>
                    <p className="mb-4">
                        El Titular por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.), titularidad del Titular o bien de sus licenciantes.
                    </p>
                    <p className="mb-6">
                        <strong>Todos los derechos reservados.</strong> En virtud de lo dispuesto en los artículos 8 y 32.1, párrafo segundo, de la Ley de Propiedad Intelectual, quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización del Titular.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">5. EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD</h2>
                    <p className="mb-4">
                        El Titular no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">6. MODIFICACIONES</h2>
                    <p className="mb-4">
                        El Titular se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">7. LEGISLACIÓN APLICABLE Y JURISDICCIÓN</h2>
                    <p className="mb-4">
                        La relación entre el Titular y el USUARIO se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y tribunales de la ciudad del domicilio del Titular, salvo que la Ley aplicable disponga otra cosa.
                    </p>
                </div>
            </div>
        </div>
    );
};
