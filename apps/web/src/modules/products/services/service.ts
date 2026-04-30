import { ProductAdapter } from "../adapters/adapter";

export const ProductService = {
  async getAll() {
    const res = await fetch("https://dummyjson.com/products/?limit=1000");

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await res.json();

    // DummyJSON shape: { products: [] }
    return ProductAdapter.toEntityList(data.products);
  },

  async getById(id: number) {
    const res = await fetch(`https://dummyjson.com/products/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch product");
    }

    const data = await res.json();

    return ProductAdapter.toEntity(data);
  },
  async getCategories() {
    const res = await fetch("https://dummyjson.com/products/categories");

    if (!res.ok) {
      throw new Error("Failed to fetch categories");
    }

    const data = await res.json();
    return data;
  },
};
