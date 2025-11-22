import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-display font-black uppercase">Contacto</h1>
          <p className="mt-4 text-xl text-gray-400">Hablemos de tu próxima gran idea.</p>
        </div>
      </div>

      <div className="flex-grow max-w-7xl mx-auto px-4 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">
          
          {/* Contact Info */}
          <div className="bg-brand-orange p-10 text-white flex flex-col justify-between relative overflow-hidden">
             {/* Decor circle */}
             <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full"></div>
             <div className="absolute bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full"></div>

            <div>
              <h2 className="text-3xl font-bold mb-8 relative z-10">Información</h2>
              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm uppercase font-bold tracking-wider">Teléfono / WhatsApp</p>
                    <p className="text-xl font-bold">+57 319 6146495</p>
                    <p className="text-sm mt-1 text-white/80">Pablo González – CEO</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm uppercase font-bold tracking-wider">Email</p>
                    <p className="text-lg font-bold break-all">Pablogonzalez@bituinlab.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm uppercase font-bold tracking-wider">Oficina</p>
                    <p className="text-lg font-bold">Cll 28 # 13a - 24 Oficina 311</p>
                    <p className="text-sm text-white/80">Bogotá, Colombia</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 relative z-10">
               <p className="italic text-white/80">"Entre lo que imaginas y lo que necesitas."</p>
            </div>
          </div>

          {/* Simple Form */}
          <div className="p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h2>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Mensaje simulado enviado'); }}>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Nombre</label>
                <input type="text" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none transition-all" placeholder="Tu nombre" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none transition-all" placeholder="tu@email.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Mensaje</label>
                <textarea rows={4} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange outline-none transition-all" placeholder="¿En qué podemos ayudarte?"></textarea>
              </div>
              <button type="submit" className="w-full bg-gray-900 text-white py-4 rounded-lg font-bold flex justify-center items-center gap-2 hover:bg-gray-800 transition-colors">
                Enviar Mensaje <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
        
        {/* Map Placeholder */}
        <div className="mt-12 w-full h-64 bg-gray-200 rounded-3xl flex items-center justify-center text-gray-400 uppercase font-bold tracking-widest">
           Google Maps Placeholder - Bogotá
        </div>
      </div>
    </div>
  );
};

export default Contact;