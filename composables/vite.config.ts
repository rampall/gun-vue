import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import checker from 'vite-plugin-checker'

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default defineConfig({
  plugins: [
    moduleExclude("text-encoding"),
    checker({
      typescript: {
        buildMode: true
      }
    }),],
  build: {
    outDir: 'dist',
    lib: {
      entry: path.resolve(dirname, "../src/composables.ts"),
      formats: ["es"],
    },
    sourcemap: true,
    rollupOptions: {
      output: {
        minifyInternalExports: false,
      },
    },
  },
  optimizeDeps: {
    include: [
      "gun",
      "gun/gun",
      "gun/sea",
      "gun/sea.js",
      "gun/lib/then",
      "gun/lib/webrtc",
      "gun/lib/radix",
      "gun/lib/radisk",
      "gun/lib/store",
      "gun/lib/rindexed",
    ],
  },
});

function moduleExclude(match) {
  const m = (id) => id.indexOf(match) > -1;
  return {
    name: `exclude-${match}`,
    resolveId(id) {
      if (m(id)) return id;
    },
    load(id) {
      if (m(id)) return `export default {}`;
    },
  };
}
