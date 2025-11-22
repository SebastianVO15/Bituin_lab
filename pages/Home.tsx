import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Coffee, Star, Heart } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?random=1" 
            alt="Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/90 to-pink-600/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center p-2 mb-6 bg-white/10 rounded-full backdrop-blur-sm">
            <Coffee className="h-5 w-5 mr-2 text-yellow-300" />
            <span className="text-sm font-medium tracking-wide uppercase">¡Un cafesito y a crear!</span>
          </div>
          <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl leading-tight mb-8">
            Transformamos productos en <br/>
            <span className="text-yellow-300 italic">experiencias</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-light">
            ¡Un cafesito para despertar la creatividad, y luego a trabajar! 
            Estamos entre lo que imaginas y lo que necesitas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/servicios" className="w-full sm:w-auto px-8 py-4 bg-white text-brand-orange font-bold rounded-full hover:bg-gray-100 transition-transform hover:scale-105 shadow-xl flex items-center justify-center">
              Nuestros Servicios
            </Link>
            <Link to="/contacto" className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors flex items-center justify-center">
              Hablemos <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-brand-orange rounded-2xl"></div>
              <img 
                src="https://picsum.photos/800/1000?random=2" 
                alt="Woman with tote bag" 
                className="relative rounded-2xl shadow-2xl z-10 w-full object-cover h-[500px]"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-display font-bold text-4xl text-gray-900 mb-6">
                Porque en nuestro mundo, <span className="text-brand-orange">lo corporativo no es gris</span>
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Diseñamos, planeamos y producimos experiencias que se sienten —porque creemos que cada instante puede ser inolvidable.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Somos <span className="font-bold text-brand-orange">Bituin Lab</span>: un laboratorio creativo que transforma lo convencional en experiencias auténticas y memorables. Nos obsesiona cada detalle.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-100 p-3 rounded-lg">
                    <Star className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Autenticidad</h4>
                    <p className="text-sm text-gray-500">Creamos identidad propia.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Heart className="h-6 w-6 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Pasión</h4>
                    <p className="text-sm text-gray-500">Sentimos y proponemos.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4">
           <h2 className="font-display font-black text-3xl md:text-4xl mb-8">¿Listos para hacer historia?</h2>
           <p className="text-xl text-gray-600 mb-10">Amplificamos tu impacto. Sentimos, proponemos y nos involucramos.</p>
           <Link to="/corporativo" className="inline-block px-10 py-4 bg-brand-orange text-white font-bold rounded-lg shadow-lg hover:bg-orange-600 transition-colors text-lg">
             Empieza tu Proyecto
           </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;