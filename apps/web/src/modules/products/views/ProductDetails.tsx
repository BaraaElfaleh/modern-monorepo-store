import { Route } from '../../../routes/products/$id';
import { useEffect, useState } from 'react';
import { ProductService } from '../services/service';
import type { ProductItem } from '../entities/entitiy';

import { ShoppingCart, Heart, Tag, Star } from 'lucide-react';

export const ProductDetails = () => {
  const { id } = Route.useParams();

  const [product, setProduct] = useState<ProductItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    ProductService.getAll()
      .then((products) => {
        const found = products.find((p) => p.id === id);
        setProduct(found || null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading)
    return <div className="h-screen flex items-center justify-center text-gray-500">Loading...</div>;

  if (error)
    return <div className="h-screen flex items-center justify-center text-red-500">{error}</div>;

  if (!product)
    return <div className="h-screen flex items-center justify-center">No product found</div>;

  return (
    <div className="min-h-screen bg-white">

      {/* MAIN SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGE SIDE */}
        <div className="flex items-center justify-center">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full max-h-125 object-contain hover:scale-105 transition duration-300"
          />
        </div>

        {/* INFO SIDE */}
        <div className="flex flex-col justify-center">

          {/* CATEGORY */}
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Tag size={16} />
            {product.category}
          </div>

          {/* TITLE */}
          <h1 className="text-5xl font-bold mt-3 text-gray-900 leading-tight">
            {product.name}
          </h1>

          {/* STARS */}
          <div className="flex items-center gap-1 mt-4 text-yellow-500">
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} className="text-gray-300" />
            <span className="text-gray-500 text-sm ml-2">(4.0)</span>
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            {product.description}
          </p>

          {/* PRICE */}
          <div className="mt-10">
            <p className="text-5xl font-extrabold text-green-600">
              ${product.price}
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Free shipping • 30-day return
            </p>
          </div>

          {/* ACTIONS */}
          <div className="mt-10 flex gap-4">
            <button className="flex-1 bg-black text-white py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition">
              <ShoppingCart size={18} />
              Add to Cart
            </button>

            <button className="px-6 border rounded-xl hover:bg-gray-100 transition flex items-center justify-center">
              <Heart size={20} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};