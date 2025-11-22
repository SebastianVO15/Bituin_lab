import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Shop from './pages/Shop';
import Corporate from './pages/Corporate';
import News from './pages/News';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import { CartProvider } from './context/CartContext';
import { ProductProvider } from './context/ProductContext';

// ScrollToTop component to ensure page starts at top on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <Router>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen font-sans text-gray-800">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/servicios" element={<Services />} />
                <Route path="/tienda" element={<Shop />} />
                <Route path="/tienda/:id" element={<ProductDetail />} />
                <Route path="/corporativo" element={<Corporate />} />
                <Route path="/noticias" element={<News />} />
                <Route path="/clientes" element={<Clients />} />
                <Route path="/contacto" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;