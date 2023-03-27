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
    presetWebFonts({
      provider: "bunny",
      fonts: { mono: "IBM Plex Mono", sans: "Karla" },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
