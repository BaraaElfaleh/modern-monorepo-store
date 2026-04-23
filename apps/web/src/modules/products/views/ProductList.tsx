import { Card } from "./Card";
import { Pagination } from "../../../components/Pagination";
import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import type { Product } from "../dto/dto";

export const ProductList = () => {
  const { data, isLoading, error } = useProducts();
  const [page, setPage] = useState(1);

 
  const products: Product[] = data ?? [];

  const pageSize = 8;
  const totalPages = Math.ceil(products.length / pageSize);

  const paginatedProducts = products.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  if (isLoading) {
    return (
      <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="animate-pulse bg-gray-200 h-80 rounded-2xl" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-96 text-red-500 font-bold">
        {(error as Error).message}
      </div>
    );
  }

  return (
    <main className="container mx-auto p-6">

      <header className="mb-10 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black">المنتجات</h1>
          <p className="text-slate-500 mt-2">اكتشف منتجاتنا</p>
        </div>

        <span className="text-sm bg-slate-100 px-4 py-2 rounded-full">
          {products.length} products
        </span>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {paginatedProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>

    </main>
  );
};