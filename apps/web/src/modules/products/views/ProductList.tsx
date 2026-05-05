import { Pagination } from "../../../components/Pagination";
import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { WishlistItem } from "../../../components/Card";
import { CategoryFilter } from "./CategoryFilter"; 
// 1. استيراد useSearch من الراوتر
import { useSearch } from "@tanstack/react-router";

export const ProductList = () => {
  const { data, isLoading, error } = useProducts();
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // 2. جلب نص البحث من الرابط (q)
  // استخدمنا strict: false لأن هذا المكون قد يكون جزءاً من مسار أو صفحة
  const { q } = useSearch({ strict: false }) as { q?: string };

  const products: any[] = data ?? [];

  // 3. تعديل منطق الفلترة ليشمل القسم والبحث معاً
  const filteredProducts = products.filter((p) => {
    // تحقق من القسم
    const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
    
    // تحقق من نص البحث (إذا كان q موجوداً، نبحث في الاسم والوصف مثلاً)
    const matchesSearch = !q || 
      p.name.toLowerCase().includes(q.toLowerCase()) || 
      p.description?.toLowerCase().includes(q.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const pageSize = 8;
  const totalPages = Math.ceil(filteredProducts.length / pageSize);

  // 4. تقسيم المنتجات المفلترة (Pagination Logic)
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  const handleCategoryChange = (slug: string) => {
    setSelectedCategory(slug);
    setPage(1); 
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
      <section className="mb-8">
        <CategoryFilter 
          activeCategory={selectedCategory} 
          onCategoryChange={handleCategoryChange} 
        />
      </section>

      {/* عرض رسالة بسيطة توضح عن ماذا يبحث المستخدم حالياً (اختياري) */}
      {q && (
        <div className="mb-6">
          <p className="text-text-muted italic">
            Showing results for: <span className="text-primary font-bold">"{q}"</span>
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((product) => (
            <WishlistItem key={product.id} item={product} />
          ))
        ) : (
          <div className="col-span-full text-center py-20 text-gray-500">
            {q 
              ? `No products match your search "${q}"` 
              : "No products found in this category."
            }
          </div>
        )}
      </div>

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