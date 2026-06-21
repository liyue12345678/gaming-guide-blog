import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    game: z.string(),
    gameSlug: z.string(),
    category: z.enum([
      'Boss Guide',
      'Build Guide',
      'Walkthrough',
      'Tips & Tricks',
      'Beginners Guide',
      'Lore',
      'Review',
      'News',
    ]),
    difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced', 'Expert']).optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    toc: z.boolean().default(true),
    author: z.string().default('GameGuide Pro'),
    readTime: z.number().optional(),
    featured: z.boolean().default(false),
    affiliateLinks: z.boolean().default(false),
  }),
});

export const collections = {
  posts: postsCollection,
};
