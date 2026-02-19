import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from './mdx-components';
import { toSlug } from '@/lib/slug';

export default async function ArticleRenderer({ body }: { body: string }) {
  return (
    <div className="space-y-6">
      <MDXRemote source={body} components={mdxComponents} />
    </div>
  );
}

/** Extract heading slugs for TOC from raw MDX */
export function getHeadings(rawMdx: string): { id: string; text: string }[] {
  const headingRegex = /^## (.+)$/gm;
  const headings: { id: string; text: string }[] = [];
  let match;
  while ((match = headingRegex.exec(rawMdx)) !== null) {
    const text = match[1].trim();
    headings.push({ id: toSlug(text), text });
  }
  return headings;
}
