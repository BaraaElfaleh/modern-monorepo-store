import type { ProductRemoteDTO } from '../dto/dto';
import type { Product } from '../entity/entity';

export const ProductAdapter = {
  toEntity(dto: ProductRemoteDTO): Product {
    return {
      id: String(dto.id),
      name: dto.title,
      price: dto.price,
      description: dto.description,
      // نستخدم thumbnail لأنها محملة مسبقاً وسريعة جداً في العرض
      imageUrl: dto.thumbnail, 
      category: dto.category,
    };
  },

  toEntityList(dtos: ProductRemoteDTO[]): Product[] {
    return (dtos || []).map((dto) => this.toEntity(dto));
  }
};