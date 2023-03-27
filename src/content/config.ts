import { z, defineCollection } from "astro:content";

export const collections = {
  snippets: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      language: z.string(),
    }),
  }),
};
