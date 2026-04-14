import { ProductAdapter } from '../adapters/product.adapter';
import type { DummyJSONResponse } from '../dto/product.dto';

export const ProductService = {
  async getAll() {
    const response = await fetch('https://dummyjson.com/products?limit=0');

    if (!response.ok) {
      throw new Error(`Server Error: ${response.status}`);
    }

    const data: DummyJSONResponse = await response.json();

    return ProductAdapter.toEntityList(data.products);
  },

  async getById(id: string) {
    const response = await fetch(`https://dummyjson.com/products/${id}`);

    if (!response.ok) {
      throw new Error(`Server Error: ${response.status}`);
    }

    const data = await response.json();

    return ProductAdapter.toEntity(data);
  },
};