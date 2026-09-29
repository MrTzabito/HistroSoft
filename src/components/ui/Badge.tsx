import React from 'react';

export interface BadgeProps {
  variant?: 'gold' | 'default' | 'success' | 'warning' | 'info';
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  children,
  className = '',
}) => {
  const variantStyles = {
    gold: 'bg-[#2A2316] text-[#F5B82E] border-[#F5B82E]/30',
    default: 'bg-[#1F1F23] text-[#D8D3C9] border-[#2B2B30]',
    success: 'bg-[#1C2A1D] text-[#8FD694] border-[#8FD694]/30',
    warning: 'bg-[#2A2414] text-[#F5C860] border-[#F5C860]/30',
    info: 'bg-[#15222E] text-[#7CC4FF] border-[#7CC4FF]/30',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-sans font-semibold tracking-wide border uppercase ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
