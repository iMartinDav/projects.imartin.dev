import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    excerpt: z.string().optional(),
    category: z.string(),
    image: z.string(),
    author: z.string(),
    tags: z.array(z.string()),
    projectURL: z.string().url().optional(),
    repoURL: z.string().url().optional(),
    minutesRead: z.string().optional(),
  }),
});

export const collections = {
  posts,
};
