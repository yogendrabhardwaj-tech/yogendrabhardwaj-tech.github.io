import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    sector: z.string(),
    role: z.string(),
    period: z.string(),
    order: z.number(),
    pillar: z.enum(['agentic', 'rag', 'data']),
    stack: z.array(z.string()),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// Personal blog: learnings, utility guides and "how to become X" roadmaps.
// Drop .md / .mdx files in src/content/blog/. Files starting with "_" (prompt, template, plan) are ignored.
const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(90),
      description: z.string().max(200),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      category: z.enum(['learn', 'utility', 'how-to-become']),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

const sessions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sessions' }),
  schema: z.object({
    institution: z.string(),
    department: z.string().optional(),
    topic: z.string(),
    format: z.enum(['Guest lecture', 'Workshop', 'Faculty development program', 'Hands-on lab', 'Panel', 'Webinar', 'Keynote']),
    theme: z.enum(['GenAI & Agents', 'Data & Cloud', 'Careers & Industry']),
    date: z.coerce.date().optional(),
    /** Free-text timing when the exact date is unknown, e.g. "2020–21". */
    period: z.string().optional(),
    audience: z.string().optional(),
    location: z.string().optional(),
    slides: z.string().url().optional(),
    testimonial: z.object({ quote: z.string(), by: z.string() }).optional(),
    placeholder: z.boolean().default(false),
  }),
});

export const collections = { work, notes, blog, sessions };
