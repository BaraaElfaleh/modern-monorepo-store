import { createFileRoute } from '@tanstack/react-router';
import { ProductsProvider } from '../../modules/products/context'; 
import { ProductList } from '../../modules/products/views/ProductList';

// 1. تعريف نوع الـ Search Params
type ProductSearch = {
  q?: string;
};

export const Route = createFileRoute('/products/')({
  // 2. تفعيل الـ Validation للبحث
  validateSearch: (search: Record<string, unknown>): ProductSearch => {
    return {
      q: (search.q as string) || '',
    };
  },
  component: ProductPage,
});

function ProductPage() {
  // 3. استخراج قيمة البحث من الـ URL
  const { q } = Route.useSearch();

  return (
    <ProductsProvider>
      <div className="p-10 min-h-screen bg-background">
        {/* عرض عنوان البحث إذا كان موجوداً لإعطاء طابع فخم */}
        {q && (
          <div className="mb-8">
            <h2 className="text-text-muted text-sm uppercase tracking-[0.2em] font-bold">
              Search Results For:
            </h2>
            <h3 className="text-3xl font-bold text-primary mt-1">"{q}"</h3>
          </div>
        )}
        
        {/* نمرر الـ q كـ prop للـ ProductList ليفلتر المنتجات داخلياً */}
        <ProductList  />
      </div>
    </ProductsProvider>
  );
}