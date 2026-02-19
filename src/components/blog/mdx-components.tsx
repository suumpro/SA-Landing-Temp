import Link from 'next/link';
import { Children, isValidElement } from 'react';
import { Check, Info, AlertTriangle, CheckCircle, Hash } from 'lucide-react';
import { toSlug } from '@/lib/slug';
import type { MDXComponents } from 'mdx/types';

/** Recursively extract plain text from a React node tree */
function extractText(node: React.ReactNode): string {
  if (node == null || typeof node === 'boolean') return '';
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(extractText).join('');
  if (isValidElement(node)) {
    return extractText((node.props as { children?: React.ReactNode }).children);
  }
  return '';
}

function Stat({ label, value, change }: { label: string; value: string; change?: string }) {
  return (
    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 text-center">
      <p className="text-2xl font-extrabold text-gray-900">{value}</p>
      <p className="text-sm font-medium text-gray-600 mt-1">{label}</p>
      {change && <p className="text-xs text-primary mt-0.5">{change}</p>}
    </div>
  );
}

function StatGroup({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">{children}</div>;
}

function Tip({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
      <p className="text-sm font-bold text-primary mb-1.5">{title}</p>
      <div className="text-sm text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}

function Checklist({ children }: { children?: React.ReactNode }) {
  const items = parseChildrenToItems(children);
  return (
    <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-md bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-3.5 h-3.5 text-primary" />
            </div>
            <span className="text-sm text-gray-700">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Extract text items from MDX-rendered children (ul > li tree) */
function parseChildrenToItems(children: React.ReactNode): string[] {
  const items: string[] = [];

  const walk = (node: React.ReactNode): void => {
    if (!isValidElement(node)) return;
    const props = node.props as { children?: React.ReactNode };

    // If this is an <li>, extract its full text content
    if (typeof node.type === 'string' && node.type === 'li') {
      const text = extractText(props.children).trim();
      if (text) items.push(text);
      return;
    }

    // Otherwise recurse into children (e.g., <ul>)
    Children.forEach(props.children, walk);
  };

  Children.forEach(children, walk);
  return items;
}

function Quote({ author, children }: { author: string; children: React.ReactNode }) {
  return (
    <div className="border-l-4 border-primary/30 pl-5 py-2">
      <p className="text-gray-700 italic leading-relaxed">&ldquo;{children}&rdquo;</p>
      <p className="text-sm text-gray-500 mt-2">— {author}</p>
    </div>
  );
}

const calloutStyles = {
  info: { bg: 'bg-blue-50 border-blue-200', Icon: Info, iconColor: 'text-blue-600' },
  warning: { bg: 'bg-amber-50 border-amber-200', Icon: AlertTriangle, iconColor: 'text-amber-600' },
  success: { bg: 'bg-emerald-50 border-emerald-200', Icon: CheckCircle, iconColor: 'text-emerald-600' },
};

function Callout({ variant = 'info', children }: { variant?: 'info' | 'warning' | 'success'; children: React.ReactNode }) {
  const { bg, Icon, iconColor } = calloutStyles[variant];
  return (
    <div className={`rounded-xl p-4 border flex items-start gap-3 ${bg}`}>
      <Icon className={`w-5 h-5 shrink-0 mt-0.5 ${iconColor}`} />
      <div className="text-sm text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}

export const mdxComponents: MDXComponents = {
  Stat,
  StatGroup,
  Tip,
  Checklist,
  Quote,
  Callout,
  h2: ({ children }) => {
    const id = toSlug(extractText(children));
    return (
      <h2 id={id} className="group/heading text-xl font-bold text-gray-900 pt-2 scroll-mt-20">
        <Link href={`#${id}`} className="inline-flex items-center gap-2 hover:text-primary transition-colors">
          {children}
          <Hash className="w-4 h-4 text-gray-300 opacity-0 group-hover/heading:opacity-100 transition-opacity" />
        </Link>
      </h2>
    );
  },
  p: ({ children }) => (
    <p className="text-gray-700 leading-relaxed">{children}</p>
  ),
  hr: () => <hr className="border-gray-100" />,
};
