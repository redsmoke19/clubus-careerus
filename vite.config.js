import {resolve} from "node:path";
import {fileURLToPath, URL} from "node:url"
import includeHtml from "vite-include-html-plugin";
import {defineConfig} from "vite"

const root = resolve(__dirname, "src")
const outDir = resolve(__dirname, "dist")

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [includeHtml()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./source", import.meta.url))
    }
  }
})
