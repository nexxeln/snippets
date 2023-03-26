import { z, defineCollection } from "astro:content";

export const collections = {
  snippets: defineCollection({
    schema: z.object({
      title: z.string(),
      code: z.string(),
      explanation: z.string().optional(),
      tags: z.array(z.string()),
    }),
  }),
};
