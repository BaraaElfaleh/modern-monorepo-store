import { useState, useEffect } from 'react';
import { ProductService } from '../services/service'; // تأكد من المسار

// تعريف الـ Type (يفضل يكون بملف types منفصل)
interface Category {
  slug: string;
  name: string;
  url: string;
}

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        setLoading(true);
        const data = await ProductService.getCategories();
        setCategories(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error fetching categories");
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  return { categories, loading, error };
};