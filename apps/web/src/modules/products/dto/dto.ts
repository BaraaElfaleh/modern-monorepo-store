export interface ProductRemoteDTO {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  thumbnail: string; // DummyJSON يستخدم thumbnail كصورة أساسية
  images: string[];
}

export interface DummyJSONResponse {
  products: ProductRemoteDTO[];
  total: number;
  skip: number;
  limit: number;
}