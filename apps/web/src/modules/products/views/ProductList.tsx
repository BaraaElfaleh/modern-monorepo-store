import { Pagination } from "../../../components/Pagination";
import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import type { Product } from "../dto/dto";
import { WishlistItem } from "../../../components/Card";
import { CategoryFilter } from "./CategoryFilter"; 

export const ProductList = () => {
  const { data, isLoading, error } = useProducts();
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products: Product[] = data ?? [];

  // 1. منطق الفلترة (Filtering Logic)
  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const pageSize = 8;
  const totalPages = Math.ceil(filteredProducts.length / pageSize);

  // 2. تقسيم المنتجات المفلترة (Pagination Logic)
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  // دالة لتغيير الكاتيغوري وتصفير الصفحة
  const handleCategoryChange = (slug: string) => {
    setSelectedCategory(slug);
    setPage(1); // مهم جداً ترجع لصفحة 1 لما تفلتر
  };

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
      {/* إضافة قسم الفلترة هنا */}
      <section className="mb-8">
        <CategoryFilter 
          activeCategory={selectedCategory} 
          onCategoryChange={handleCategoryChange} 
        />
      </section>

      {/* شبكة المنتجات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((product) => (
            <WishlistItem key={product.id} item={product} />
          ))
        ) : (
          <div className="col-span-full text-center py-20 text-gray-500">
            No products found in this category.
          </div>
        )}
      </div>

      {/* Pagination - بيختفي إذا مفيش صفحات */}
      {totalPages > 1 && (
        <div className="mt-10 flex justify-center">
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      )}
    </main>
  );
};