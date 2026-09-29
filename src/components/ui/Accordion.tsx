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
    <div className="w-full border-t border-[#2B2B30]">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            className="border-b border-[#2B2B30] transition-colors"
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full py-5 text-left flex items-start justify-between gap-4 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B82E]"
            >
              <div className="flex-1 pr-4">
                {item.category && (
                  <span className="block text-[11px] font-sans font-extrabold uppercase tracking-[0.16em] text-[#F5B82E] mb-1">
                    {item.category}
                  </span>
                )}
                <span className="font-sans font-semibold text-base md:text-lg text-[#F2EEE6] group-hover:text-[#FFD36B] transition-colors">
                  {item.title}
                </span>
              </div>
              <span
                className={`mt-1 w-6 h-6 rounded-full border border-[#2B2B30] flex items-center justify-center shrink-0 text-[#8C877E] group-hover:border-[#F5B82E] group-hover:text-[#F5B82E] transition-all duration-200 ${
                  isOpen ? 'rotate-180 bg-[#2A2316] text-[#F5B82E] border-[#F5B82E]/40' : ''
                }`}
              >
                <ChevronDown className="w-3.5 h-3.5" />
              </span>
            </button>
            {isOpen && (
              <div className="pb-6 pt-1 text-sm md:text-base text-[#B5B0A6] leading-relaxed max-w-3xl animate-in fade-in slide-in-from-top-2 duration-200">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
