import {
  defineConfig,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({ provider: "fontshare", fonts: { sans: "Switzer" } }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
