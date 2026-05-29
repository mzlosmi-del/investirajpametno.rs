import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    /** optional shorter title for the browser tab + SERP listing (defaults to title) */
    seoTitle: z.string().optional(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string().default('Investiranje'),
    tags: z.array(z.string()).default([]),
    /** optimized hero image (relative path to a file in the post's folder or src/assets) */
    heroImage: image().optional(),
    /** alt text for the hero image (required when heroImage is set, for a11y/SEO) */
    heroImageAlt: z.string().optional(),
    /** featured on homepage / pinned higher in lists */
    featured: z.boolean().default(false),
    /** old WordPress URLs this article replaces (for 301 redirects) */
    legacyUrls: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    /** optional FAQ — rendered as an accordion + emitted as FAQPage JSON-LD */
    faq: z
      .array(z.object({ q: z.string(), a: z.string() }))
      .optional(),
    /** optional HowTo — emitted as HowTo JSON-LD for rich results */
    howTo: z
      .object({
        name: z.string(),
        totalTime: z.string().optional(),
        tool: z.string().optional(),
        steps: z.array(z.object({ name: z.string(), text: z.string() })),
      })
      .optional(),
  }),
});

export const collections = { blog };
