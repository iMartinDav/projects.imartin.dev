import { rssSchema } from '@astrojs/rss';

import { defineCollection } from 'astro:content';

const now = defineCollection({
  schema: rssSchema
});

export const collections = { now };
