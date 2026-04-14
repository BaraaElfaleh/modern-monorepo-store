import { ProductAdapter } from '../adapters/adapter';
import type { DummyJSONResponse } from '../dto/dto';

export const ProductService = {
  async getAll() {
    try {
      const response = await fetch('https://dummyjson.com/products?limit=0');
      
      if (!response.ok) {
        throw new Error(`خطأ في السيرفر: ${response.status}`);
      }

      const data: DummyJSONResponse = await response.json();
      
      
      return ProductAdapter.toEntityList(data.products);
    } catch (error) {
      console.error("فشل جلب البيانات من DummyJSON:", error);
      throw error;
    }
  }
};