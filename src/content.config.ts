import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const percentageSchema = z.number().int().min(0).max(100);

const dateSchema = z.string().refine((value) => !Number.isNaN(Date.parse(value)), 'Invalid date');

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
    date: dateSchema,
  }),
});

const projects = defineCollection({
  loader: glob({
    base: './src/content/projects',
    pattern: '**/index.mdx',
    generateId: ({ entry }) => entry.replace(/\/index\.mdx$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    tags: z.array(z.string()),
    date: dateSchema,
    repo: z.url(),
    app: z.url().optional(),
    projectValues: z.object({
      usefulness: percentageSchema,
      users: percentageSchema,
      'fun factor': percentageSchema,
    }),
  }),
});

export const collections = { posts, projects };
