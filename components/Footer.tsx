import React from 'react';
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <img 
              src="/logo.png" 
              alt="Bituin Lab" 
              className="h-20 w-auto object-contain"
              onError={(e) => {
                // Fallback to text if image fails to load
                e.currentTarget.style.display = 'none';
                const span = document.createElement('span');
                span.className = "font-display font-black text-2xl text-brand-orange";
                span.innerText = "BITUIN LAB";
                e.currentTarget.parentElement?.insertBefore(span, e.currentTarget);
              }}
            />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Un laboratorio creativo que transforma lo convencional en experiencias auténticas y memorables. Entre lo que imaginas y lo que necesitas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-lg">Contacto</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-orange flex-shrink-0" />
                <span>Cll 28 # 13a - 24 Oficina 311, Bogotá</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-orange flex-shrink-0" />
                <span>+57 319 6146495</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-orange flex-shrink-0" />
                <span>Pablogonzalez@bituinlab.com</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-lg">Menú Rápido</h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-400">
              <a href="#/" className="hover:text-brand-orange">Inicio</a>
              <a href="#/servicios" className="hover:text-brand-orange">Servicios</a>
              <a href="#/tienda" className="hover:text-brand-orange">Tienda</a>
              <a href="#/corporativo" className="hover:text-brand-orange">Corporativo</a>
              <a href="#/noticias" className="hover:text-brand-orange">Noticias</a>
              <a href="#/clientes" className="hover:text-brand-orange">Clientes</a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
          <p>&copy; 2025 Bituin Lab. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;