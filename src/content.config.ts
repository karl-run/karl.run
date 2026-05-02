import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({
    base: './src/content/posts',
    pattern: '**/index.mdx',
    generateId: ({ entry }) => entry.replace(/\/index\.mdx$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    tags: z.array(z.string()),
    date: z.string(),
    wide: z.boolean().optional(),
  }),
});

export const collections = { posts };
