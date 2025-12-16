```typescript
import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6 py-32">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Política de Privacidad</h1>
        <div className="prose max-w-none text-slate-700">
            <p>De conformidad con lo dispuesto en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo...</p>
            
            <h2 className="text-xl font-bold mt-6 mb-4">1. Responsable del Tratamiento</h2>
            <p className="italic text-slate-500">[Inserte aquí los datos del responsable]</p>

            <h2 className="text-xl font-bold mt-6 mb-4">2. Finalidad del Tratamiento</h2>
            <p>Sus datos personales se tratan con la finalidad de gestionar, administrar y prestar los servicios...</p>
        </div>
      </div>
    </div>
  );
};
```
