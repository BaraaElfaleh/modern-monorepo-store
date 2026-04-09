import { createRootRoute, Outlet } from "@tanstack/react-router";


export const Route = createRootRoute({
  component: () => (
    <>
      {/* هنا يمكنك وضع الهيدر أو النافبار لكل الموقع */}
      <nav className="p-4 bg-slate-900 text-white flex gap-4">
        <h1 className="font-bold text-cyan-400">Nexus Store</h1>
      </nav>
      
      {/* الـ Outlet هو المحرك الذي سيعرض صفحة الـ '/' أو أي صفحة أخرى */}
      <Outlet /> 
    </>
  ),
});