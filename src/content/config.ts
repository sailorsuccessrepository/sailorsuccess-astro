import { defineCollection, z } from 'astro:content';

// Schema for articles across all categories
const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.date(),
  updatedDate: z.date().optional(),
  author: z.string().default('Sailor Success Team'),
  category: z.string(),
  subcategory: z.string().optional(),
  tags: z.array(z.string()).default([]),
  readTime: z.number().default(5),
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),
  // SEO
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  canonicalUrl: z.string().optional(),
  // Related content
  relatedArticles: z.array(z.string()).default([]),
});

// Define collections for each section
const learn = defineCollection({
  type: 'content',
  schema: articleSchema,
});

const careers = defineCollection({
  type: 'content',
  schema: articleSchema,
});

const money = defineCollection({
  type: 'content',
  schema: articleSchema,
});

const rights = defineCollection({
  type: 'content',
  schema: articleSchema,
});

const tools = defineCollection({
  type: 'content',
  schema: articleSchema,
});

// NEW: Guides collection for step-by-step practical guides
const guides = defineCollection({
  type: 'content',
  schema: articleSchema,
});

export const collections = {
  learn,
  careers,
  money,
  rights,
  tools,
  guides,
};
