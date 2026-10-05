import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'link' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      iconRight,
      iconLeft,
      children,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: 'h-[36px] px-4 text-xs font-semibold gap-1.5',
      md: 'h-[44px] px-6 text-sm font-semibold gap-2',
      lg: 'h-[48px] px-8 text-base font-semibold gap-2.5',
    };

    const variantClasses = {
      primary:
        'bg-[color:var(--accent)] text-[color:var(--accent-fg)] hover:bg-[color:var(--accent-hover)] active:bg-[color:var(--accent-press)] active:translate-y-px shadow-sm',
      secondary:
        'border border-[color:var(--border-subtle)] text-[color:var(--text-primary)] bg-transparent hover:bg-[color:var(--contrast-fill)] hover:text-[color:var(--contrast-fg)] hover:border-[color:var(--contrast-fill)] active:translate-y-px',
      ghost:
        'text-[color:var(--text-primary)] bg-transparent hover:bg-[color:var(--surface-raised)] hover:text-[color:var(--accent-hover)] active:translate-y-px',
      link:
        'text-[color:var(--accent)] hover:text-[color:var(--accent-hover)] bg-transparent p-0 h-auto underline-offset-4 hover:underline',
      destructive:
        'bg-[color:var(--red-soft)] border border-[color:var(--red)]/40 text-[color:var(--red)] hover:bg-[color:var(--red)] hover:text-[color:var(--accent-fg)]',
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={`inline-flex items-center justify-center rounded-full font-sans tracking-tight transition-all duration-150 ease-out select-none whitespace-nowrap cursor-pointer disabled:opacity-45 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface-page)] ${
          sizeClasses[size]
        } ${variantClasses[variant]} ${className}`}
        {...props}
      >
        {iconLeft && <span className="shrink-0">{iconLeft}</span>}
        <span>{children}</span>
        {iconRight && <span className="shrink-0 transition-transform duration-150 group-hover:translate-x-0.5">{iconRight}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
