import React from 'react';

const clients = [
  "TBWA", "PÁRAMO LAB", "NISSAN", "Colpensiones", 
  "PAGA TODO", "SEGUROS BOLÍVAR", "Neosho", 
  "DAVIVIENDA", "RTVC"
];

const Clients: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-display font-black text-gray-900 uppercase mb-6">Confían en Nosotros</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Hemos tenido el privilegio de crear experiencias memorables para estas grandes marcas.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-12">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="aspect-[3/2] flex items-center justify-center bg-gray-50 rounded-xl border border-gray-100 p-8 hover:border-brand-orange hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* In a real app, these would be SVG logos. Using stylized text for demo. */}
              <span className="font-display font-black text-xl md:text-2xl text-gray-400 group-hover:text-gray-900 text-center uppercase transition-colors">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;