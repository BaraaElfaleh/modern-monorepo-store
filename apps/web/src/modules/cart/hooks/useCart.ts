import { useCartContext } from '../context';
import { adaptCartItem } from '../adapters/adapter';

export const useCart = () => {
  const { cart, addItem, removeItem, updateItem, clearCart } = useCartContext();

  const isInCart = (id: string | number) => 
    cart.items.some((item) => item.productId === Number(id));

  const handleAdd = (product: { id: string | number; name: string; price: number; imageUrl: string; quantity?: number }) => {
    const item = adaptCartItem(
      {
        id: Number(product.id),
        title: product.name,
        price: product.price,
        thumbnail: product.imageUrl,
      },
      product.quantity || 1
    );
    addItem(item);
  };

  return {
    cart: cart.items, // نعيد المصفوفة هنا لتعمل الـ map في الصفحة فوراً
    totalPrice: cart.totalPrice,
    cartCount: cart.totalQuantity,
    isInCart,
    addItem: handleAdd,
    removeItem: (id: string | number) => removeItem(Number(id)),
    updateItem: (id: string | number, q: number) => updateItem({ productId: Number(id), quantity: q }),
    clearCart,
  };
};