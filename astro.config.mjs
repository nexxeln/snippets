import { defineConfig } from "astro/config";
import unocss from "unocss/astro";

import serendipity from "./src/serendipity.json";

export default defineConfig({
  integrations: [unocss()],
  markdown: { shikiConfig: { theme: serendipity, wrap: true } },
});
