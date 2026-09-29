import React from 'react';

export interface TabItem {
  id: string;
  label: string;
  badge?: string;
}

export interface TabsProps {
  items: TabItem[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
  size?: 'sm' | 'md';
}

export const Tabs: React.FC<TabsProps> = ({
  items,
  activeId,
  onChange,
  className = '',
  size = 'md',
}) => {
  return (
    <div
      className={`inline-flex items-center p-1 bg-[#17171A] border border-[#2B2B30] rounded-full overflow-x-auto max-w-full ${className}`}
      role="tablist"
    >
      {items.map((tab) => {
        const isActive = tab.id === activeId;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={`cursor-pointer whitespace-nowrap rounded-full transition-all duration-150 flex items-center gap-2 select-none ${
              size === 'sm' ? 'px-3.5 py-1.5 text-xs' : 'px-5 py-2 text-xs md:text-sm'
            } ${
              isActive
                ? 'bg-[#F2EEE6] text-[#0D0D0F] font-bold shadow-[0_1px_3px_rgba(0,0,0,0.4)]'
                : 'text-[#B5B0A6] hover:text-[#F2EEE6] font-medium'
            }`}
          >
            <span>{tab.label}</span>
            {tab.badge && (
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full uppercase font-mono ${
                  isActive
                    ? 'bg-[#0D0D0F] text-[#F2EEE6]'
                    : 'bg-[#2B2B30] text-[#8C877E]'
                }`}
              >
                {tab.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
