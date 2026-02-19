import { defineConfig, defineCollection, s } from 'velite';

const articles = defineCollection({
  name: 'Article',
  pattern: 'articles/**/*.mdx',
  schema: s.object({
    slug: s.string(),
    title: s.string(),
    excerpt: s.string(),
    category: s.enum(['weekly', 'season', 'insight', 'tip']),
    date: s.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    readTime: s.number(),
    tags: s.array(s.string()).default([]),
    icon: s.string().default('Newspaper'),
    relatedSlugs: s.array(s.string()).optional(),
    body: s.raw(),
  }),
});

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    clean: true,
  },
  collections: { articles },
});
