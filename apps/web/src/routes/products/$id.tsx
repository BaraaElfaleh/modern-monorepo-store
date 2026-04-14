import { createFileRoute } from '@tanstack/react-router';
import { ProductDetails } from '../../modules/products/views/ProductDetails';

export const Route = createFileRoute('/products/$id')({
  component: ProductDetails,
});