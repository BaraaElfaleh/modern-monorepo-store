import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import "./index.css";

// استيراد الـ AuthProvider والـ Hook الخاص بك
import { AuthProvider, useAuth } from "./modules/auth"; 

// 1. إنشاء الراوتر مع تعريف الـ context مبدئياً
const router = createRouter({ 
  routeTree,
  context: {
    auth: undefined!, // سيتم تعبئته ديناميكياً داخل مكون App
  }
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// 2. إنشاء مكون وسيط لربط الـ Hook بالراوتر
function App() {
  const auth = useAuth(); // جلب حالة isLoading و isAuthenticated
  
  return (
    <RouterProvider 
      router={router} 
      context={{ auth }} // تمرير الحالة للراوتر ليستخدمها في beforeLoad
    />
  );
}

const rootElement = document.getElementById("root")!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      {/* 3. تغليف التطبيق بالـ AuthProvider ليتمكن useAuth من العمل */}
      <AuthProvider>
        <App />
      </AuthProvider>
    </StrictMode>,
  );
}