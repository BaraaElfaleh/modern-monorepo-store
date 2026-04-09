import { useProductsContext } from '../index';

export const ProductList = () => {
  const { products, loading, error } = useProductsContext();

  if (loading) {
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
      {/* الهيدر الخاص بالموديول */}
      <header className="mb-10 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">المنتجات المميزة</h1>
          <p className="text-slate-500 mt-2">اكتشف أحدث القطع في متجرنا</p>
        </div>
        <span className="text-sm font-medium bg-slate-100 px-4 py-2 rounded-full text-slate-600">
          {products.length} منتج
        </span>
      </header>

      {/* شبكة المنتجات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <article 
            key={product.id} 
            className="group relative bg-white border border-slate-100 rounded-3xl p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            {/* منطقة الصورة */}
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-50 mb-4">
              <img 
                src={product.imageUrl} 
                alt={product.name}
                className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
              />
              {/* زر المفضلة السريع (اختياري) */}
              <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-sm hover:bg-red-50 hover:text-red-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              </button>
            </div>

            {/* تفاصيل المنتج */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest">{product.category}</span>
              <h2 className="font-bold text-slate-800 line-clamp-1 group-hover:text-cyan-700 transition-colors">
                {product.name}
              </h2>
              <p className="text-sm text-slate-500 line-clamp-2 h-10 leading-relaxed">
                {product.description}
              </p>
              
              <div className="pt-4 flex items-center justify-between">
                <span className="text-2xl font-black text-slate-900">${product.price}</span>
                <button className="bg-slate-900 text-white p-3 rounded-2xl hover:bg-cyan-600 transition-all active:scale-95 shadow-lg shadow-slate-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.1-5.38a1 1 0 0 0-1-1.21H5.75"/></svg>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
};