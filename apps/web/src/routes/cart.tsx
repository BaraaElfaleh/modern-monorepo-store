// routes/cart.tsx
import { createFileRoute } from "@tanstack/react-router";
import { CartPage } from "../modules/cart/views/cartPage";

export const Route = createFileRoute("/cart")({
  component: CartPage,
});