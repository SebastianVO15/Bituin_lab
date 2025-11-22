import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingCart, Plus, Minus, User, Calendar } from 'lucide-react';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getProductById, addReview } = useProducts();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  // Review Form State
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [showReviewForm, setShowReviewForm] = useState(false);

  const product = getProductById(Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Producto no encontrado</h2>
        <Link to="/tienda" className="text-brand-orange hover:underline flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" /> Volver a la tienda
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    for(let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    addReview(product.id, {
      userName: name,
      rating,
      comment,
    });
    setName('');
    setComment('');
    setRating(5);
    setShowReviewForm(false);
  };

  // Calculate stats
  const reviews = product.reviews || [];
  const averageRating = reviews.length > 0 
    ? (reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length).toFixed(1) 
    : '0.0';

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Breadcrumb / Back */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link to="/tienda" className="text-gray-500 hover:text-brand-orange flex items-center gap-2 text-sm font-bold">
            <ArrowLeft className="h-4 w-4" /> Volver a la Tienda
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="rounded-3xl overflow-hidden shadow-2xl bg-white h-[500px] md:h-[600px]">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <div className="mb-2">
              <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {product.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-black text-gray-900 mb-4">{product.name}</h1>
            
            {/* Rating Summary */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                 {[1, 2, 3, 4, 5].map((star) => (
                   <Star 
                     key={star} 
                     className={`h-6 w-6 ${star <= Math.round(Number(averageRating)) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                   />
                 ))}
              </div>
              <span className="text-lg font-bold text-gray-700">{averageRating} / 5.0</span>
              <span className="text-gray-400 text-sm">({reviews.length} reseñas)</span>
            </div>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">{product.description}</p>

            <div className="flex items-center gap-6 mb-8">
              <span className="text-4xl font-black text-gray-900">${product.price.toFixed(2)}</span>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 border-b border-gray-100 pb-12">
              <div className="flex items-center border-2 border-gray-200 rounded-full px-4 py-3 w-fit">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-1 text-gray-500 hover:text-brand-orange">
                  <Minus className="h-5 w-5" />
                </button>
                <span className="mx-4 font-bold text-xl w-8 text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-1 text-gray-500 hover:text-brand-orange">
                  <Plus className="h-5 w-5" />
                </button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-brand-orange text-white py-4 px-8 rounded-full font-bold text-lg shadow-xl hover:bg-orange-600 transition-all flex items-center justify-center gap-3 hover:scale-105"
              >
                <ShoppingCart className="h-6 w-6" /> Añadir al Carrito
              </button>
            </div>

            {/* Reviews Section */}
            <div>
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-display font-bold text-gray-900">Reseñas de Clientes</h3>
                <button 
                  onClick={() => setShowReviewForm(!showReviewForm)}
                  className="text-brand-orange font-bold hover:text-orange-700 transition-colors text-sm border border-brand-orange px-4 py-2 rounded-lg"
                >
                  {showReviewForm ? 'Cancelar Reseña' : 'Escribir Reseña'}
                </button>
              </div>

              {/* Add Review Form */}
              {showReviewForm && (
                <div className="bg-gray-50 p-6 rounded-xl mb-8 border border-gray-200 animate-fade-in">
                  <h4 className="font-bold text-lg mb-4">Comparte tu experiencia</h4>
                  <form onSubmit={handleSubmitReview} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Tu Calificación</label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button 
                            key={star} 
                            type="button"
                            onClick={() => setRating(star)}
                            className="focus:outline-none transition-transform hover:scale-110"
                          >
                            <Star className={`h-8 w-8 ${star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Tu Nombre</label>
                      <input 
                        required
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange outline-none"
                        placeholder="Ej: Ana López"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Tu Comentario</label>
                      <textarea 
                        required
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        rows={3}
                        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange outline-none"
                        placeholder="¿Qué te pareció el producto?"
                      ></textarea>
                    </div>
                    <button type="submit" className="bg-gray-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800">
                      Publicar Reseña
                    </button>
                  </form>
                </div>
              )}

              {/* Reviews List */}
              <div className="space-y-6">
                {reviews.length === 0 ? (
                  <p className="text-gray-500 italic">Aún no hay reseñas para este producto. ¡Sé el primero!</p>
                ) : (
                  reviews.map((review) => (
                    <div key={review.id} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-brand-orange rounded-full flex items-center justify-center text-white font-bold">
                            <User className="h-5 w-5" />
                          </div>
                          <div>
                            <h5 className="font-bold text-gray-900">{review.userName}</h5>
                            <div className="flex text-yellow-400">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`h-3 w-3 ${i < review.rating ? 'fill-current' : 'text-gray-300'}`} />
                              ))}
                            </div>
                          </div>
                        </div>
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <Calendar className="h-3 w-3" /> {review.date}
                        </span>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;