import React, { useState, useMemo } from 'react';
import { Plus, ShoppingCart, Trash2, X, ShoppingBag, Search, Filter, ArrowUpDown, Eye, Minus, CreditCard, Landmark } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useProducts } from '../context/ProductContext';
import { Link } from 'react-router-dom';

const Shop: React.FC = () => {
  const { products } = useProducts();
  const { items, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  // Steps: cart -> form -> payment -> success
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'form' | 'payment' | 'success'>('cart');
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  
  // Filter & Sort States
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [sortOrder, setSortOrder] = useState<'default' | 'asc' | 'desc'>('default');

  // Get unique categories
  const categories = ['Todos', ...Array.from(new Set(products.map(p => p.category)))];

  // Filter and Sort Logic
  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'Todos') {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (sortOrder === 'asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, selectedCategory, sortOrder]);

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutStep('payment');
  };

  const handleFinalPayment = () => {
    if (!paymentMethod) return;
    
    // Aquí iría la lógica para conectar con Odoo:
    // 1. Enviar items y datos de usuario a Odoo API -> Crear Sale Order
    // 2. Recibir confirmación
    // 3. Procesar pago con la pasarela seleccionada
    
    setCheckoutStep('success');
    setTimeout(() => {
      clearCart();
      setCheckoutStep('cart');
      setPaymentMethod('');
      setIsCartOpen(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-pink-600 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-orange to-pink-600 opacity-90"></div>
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center relative z-10">
          <div className="mb-6 md:mb-0">
            <h1 className="text-4xl font-display font-black uppercase">Tienda Bituin</h1>
            <p className="mt-2 opacity-90 text-lg">Lleva la creatividad contigo.</p>
          </div>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="bg-white text-pink-600 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-all flex items-center gap-2 group"
          >
            <ShoppingCart className="group-hover:scale-110 transition-transform" /> 
            <span className="hidden sm:inline">Ver Carrito</span> 
            <span className="bg-brand-orange text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
              {items.length}
            </span>
          </button>
        </div>
      </div>

      {/* Filters & Toolbar */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  selectedCategory === cat 
                    ? 'bg-brand-orange text-white shadow-md' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-center md:justify-end">
            <span className="text-gray-500 text-sm font-medium flex items-center gap-1">
              <ArrowUpDown className="h-4 w-4" /> Ordenar:
            </span>
            <select 
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as any)}
              className="bg-gray-100 border-none text-sm font-bold text-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-orange focus:outline-none cursor-pointer"
            >
              <option value="default">Relevancia</option>
              <option value="asc">Precio: Menor a Mayor</option>
              <option value="desc">Precio: Mayor a Menor</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-600">No se encontraron productos.</h3>
            <p className="text-gray-400">Intenta cambiar los filtros.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all group flex flex-col">
                <Link to={`/tienda/${product.id}`} className="h-64 overflow-hidden relative">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-white text-brand-orange px-4 py-2 rounded-full font-bold flex items-center gap-2 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <Eye className="h-4 w-4" /> Ver Detalles
                    </span>
                  </div>
                </Link>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-xs font-bold text-pink-500 uppercase tracking-wide">{product.category}</div>
                    {product.reviews && product.reviews.length > 0 && (
                       <div className="flex items-center text-yellow-400 text-xs font-bold">
                         ★ {(product.reviews.reduce((acc, rev) => acc + rev.rating, 0) / product.reviews.length).toFixed(1)}
                       </div>
                    )}
                  </div>
                  <Link to={`/tienda/${product.id}`} className="block">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-brand-orange transition-colors">{product.name}</h3>
                  </Link>
                  <p className="text-gray-600 text-sm mb-4 flex-1">{product.description}</p>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                    <span className="text-2xl font-black text-gray-900">${product.price.toFixed(2)}</span>
                    <button 
                      onClick={() => addToCart(product)}
                      className="bg-brand-orange text-white p-3 rounded-full hover:bg-orange-600 transition-colors shadow-md active:scale-95"
                      title="Añadir al carrito"
                    >
                      <Plus className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Cart Sidebar/Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsCartOpen(false)}></div>
          <div className="absolute inset-y-0 right-0 max-w-md w-full bg-white shadow-2xl flex flex-col transform transition-transform duration-300 animate-slide-in">
            
            {/* Cart Header */}
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-800">
                {checkoutStep === 'cart' && 'Tu Carrito'}
                {checkoutStep === 'form' && 'Datos de Envío'}
                {checkoutStep === 'payment' && 'Método de Pago'}
                {checkoutStep === 'success' && '¡Orden Completada!'}
              </h2>
              <button onClick={() => setIsCartOpen(false)} className="text-gray-500 hover:text-red-500">
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Cart Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {checkoutStep === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 animate-bounce">
                    <ShoppingBag className="h-12 w-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Gracias por tu compra!</h3>
                  <p className="text-gray-600 mb-6">Tu pedido ha sido enviado a nuestro sistema (Odoo).</p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 w-full">
                    <p className="text-sm text-gray-500">ID de Orden: <span className="font-mono text-gray-900 font-bold">SO-{Math.floor(Math.random() * 10000)}</span></p>
                  </div>
                </div>
              ) : items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-400">
                  <ShoppingCart className="h-16 w-16 mb-4 opacity-20" />
                  <p>Tu carrito está vacío.</p>
                </div>
              ) : checkoutStep === 'cart' ? (
                <div className="space-y-6 animate-fade-in">
                  {items.map(item => (
                    <div key={item.id} className="flex gap-4 bg-white p-2 rounded-lg border border-gray-100 shadow-sm">
                      <img src={item.image} alt={item.name} className="w-20 h-20 rounded-md object-cover" />
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 text-sm">{item.name}</h4>
                        <p className="text-brand-orange font-bold text-sm">${item.price.toFixed(2)}</p>
                        <div className="flex items-center mt-2 gap-3">
                          <div className="flex items-center border border-gray-300 rounded-md">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 hover:bg-gray-100"><Minus className="h-3 w-3" /></button>
                            <span className="px-2 text-sm font-medium min-w-[1.5rem] text-center">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 hover:bg-gray-100"><Plus className="h-3 w-3" /></button>
                          </div>
                          <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 ml-auto">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : checkoutStep === 'form' ? (
                // Checkout Form
                <form id="shipping-form" onSubmit={handleShippingSubmit} className="space-y-4 animate-fade-in">
                   <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Landmark className="h-5 w-5 text-brand-orange" /> Dirección de Entrega</h3>
                   <input required type="text" placeholder="Nombre Completo" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:outline-none" />
                   <input required type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:outline-none" />
                   <input required type="text" placeholder="Dirección" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:outline-none" />
                   <div className="grid grid-cols-2 gap-4">
                     <input required type="text" placeholder="Ciudad" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:outline-none" />
                     <input required type="text" placeholder="Teléfono" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:outline-none" />
                   </div>
                </form>
              ) : (
                // Payment Selection
                <div className="space-y-6 animate-fade-in">
                  <div className="bg-yellow-50 p-4 rounded-lg text-sm text-yellow-800 border border-yellow-200 mb-6">
                    Al confirmar, se creará la orden en nuestro sistema.
                  </div>
                  
                  <h3 className="font-bold text-gray-900 mb-4">Selecciona tu medio de pago:</h3>
                  
                  <button 
                    onClick={() => setPaymentMethod('stripe')}
                    className={`w-full p-4 rounded-xl border-2 flex items-center justify-between transition-all ${
                      paymentMethod === 'stripe' 
                      ? 'border-brand-orange bg-orange-50 shadow-md' 
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-600 text-white p-2 rounded-md">
                        <CreditCard className="h-6 w-6" />
                      </div>
                      <div className="text-left">
                        <span className="block font-bold text-gray-900">Tarjeta Crédito/Débito</span>
                        <span className="text-xs text-gray-500">Procesado por Stripe</span>
                      </div>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'stripe' ? 'border-brand-orange' : 'border-gray-300'}`}>
                      {paymentMethod === 'stripe' && <div className="w-3 h-3 rounded-full bg-brand-orange"></div>}
                    </div>
                  </button>

                  <button 
                    onClick={() => setPaymentMethod('mercadopago')}
                    className={`w-full p-4 rounded-xl border-2 flex items-center justify-between transition-all ${
                      paymentMethod === 'mercadopago' 
                      ? 'border-brand-orange bg-orange-50 shadow-md' 
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-400 text-white p-2 rounded-md">
                        <Landmark className="h-6 w-6" />
                      </div>
                      <div className="text-left">
                        <span className="block font-bold text-gray-900">Mercado Pago / PSE</span>
                        <span className="text-xs text-gray-500">Transferencia bancaria segura</span>
                      </div>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'mercadopago' ? 'border-brand-orange' : 'border-gray-300'}`}>
                      {paymentMethod === 'mercadopago' && <div className="w-3 h-3 rounded-full bg-brand-orange"></div>}
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Cart Footer */}
            {items.length > 0 && checkoutStep !== 'success' && (
              <div className="p-6 bg-gray-50 border-t border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">Total</span>
                  <span className="text-2xl font-black text-gray-900">${cartTotal.toFixed(2)}</span>
                </div>
                
                {checkoutStep === 'cart' ? (
                   <button 
                     onClick={() => setCheckoutStep('form')}
                     className="w-full bg-brand-orange text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors shadow-md"
                   >
                     Continuar Compra
                   </button>
                ) : checkoutStep === 'form' ? (
                  <div className="flex gap-3">
                    <button 
                      onClick={() => setCheckoutStep('cart')}
                      className="w-1/3 bg-gray-200 text-gray-800 py-3 rounded-lg font-bold hover:bg-gray-300 transition-colors"
                    >
                      Atrás
                    </button>
                    <button 
                      type="submit"
                      form="shipping-form"
                      className="w-2/3 bg-brand-orange text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors shadow-md"
                    >
                      Ir a Pagar
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-3">
                    <button 
                      onClick={() => setCheckoutStep('form')}
                      className="w-1/3 bg-gray-200 text-gray-800 py-3 rounded-lg font-bold hover:bg-gray-300 transition-colors"
                    >
                      Atrás
                    </button>
                    <button 
                      onClick={handleFinalPayment}
                      disabled={!paymentMethod}
                      className={`w-2/3 py-3 rounded-lg font-bold transition-colors shadow-md ${
                        paymentMethod 
                        ? 'bg-green-600 text-white hover:bg-green-700' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      Pagar Ahora
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;