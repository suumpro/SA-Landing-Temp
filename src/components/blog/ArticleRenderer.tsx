import Link from 'next/link';
import { Check, Info, AlertTriangle, CheckCircle, Hash } from 'lucide-react';
import type { ArticleBlock } from '@/data/articles/types';

function toSlug(text: string): string {
  return text
    .replace(/[^\w\s가-힣]/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase();
}

function StatBlock({ label, value, change }: { label: string; value: string; change?: string }) {
  return (
    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 text-center">
      <p className="text-2xl font-extrabold text-gray-900">{value}</p>
      <p className="text-sm font-medium text-gray-600 mt-1">{label}</p>
      {change && <p className="text-xs text-primary mt-0.5">{change}</p>}
    </div>
  );
}

const calloutStyles = {
  info: { bg: 'bg-blue-50 border-blue-200', icon: Info, iconColor: 'text-blue-600' },
  warning: { bg: 'bg-amber-50 border-amber-200', icon: AlertTriangle, iconColor: 'text-amber-600' },
  success: { bg: 'bg-emerald-50 border-emerald-200', icon: CheckCircle, iconColor: 'text-emerald-600' },
};

export default function ArticleRenderer({ blocks }: { blocks: ArticleBlock[] }) {
  // Group consecutive stat blocks together
  const grouped: (ArticleBlock | { type: 'stat-group'; items: Extract<ArticleBlock, { type: 'stat' }>[] })[] = [];
  let i = 0;
  while (i < blocks.length) {
    const block = blocks[i];
    if (block.type === 'stat') {
      const statItems: Extract<ArticleBlock, { type: 'stat' }>[] = [block];
      while (i + 1 < blocks.length && blocks[i + 1].type === 'stat') {
        i++;
        statItems.push(blocks[i] as Extract<ArticleBlock, { type: 'stat' }>);
      }
      grouped.push(statItems.length > 1 ? { type: 'stat-group', items: statItems } : block);
    } else {
      grouped.push(block);
    }
    i++;
  }

  return (
    <div className="space-y-6">
      {grouped.map((block, idx) => {
        if (block.type === 'stat-group') {
          return (
            <div key={idx} className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {block.items.map((s, si) => (
                <StatBlock key={si} label={s.label} value={s.value} change={s.change} />
              ))}
            </div>
          );
        }

        switch (block.type) {
          case 'heading': {
            const id = toSlug(block.text);
            return (
              <h2 key={idx} id={id} className="group/heading text-xl font-bold text-gray-900 pt-2 scroll-mt-20">
                <Link href={`#${id}`} className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                  {block.text}
                  <Hash className="w-4 h-4 text-gray-300 opacity-0 group-hover/heading:opacity-100 transition-opacity" />
                </Link>
              </h2>
            );
          }

          case 'paragraph':
            return <p key={idx} className="text-gray-700 leading-relaxed">{block.text}</p>;

          case 'tip':
            return (
              <div key={idx} className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                <p className="text-sm font-bold text-primary mb-1.5">{block.title}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{block.text}</p>
              </div>
            );

          case 'stat':
            return (
              <div key={idx} className="grid grid-cols-1 gap-3">
                <StatBlock label={block.label} value={block.value} change={block.change} />
              </div>
            );

          case 'checklist':
            return (
              <div key={idx} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                <div className="space-y-3">
                  {block.items.map((item, ci) => (
                    <div key={ci} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-md bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );

          case 'quote':
            return (
              <div key={idx} className="border-l-4 border-primary/30 pl-5 py-2">
                <p className="text-gray-700 italic leading-relaxed">&ldquo;{block.text}&rdquo;</p>
                <p className="text-sm text-gray-500 mt-2">— {block.author}</p>
              </div>
            );

          case 'callout': {
            const style = calloutStyles[block.variant];
            const Icon = style.icon;
            return (
              <div key={idx} className={`rounded-xl p-4 border flex items-start gap-3 ${style.bg}`}>
                <Icon className={`w-5 h-5 shrink-0 mt-0.5 ${style.iconColor}`} />
                <p className="text-sm text-gray-700 leading-relaxed">{block.text}</p>
              </div>
            );
          }

          case 'divider':
            return <hr key={idx} className="border-gray-100" />;

          default:
            return null;
        }
      })}
    </div>
  );
}

/** Extract heading slugs for TOC */
export function getHeadings(blocks: ArticleBlock[]): { id: string; text: string }[] {
  return blocks
    .filter((b): b is Extract<ArticleBlock, { type: 'heading' }> => b.type === 'heading')
    .map((b) => ({ id: toSlug(b.text), text: b.text }));
}
