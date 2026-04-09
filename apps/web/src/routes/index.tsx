import { createFileRoute } from '@tanstack/react-router';
import { ProductsProvider } from '../modules/products/index'; 
import { ProductList } from '../modules/products/views/ProductList'; // تأكد من اسم المجلد seens أو views

export const Route = createFileRoute('/')({
  component: () => (
    <ProductsProvider>
      <div className="p-10">
        <h1 className="text-3xl font-bold text-cyan-400 mb-6">Nexus Store</h1>
        <ProductList />
      </div>
    </ProductsProvider>
  ),
});
