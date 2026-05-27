import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string().default('Investiranje'),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    /** featured on homepage / pinned higher in lists */
    featured: z.boolean().default(false),
    /** old WordPress URLs this article replaces (for 301 redirects) */
    legacyUrls: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
