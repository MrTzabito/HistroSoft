import React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  ariaLabel: string;
  children: React.ReactNode;
}

export const IconButton: React.FC<IconButtonProps> = ({
  variant = 'secondary',
  size = 'md',
  ariaLabel,
  children,
  className = '',
  ...props
}) => {
  const sizeClasses = {
    sm: 'w-[36px] h-[36px]',
    md: 'w-[44px] h-[44px]',
    lg: 'w-[48px] h-[48px]',
  };

  const variantClasses = {
    primary: 'bg-[color:var(--accent)] text-[color:var(--accent-fg)] hover:bg-[color:var(--accent-hover)]',
    secondary: 'border border-[color:var(--border-subtle)] text-[color:var(--text-primary)] bg-[color:var(--surface-raised)] hover:border-[color:var(--border-hover)] hover:text-[color:var(--accent)]',
    ghost: 'text-[color:var(--text-muted)] hover:text-[color:var(--text-primary)] hover:bg-[color:var(--surface-inverse)]',
  };

  return (
    <button
      aria-label={ariaLabel}
      className={`inline-flex items-center justify-center rounded-full transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface-page)] active:translate-y-px ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
