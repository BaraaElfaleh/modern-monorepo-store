import { createContext, useContext,type ReactNode } from 'react';
import type { Product } from './entity/entity';
import { useProducts } from './hooks/useProducts';

interface ProductsContextType {
  products: Product[];
  isLoading: boolean;
  error: string | null;
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const { products, isLoading, error } = useProducts();

  return (
    <ProductsContext.Provider value={{ products, isLoading: isLoading, error }}>
      {children}
    </ProductsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useProductsContext = () => {
  const context = useContext(ProductsContext);
  if (!context) throw new Error('useProductsContext must be used within a ProductsProvider');
  return context;
};