import { useProductsContext } from '../context';
import { Card } from './Card';
import { Pagination } from '../../../components/Pagination';
import { useState } from 'react';

export const ProductList = () => {
  const { products, isLoading, error } = useProductsContext();
  const [page, setPage] = useState(1);

  const pageSize = 8; // عدد المنتجات في كل صفحة
  const totalPages = Math.ceil(products.length / pageSize);

  // تحديد المنتجات الخاصة بالصفحة الحالية فقط
  const paginatedProducts = products.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  if (isLoading) {
    return (
      <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="animate-pulse bg-gray-200 h-80 rounded-2xl"></div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-96 text-red-500 font-bold">
        {error}
      </div>
    );
  }

  return (
    <main className="container mx-auto p-6">
      {/* الهيدر */}
      <header className="mb-10 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">المنتجات المميزة</h1>
          <p className="text-slate-500 mt-2">اكتشف أحدث القطع في متجرنا</p>
        </div>
        <span className="text-sm font-medium bg-slate-100 px-4 py-2 rounded-full text-slate-600">
          {products.length} products
        </span>
      </header>

      {/* المنتجات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
  {paginatedProducts.map((product) => (
    <Card key={product.id} product={product} />
  ))}
</div>

      {/* الباجينيشن */}
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