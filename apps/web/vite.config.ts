import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import path from "path"; // أضف هذا الاستيراد

export default defineConfig({
  plugins: [tanstackRouter(), react()],
  resolve: {
    alias: {
      // نخبر فيت أن يذهب لمجلد الباكج مباشرة عند رؤية هذا الاسم
      "@repo/ui": path.resolve(__dirname, "../../packages/ui/src"),
      "@repo/theme": path.resolve(__dirname, "../../packages/theme/src"),
    },
  },
  server: {
    port: 3000,
    fs: {
      allow: [".."],
    },
  },
}); 