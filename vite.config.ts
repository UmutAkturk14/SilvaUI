import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@lib": path.resolve(__dirname, "src/lib"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@utils/*": path.resolve(__dirname, "src/utils/*"),
      "@types/*": path.resolve(__dirname, "src/types/*"),
      "@interfaces/*": path.resolve(__dirname, "src/interfaces/*"),
      "@interfaces": path.resolve(__dirname, "src/interfaces/index.ts"),
      "@api/*": path.resolve(__dirname, "src/api/*"),
      "@store/*": path.resolve(__dirname, "src/store/*"),
      "@config/*": path.resolve(__dirname, "src/config/*"),
      "@helpers/*": path.resolve(__dirname, "src/helpers/*"),
    },
  },

  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "Silva",
      fileName: (format) => `silva.${format}.js`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
