import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    tagline: z.string().max(140),
    services: z.array(z.string()),
    problem: z.string(),
    approach: z.string(),
    outcome: z.string(),
    coverSrc: z.string().optional(),
    coverAlt: z.string(),
    order: z.number(),
    year: z.string().optional(),
    role: z.string().optional(),
    metric: z.string().optional(),
    metricLabel: z.string().optional(),
    sample: z.boolean().default(false),
  }),
});

export const collections = { work };
