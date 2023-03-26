import { defineConfig } from "astro/config";
import unocss from "unocss/astro";

export default defineConfig({
  integrations: [unocss()],
  markdown: { shikiConfig: { theme: "vitesse-dark", wrap: true } },
});
