import { ProductAdapter } from '../adapter/adapter';
import type { DummyJSONResponse } from '../dto/dto';

export const ProductService = {
  async getAll() {
    try {
      const response = await fetch('https://dummyjson.com/products');
      
      if (!response.ok) {
        throw new Error(`خطأ في السيرفر: ${response.status}`);
      }

      const data: DummyJSONResponse = await response.json();
      
      // لاحظ هنا: نمرر data.products لأن المصفوفة بداخلها
      return ProductAdapter.toEntityList(data.products);
    } catch (error) {
      console.error("فشل جلب البيانات من DummyJSON:", error);
      throw error;
    }
  }
};