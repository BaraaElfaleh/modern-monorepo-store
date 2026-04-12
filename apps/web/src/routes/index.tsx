import { createFileRoute } from '@tanstack/react-router';
import { ProductsProvider } from '../modules/products/index'; 
import { ProductList } from '../modules/products/views/ProductList'; // تأكد من اسم المجلد seens أو views

export const Route = createFileRoute('/')({
  component: () => (
    <ProductsProvider>
      <div className="p-10">       
        <ProductList />
      </div>
    </ProductsProvider>
  ),
});
