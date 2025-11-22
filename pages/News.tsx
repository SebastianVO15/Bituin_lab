import React from 'react';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { Article } from '../types';

const articles: Article[] = [
  {
    id: 1,
    title: "Nuevo lanzamiento de merch sostenible con RPET",
    date: "15 Oct 2024",
    summary: "Descubre nuestra nueva línea de productos fabricados con plástico reciclado. Moda y conciencia ambiental en una sola colección.",
    image: "https://picsum.photos/600/400?random=16",
    tags: ["Sostenibilidad", "Producto"]
  },
  {
    id: 2,
    title: "Evento corporativo exitoso con Nissan",
    date: "02 Oct 2024",
    summary: "Un vistazo detrás de cámaras a la experiencia inmersiva que diseñamos para el lanzamiento del nuevo modelo eléctrico.",
    image: "https://picsum.photos/600/400?random=17",
    tags: ["Eventos", "Casos de Éxito"]
  },
  {
    id: 3,
    title: "Mujeres que inspiran: Nuestra red de artesanas",
    date: "20 Sep 2024",
    summary: "Conoce las historias de las mujeres cabeza de hogar que tejen el futuro a través de nuestros productos artesanales.",
    image: "https://picsum.photos/600/400?random=18",
    tags: ["Social", "Comunidad"]
  },
  {
    id: 4,
    title: "Tendencias en regalos corporativos para 2025",
    date: "10 Sep 2024",
    summary: "Lo que viene: personalización extrema, bienestar y experiencias phygital para conectar con tus colaboradores.",
    image: "https://picsum.photos/600/400?random=19",
    tags: ["Tendencias", "B2B"]
  }
];

const News: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-black text-gray-900 uppercase mb-4">Noticias & Blog</h1>
          <p className="text-gray-600 text-lg">Novedades, inspiración y cultura Bituin.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
              <div className="relative h-64 overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 flex gap-2">
                  {article.tags.map(tag => (
                    <span key={tag} className="bg-white/90 backdrop-blur-sm text-brand-orange text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Tag className="h-3 w-3" /> {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  {article.date}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-orange transition-colors">{article.title}</h2>
                <p className="text-gray-600 mb-6 flex-1 leading-relaxed">{article.summary}</p>
                <button className="text-brand-orange font-bold flex items-center hover:translate-x-2 transition-transform self-start">
                  Leer más <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;