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
    gold: 'bg-[color:var(--accent-subtle)] text-[color:var(--accent)] border-[color:var(--accent)]/30',
    default: 'bg-[color:var(--surface-inverse)] text-[color:var(--text-secondary)] border-[color:var(--border-subtle)]',
    success: 'bg-[color:var(--green-soft)] text-[color:var(--green)] border-[color:var(--green)]/30',
    warning: 'bg-[color:var(--amber-soft)] text-[color:var(--amber)] border-[color:var(--amber)]/30',
    info: 'bg-[color:var(--blue-soft)] text-[color:var(--blue)] border-[color:var(--blue)]/30',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-sans font-semibold tracking-wide border uppercase ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
