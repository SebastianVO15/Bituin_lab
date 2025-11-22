import React from 'react';
import { Calendar, Truck, Palette, ShoppingBag, Sparkles, Gift, Leaf, Users } from 'lucide-react';
import { Service } from '../types';

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Eventos Corporativos",
      description: "Eventos con identidad propia.",
      icon: <Calendar className="h-8 w-8 text-white" />,
      details: ["Fiestas empresariales con alma y estilo.", "Inauguraciones que dan vida a tu concepto.", "Cierres de año con gratitud y emoción."],
      image: "https://picsum.photos/600/400?random=3"
    },
    {
      id: 2,
      title: "Producción & Logística",
      description: "Sin afán, todo bajo control.",
      icon: <Truck className="h-8 w-8 text-white" />,
      details: ["Montaje y desmontaje de escenografía.", "Supervisión técnica (audio, video, luces).", "Coordinación de talento humano."],
      image: "https://picsum.photos/600/400?random=4"
    },
    {
      id: 3,
      title: "Escenografía & Ambientación",
      description: "Con carácter. No decoramos, diseñamos atmósferas.",
      icon: <Palette className="h-8 w-8 text-white" />,
      details: ["Ambientación creativa y funcional.", "Mobiliario con intención y estilo.", "Diseño escenográfico inmersivo."],
      image: "https://picsum.photos/600/400?random=5"
    },
    {
      id: 4,
      title: "Merchandising",
      description: "Que deja huella. Cultura de marca cargada de propósito.",
      icon: <ShoppingBag className="h-8 w-8 text-white" />,
      details: ["Producción de merch funcional y estético.", "Camisetas, bolsas, libretas, kits, gadgets.", "Materiales eco, empaques wow."],
      image: "https://picsum.photos/600/400?random=6"
    },
    {
      id: 5,
      title: "Maquila Cosméticos",
      description: "Productos de bienestar y belleza.",
      icon: <Sparkles className="h-8 w-8 text-white" />,
      details: ["Cuidado Corporal: Cremas, exfoliantes.", "Higiene y Cabello: Jabones, shampoos.", "Bienestar: Velas, aromaterapia."],
      image: "https://picsum.photos/600/400?random=7"
    },
    {
      id: 6,
      title: "Regalos y Boxes",
      description: "Con propósito.",
      icon: <Gift className="h-8 w-8 text-white" />,
      details: ["Producción con esencia de marca.", "Regalos para empleados y clientes.", "Presentaciones estéticas y sostenibles."],
      image: "https://picsum.photos/600/400?random=8"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-brand-orange py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-black text-white mb-4 uppercase">Nuestros Servicios</h1>
          <p className="text-white/90 text-xl max-w-2xl mx-auto">Soluciones integrales para marcas que quieren trascender.</p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="h-48 overflow-hidden relative">
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute bottom-4 right-4 bg-brand-orange p-2 rounded-full z-20 shadow-md">
                  {service.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-display font-bold text-2xl text-gray-900 mb-2">{service.title}</h3>
                <p className="text-brand-orange font-medium mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-gray-600 text-sm">
                      <span className="mr-2 text-brand-orange">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Environmental Commitment */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full mb-4">
              <Leaf className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 uppercase">Compromiso Ambiental</h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Creemos en el poder de la transformación y la sostenibilidad. Apostamos por materiales ecológicos y procesos responsables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "RPET", desc: "Fabricado a partir de botellas recicladas.", color: "bg-blue-50" },
              { title: "Papel Reciclado", desc: "Reduce la tala de árboles.", color: "bg-amber-50" },
              { title: "Bambú", desc: "Renovable y biodegradable.", color: "bg-green-50" },
              { title: "Corcho", desc: "Extraído sin dañar árboles.", color: "bg-orange-50" },
              { title: "Algodón Orgánico", desc: "Sin pesticidas ni fertilizantes.", color: "bg-purple-50" },
            ].map((item, i) => (
              <div key={i} className={`${item.color} p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all`}>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Commitment */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-brand-orange/20 rounded-full mb-6">
                <Users className="h-8 w-8 text-brand-orange" />
              </div>
              <h2 className="font-display font-black text-3xl md:text-5xl mb-6 text-brand-orange uppercase">Compromiso Social</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Trabajamos de la mano con fundaciones y comunidades vulnerables para generar oportunidades reales. Muchos de nuestros aliados son mujeres cabeza de hogar, jóvenes y adultos mayores.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-brand-orange rounded-full p-1 mr-3 mt-1"><span className="block w-2 h-2 bg-white rounded-full"></span></div>
                  <p><span className="font-bold">Generación de empleo:</span> Trabajo digno y sostenible.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-orange rounded-full p-1 mr-3 mt-1"><span className="block w-2 h-2 bg-white rounded-full"></span></div>
                  <p><span className="font-bold">Apoyo a mujeres:</span> Independencia económica.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-orange rounded-full p-1 mr-3 mt-1"><span className="block w-2 h-2 bg-white rounded-full"></span></div>
                  <p><span className="font-bold">Cultura:</span> Trabajamos con artesanos locales.</p>
                </li>
              </ul>
            </div>
            <div className="relative h-[500px] bg-gray-800 rounded-2xl overflow-hidden">
              <img src="https://picsum.photos/800/800?random=9" alt="Social Impact" className="w-full h-full object-cover opacity-70 hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                 <p className="text-2xl font-display font-bold">"Vinimos para hacerte inolvidable"</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;