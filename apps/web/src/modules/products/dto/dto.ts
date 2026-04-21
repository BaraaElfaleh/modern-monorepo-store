export interface Product {
  imageUrl: string | undefined;
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  thumbnail: string; // DummyJSON يستخدم thumbnail كصورة أساسية
  images: string[];
}

export interface DummyJSONResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}