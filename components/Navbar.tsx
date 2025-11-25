import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();
  const location = useLocation();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Noticias', path: '/noticias' },
    { name: 'Tienda', path: '/tienda' },
    { name: 'Corporativo', path: '/corporativo' },
    { name: 'Clientes', path: '/clientes' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-white font-bold border-b-2 border-white' : 'text-white/90 hover:text-white hover:font-bold transition-all';
  };

  return (
    <nav className="bg-gradient-to-r from-brand-orange to-pink-500 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
              {/* Logo Container with white background for contrast */}
              <div className="bg-white/95 p-2 rounded-lg shadow-sm hover:scale-105 transition-transform">
                <img 
                  src="/logo.png" 
                  alt="Bituin Lab Logo" 
                  className="h-8 md:h-10 w-auto object-contain" 
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.classList.remove('bg-white/95', 'p-2');
                  }}
                />
                {/* Fallback text visible only if image is hidden/missing */}
                <span className="font-display font-black text-2xl tracking-wider text-white hidden">BITUIN LAB</span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-[10px] text-white/90 uppercase tracking-wide hidden lg:block font-bold leading-tight">
                  Entre lo que imaginas <br/> y lo que necesitas
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`${isActive(link.path)} px-3 py-2 text-sm font-medium`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/tienda" className="text-white hover:text-white relative">
                <ShoppingCart className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-white text-brand-orange text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-white/10 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-orange shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-white hover:bg-white/20 block px-3 py-4 rounded-md text-base font-bold uppercase text-center"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
             <Link
                to="/tienda"
                className="text-white bg-white/10 block px-3 py-4 rounded-md text-base font-bold uppercase text-center flex justify-center items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <ShoppingCart className="h-5 w-5" /> Carrito ({cartCount})
              </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;