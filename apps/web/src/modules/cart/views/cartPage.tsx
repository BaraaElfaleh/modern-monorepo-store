// modules/cart/views/CartPage.tsx
import { Link } from "@tanstack/react-router";
import { Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { useCart } from "../hooks/useCart";
import type { CartItem as CartItemType } from "../entities/entity";

const CartRow = ({ item }: { item: CartItemType }) => {
  const { removeItem, updateItem } = useCart();

  return (
    <div className="flex items-center gap-4 py-5 border-b border-gray-100 dark:border-gray-800">
      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-20 h-20 object-cover rounded-xl"
      />

      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
          {item.title}
        </p>
        <p className="text-sm text-blue-600 font-semibold mt-0.5">
          ${item.price}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() =>
            updateItem({
              productId: item.productId,
              quantity: Math.max(1, item.quantity - 1),
            })
          }
          className="w-7 h-7 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-blue-400 hover:text-blue-600 transition text-sm"
        >
          −
        </button>
        <span className="w-6 text-center text-sm text-gray-800 dark:text-white">
          {item.quantity}
        </span>
        <button
          onClick={() =>
            updateItem({
              productId: item.productId,
              quantity: item.quantity + 1,
            })
          }
          className="w-7 h-7 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-blue-400 hover:text-blue-600 transition text-sm"
        >
          +
        </button>
      </div>

      <p className="w-20 text-right text-sm font-semibold text-gray-900 dark:text-white">
        ${item.total.toFixed(2)}
      </p>

      <button
        onClick={() => removeItem(item.productId)}
        className="p-1.5 text-gray-400 hover:text-red-500 transition"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
};

export const CartPage = () => {
  const { cart, clearCart } = useCart();

  if (cart.items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center gap-4">
        <ShoppingBag className="w-16 h-16 text-gray-200 dark:text-gray-700" />
        <p className="text-lg font-medium text-gray-900 dark:text-white">
          Your cart is empty
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Add some products to get started
        </p>
        <Link
          to="/"
          className="mt-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-6 py-2.5 rounded-full transition"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <Link
          to="/"
          className="p-2 text-gray-400 hover:text-blue-600 transition"
        >
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Cart
          <span className="ml-2 text-sm font-normal text-gray-400">
            ({cart.totalQuantity} items)
          </span>
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Items */}
        <div className="flex-1">
          <div className="hidden md:grid grid-cols-[1fr_auto_auto_auto] gap-4 pb-3 border-b border-gray-100 dark:border-gray-800 text-xs text-gray-400 uppercase tracking-wide">
            <span>Product</span>
            <span className="w-28 text-center">Quantity</span>
            <span className="w-20 text-right">Total</span>
            <span className="w-8" />
          </div>

          {cart.items.map((item) => (
            <CartRow key={item.productId} item={item} />
          ))}

          <button
            onClick={clearCart}
            className="mt-4 text-sm text-gray-400 hover:text-red-500 transition"
          >
            Clear cart
          </button>
        </div>

        {/* Summary */}
        <div className="w-full lg:w-80">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 space-y-4 sticky top-24">
            <h2 className="text-base font-semibold text-gray-900 dark:text-white">
              Order Summary
            </h2>

            <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${cart.totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-500">Free</span>
              </div>
            </div>

            <div className="flex justify-between text-base font-semibold text-gray-900 dark:text-white border-t border-gray-200 dark:border-gray-700 pt-4">
              <span>Total</span>
              <span>${cart.totalPrice.toFixed(2)}</span>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-3 rounded-full transition">
              Checkout
            </button>

            <Link
              to="/"
              className="block w-full text-center border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-sm py-3 rounded-full hover:border-blue-400 hover:text-blue-600 transition"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};