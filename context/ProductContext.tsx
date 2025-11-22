import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Product, Review } from '../types';

const initialProducts: Product[] = [
  { id: 1, name: "Botella Eco Bamboo", description: "Acero inoxidable y bambú. 500ml.", price: 35.00, category: "Merch", image: "https://picsum.photos/300/300?random=10", reviews: [] },
  { id: 2, name: "Tote Bag 'Bituin'", description: "Algodón orgánico resistente.", price: 15.00, category: "Textil", image: "https://picsum.photos/300/300?random=11", reviews: [] },
  { id: 3, name: "Libreta Sostenible", description: "Papel reciclado y tapas de corcho.", price: 12.50, category: "Papelería", image: "https://picsum.photos/300/300?random=12", reviews: [] },
  { id: 4, name: "Kit Spa Relax", description: "Vela, jabón artesanal y sales.", price: 45.00, category: "Cosmética", image: "https://picsum.photos/300/300?random=13", reviews: [] },
  { id: 5, name: "Camiseta 'Be Creative'", description: "Diseño exclusivo. Tallas S-XL.", price: 25.00, category: "Textil", image: "https://picsum.photos/300/300?random=14", reviews: [] },
  { id: 6, name: "Mug Cerámica", description: "Perfecto para ese café creativo.", price: 18.00, category: "Hogar", image: "https://picsum.photos/300/300?random=15", reviews: [] },
];

interface ProductContextType {
  products: Product[];
  getProductById: (id: number) => Product | undefined;
  addReview: (productId: number, review: Omit<Review, 'id' | 'date'>) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  // Load from local storage on mount or use initial
  useEffect(() => {
    const savedProducts = localStorage.getItem('bituin_products');
    if (savedProducts) {
      try {
        setProducts(JSON.parse(savedProducts));
      } catch (e) {
        console.error("Failed to parse products", e);
        setProducts(initialProducts);
      }
    } else {
      setProducts(initialProducts);
    }
  }, []);

  // Save to local storage on change
  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem('bituin_products', JSON.stringify(products));
    }
  }, [products]);

  const getProductById = (id: number) => {
    return products.find(p => p.id === id);
  };

  const addReview = (productId: number, reviewData: Omit<Review, 'id' | 'date'>) => {
    setProducts(prev => prev.map(product => {
      if (product.id === productId) {
        const newReview: Review = {
          ...reviewData,
          id: Math.random().toString(36).substr(2, 9),
          date: new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })
        };
        return {
          ...product,
          reviews: [newReview, ...(product.reviews || [])]
        };
      }
      return product;
    }));
  };

  return (
    <ProductContext.Provider value={{ products, getProductById, addReview }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) throw new Error('useProducts must be used within a ProductProvider');
  return context;
};