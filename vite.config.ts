import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { defineConfig } from "vite";

const root: string = process.cwd();
const pathResolve = (path: string): string => resolve(root, path);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [{ find: "@", replacement: pathResolve("src") }],
  },
});
