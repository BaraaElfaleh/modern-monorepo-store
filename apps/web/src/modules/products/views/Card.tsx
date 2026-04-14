export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
}

export const Card = ({ products }: { products: Array<Product> }) => {
    
    return(products.map((product) => (
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
                <span className="text-xl font-black text-slate-900">${product.price}</span>
                <button className="bg-slate-900 text-white p-1 w-20 rounded-2xl hover:bg-cyan-600 transition-all active:scale-95 shadow-lg shadow-slate-200">
                Buy
                </button>
              </div>
            </div>
          </article>
        )));

};