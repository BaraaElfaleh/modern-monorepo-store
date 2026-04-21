import type { Product} from '../dto/dto';
import type { ProductItem } from '../entities/entitiy';

export const ProductAdapter = {
  toEntity(dto: Product):ProductItem {
    return {
      id: String(dto.id),
      name: dto.title,
      price: dto.price,
      description: dto.description,
      imageUrl: dto.thumbnail, 
      category: dto.category,
    };
  },

  toEntityList(dtos: Product[]): ProductItem[] {
    return (dtos || []).map((dto) => this.toEntity(dto));
  }
};