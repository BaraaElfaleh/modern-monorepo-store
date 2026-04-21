import React from "react";
import { Button } from "./button";

export function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 border-b border-border bg-background">
      <div className="font-bold text-lg">STORE</div>

      <div className="hidden md:flex gap-6 text-sm text-text-muted">
        <a>Home</a>
        <a>Products</a>
        <a>Deals</a>
      </div>

      <div className="flex gap-2">
        <Button variant="ghost">Login</Button>
        <Button>Cart</Button>
      </div>
    </nav>
  );
}