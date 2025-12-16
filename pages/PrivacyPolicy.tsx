import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800">
      <div className="container mx-auto px-6 py-32 max-w-4xl">
        <h1 className="text-4xl font-bold mb-10 text-slate-900 border-b pb-4">Política de Privacidad</h1>

        <div className="prose prose-slate max-w-none">
          <p className="mb-6">
            En esta Política de Privacidad describimos cómo recopilamos, utilizamos y tratamos sus datos personales cuando interactúa con nosotros a través de nuestro sitio web. Al navegar en este sitio, usted acepta las prácticas descritas en esta política.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">1. RESPONSABLE DEL TRATAMIENTO</h2>
          <p className="mb-4">
            El responsable del tratamiento de los datos personales del Usuario es <strong>Tomás Navarro</strong> (en adelante, el "Responsable"). Puede contactar con nosotros a través del correo electrónico indicado en la sección de contacto de este sitio web.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">2. FINALIDAD DEL TRATAMIENTO</h2>
          <p className="mb-4">
            Tratamos la información que nos facilitan las personas interesadas con las siguientes finalidades:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Gestión de solicitudes:</strong> Para atender las consultas, solicitudes de información o peticiones realizadas por el Usuario a través de los formularios contacto.</li>
            <li><strong>Prestación de servicios:</strong> Para la correcta prestación de los servicios de consultoría o desarrollo contratados, incluyendo la gestión administrativa y de facturación.</li>
            <li><strong>Comunicaciones comerciales:</strong> En caso de que haya dado su consentimiento explícito, para enviarle comunicaciones comerciales relacionadas con nuestros productos y servicios.</li>
            <li><strong>Análisis y mejora:</strong> Para realizar análisis estadísticos de uso de la web y mejorar nuestros servicios.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">3. LEGITIMACIÓN</h2>
          <p className="mb-4">
            La base legal para el tratamiento de sus datos es:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Consentimiento del interesado:</strong> Para la gestión de consultas y envío de comunicaciones comerciales.</li>
            <li><strong>Ejecución de un contrato:</strong> Para la prestación de los servicios contratados.</li>
            <li><strong>Interés legítimo:</strong> Para garantizar la seguridad de la web y mejorar nuestros servicios.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">4. CONSERVACIÓN DE LOS DATOS</h2>
          <p className="mb-4">
            Los datos personales proporcionados se conservarán mientras se mantenga la relación comercial, no se solicite su supresión por el interesado, o durante el tiempo necesario para cumplir con las obligaciones legales (por ejemplo, obligaciones fiscales).
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">5. DESTINATARIOS</h2>
          <p className="mb-4">
            Los datos no se comunicarán a terceros salvo en los casos en que exista una obligación legal o sea estrictamente necesario para la prestación del servicio (por ejemplo, proveedores de servicios tecnológicos, plataformas de pago, gestorías), quienes actuarán como encargados del tratamiento bajo las correspondientes condiciones de confidencialidad.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">6. DERECHOS</h2>
          <p className="mb-4">
            Cualquier persona tiene derecho a obtener confirmación sobre si estamos tratando datos personales que les conciernan o no. Las personas interesadas tienen derecho a:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Solicitar el acceso a los datos personales relativos al interesado.</li>
            <li>Solicitar su rectificación o supresión.</li>
            <li>Solicitar la limitación de su tratamiento.</li>
            <li>Oponerse al tratamiento.</li>
            <li>Solicitar la portabilidad de los datos.</li>
          </ul>
          <p className="mb-4">
            Para ejercer estos derechos, puede enviar una comunicación por escrito al email de contacto, acompañando copia de su DNI o documento equivalente.
          </p>

        </div>
      </div>
    </div>
  );
};
