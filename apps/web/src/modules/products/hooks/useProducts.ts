import { useState, useEffect } from 'react';
import type { ProductItem } from '../entities/entitiy';
import { ProductService } from '../services/service';

export const useProducts = () => {
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    ProductService.getAll()
      .then((data) => {
        if (isMounted) {
          setProducts(data);
          setError(null);
        }
      })
      .catch((err) => {
        if (isMounted) setError(err.message);
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => { isMounted = false; };
  }, []);

  return { products, isLoading, error };
};