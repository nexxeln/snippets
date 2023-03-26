import { z, defineCollection } from "astro:content";

const snippetSchema = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
});

export type Snippet = z.infer<typeof snippetSchema>;

export const collections = {
  snippets: defineCollection({
    schema: snippetSchema,
  }),
};
