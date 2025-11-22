import React, { useState } from 'react';
import { Building2, Users, CheckCircle } from 'lucide-react';

const Corporate: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-black mb-4 uppercase tracking-wide">Soluciones Corporativas</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Creamos experiencias que conectan equipos y fortalecen marcas.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info */}
          <div>
            <h2 className="text-3xl font-display font-bold text-brand-orange mb-6">¿Por qué elegirnos?</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              En Bituin Lab entendemos que cada empresa es un mundo. Diseñamos estrategias a medida que reflejan el ADN de tu compañía, ya sea a través de eventos impactantes o regalos que cuentan historias.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Personalización Total</h3>
                  <p className="text-gray-500">Adaptamos cada detalle a tu identidad corporativa.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Impacto Social</h3>
                  <p className="text-gray-500">Tus proyectos apoyan a comunidades vulnerables localmente.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <p className="italic text-gray-600">
                "Trabajar con Bituin Lab transformó nuestra fiesta de fin de año en una experiencia inolvidable para los 500 empleados."
              </p>
              <div className="mt-4 font-bold text-gray-900">— Director de RRHH, TechCorp</div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <CheckCircle className="h-20 w-20 text-green-500 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Mensaje Enviado!</h3>
                <p className="text-gray-600">Gracias por contactarnos. Nuestro equipo corporativo te responderá en breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">Cotiza tu Proyecto</h3>
                <p className="text-gray-500 text-sm mb-6">Cuéntanos qué necesitas y lo haremos realidad.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Nombre</label>
                    <input required type="text" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange focus:bg-white transition-all outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Empresa</label>
                    <input required type="text" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange focus:bg-white transition-all outline-none" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Email Corporativo</label>
                    <input required type="email" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange focus:bg-white transition-all outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Teléfono</label>
                    <input required type="tel" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange focus:bg-white transition-all outline-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Tamaño de la Empresa</label>
                  <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange focus:bg-white transition-all outline-none">
                    <option>Pequeña (1-50 empleados)</option>
                    <option>Mediana (50-250 empleados)</option>
                    <option>Grande (+250 empleados)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Interés Principal</label>
                  <div className="flex gap-6 pt-2">
                    <label className="flex items-center cursor-pointer">
                      <input type="checkbox" className="w-5 h-5 text-brand-orange rounded focus:ring-brand-orange" />
                      <span className="ml-2 text-gray-700">Eventos Corporativos</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input type="checkbox" className="w-5 h-5 text-brand-orange rounded focus:ring-brand-orange" />
                      <span className="ml-2 text-gray-700">Kits / Merchandising</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Detalles del Proyecto</label>
                  <textarea required rows={4} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange focus:bg-white transition-all outline-none"></textarea>
                </div>

                <button type="submit" className="w-full bg-brand-orange text-white py-4 rounded-lg font-bold text-lg hover:bg-orange-600 shadow-lg transition-transform hover:-translate-y-1">
                  Enviar Solicitud
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Corporate;