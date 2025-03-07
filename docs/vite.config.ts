import { defineConfig } from "vite"
import ViteYaml from '@modyfi/vite-plugin-yaml';
import Unocss from 'unocss/vite'

import path from "path";
import { fileURLToPath } from "url";

// //@ts-expect-error
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default defineConfig({
  plugins: [
    Unocss(), ViteYaml(),
  ],
  resolve: {
    alias: {
      "#components": path.resolve(dirname, "../src/components"),
      "#composables": path.resolve(dirname, "../src/composables"),
    },
  },
})