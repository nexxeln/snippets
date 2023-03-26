import { z, defineCollection } from "astro:content";

export const collections = {
  snippets: defineCollection({
    schema: z.object({
      title: z.string(),
      tags: z.array(z.string()),
    }),
  }),
};
