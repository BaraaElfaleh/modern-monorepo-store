import { Route } from "../../../routes/products/$id";
import { useProduct } from "../hooks/useProduct";

import { ShoppingCart, Heart, Tag, Star } from "lucide-react";

export const ProductDetails = () => {
  const { id } = Route.useParams();
  const productId = Number(id);

  const { data: product, isLoading, error } = useProduct(productId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading product</div>;
  if (!product) return <div>No product found</div>;

  return (
    <div className="min-h-screen bg-white p-10">
      <div className="grid md:grid-cols-2 gap-10">

        <img src={product.imageUrl} className="w-full object-contain" />

        <div>

          <div className="flex items-center gap-2 text-gray-500">
            <Tag size={16} />
            {product.category}
          </div>

          <h1 className="text-4xl font-bold mt-3">
            {product.name}
          </h1>

          <div className="flex mt-4 text-yellow-500">
            <Star fill="currentColor" />
            <Star fill="currentColor" />
            <Star fill="currentColor" />
            <Star fill="currentColor" />
          </div>

          <p className="mt-6 text-gray-600">
            {product.description}
          </p>

          <div className="mt-10 text-3xl font-bold text-green-600">
            ${product.price}
          </div>

          <div className="mt-10 flex gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-xl flex gap-2">
              <ShoppingCart size={18} />
              Add to Cart
            </button>

            <button className="border px-4 py-3 rounded-xl">
              <Heart />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};