import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItemData {
  id: string;
  title: string;
  content: React.ReactNode;
  category?: string;
}

export interface AccordionProps {
  items: AccordionItemData[];
  defaultOpenId?: string;
  allowMultiple?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultOpenId,
  allowMultiple = false,
}) => {
  const [openIds, setOpenIds] = useState<string[]>(
    defaultOpenId ? [defaultOpenId] : []
  );

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className="w-full border-t border-[color:var(--border-subtle)]">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            className="border-b border-[color:var(--border-subtle)] transition-colors"
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full py-5 text-left flex items-start justify-between gap-4 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
            >
              <div className="flex-1 pr-4">
                {item.category && (
                  <span className="block text-[11px] font-sans font-bold uppercase tracking-[0.16em] text-[color:var(--accent)] mb-1">
                    {item.category}
                  </span>
                )}
                <span className="font-sans font-semibold text-base md:text-lg text-[color:var(--text-primary)] group-hover:text-[color:var(--accent-hover)] transition-colors">
                  {item.title}
                </span>
              </div>
              <span
                className={`mt-1 w-6 h-6 rounded-full border border-[color:var(--border-subtle)] flex items-center justify-center shrink-0 text-[color:var(--text-faint)] group-hover:border-[color:var(--accent)] group-hover:text-[color:var(--accent)] transition-all duration-200 ${
                  isOpen ? 'rotate-180 bg-[color:var(--accent-subtle)] text-[color:var(--accent)] border-[color:var(--accent)]/40' : ''
                }`}
              >
                <ChevronDown className="w-3.5 h-3.5" />
              </span>
            </button>
            {isOpen && (
              <div className="pb-6 pt-1 text-sm md:text-base text-[color:var(--text-muted)] leading-relaxed max-w-3xl animate-in fade-in slide-in-from-top-2 duration-200">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
